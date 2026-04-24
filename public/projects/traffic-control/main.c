/*
 * Traffic Control System -- PIC16F877A
 * Two-axis intersection with pedestrian request button.
 *
 * Target   : Microchip PIC16F877A, 4 MHz crystal
 * Toolchain: MPLAB X IDE + XC8 C compiler
 *
 * Outputs
 *   RB1 NS_RED   RB2 NS_YELLOW  RB3 NS_GREEN
 *   RB4 EW_RED   RB5 EW_YELLOW  RB6 EW_GREEN
 *   RD0 PED_WALK RD1 PED_STOP
 *
 * Inputs
 *   RB0/INT = pedestrian request, active-low with 10k pull-up
 */

#include <xc.h>
#include <stdint.h>

#pragma config FOSC = HS, WDTE = OFF, PWRTE = ON, BOREN = ON, LVP = OFF
#pragma config CPD = OFF, WRT = OFF, CP = OFF

#define _XTAL_FREQ 4000000UL

#define NS_RED     RB1
#define NS_YELLOW  RB2
#define NS_GREEN   RB3
#define EW_RED     RB4
#define EW_YELLOW  RB5
#define EW_GREEN   RB6
#define PED_WALK   RD0
#define PED_STOP   RD1

typedef enum {
    PHASE_NS_GREEN,
    PHASE_NS_YELLOW,
    PHASE_EW_GREEN,
    PHASE_EW_YELLOW,
    PHASE_PED_WALK,
    PHASE_PED_CLEAR
} phase_t;

/* Seconds per phase. The all-red walk + clearance is injected
 * at the end of any yellow when a pedestrian request is pending. */
static const uint8_t PHASE_SECONDS[] = {
    [PHASE_NS_GREEN]  = 12,
    [PHASE_NS_YELLOW] =  3,
    [PHASE_EW_GREEN]  = 12,
    [PHASE_EW_YELLOW] =  3,
    [PHASE_PED_WALK]  = 10,
    [PHASE_PED_CLEAR] =  3
};

static volatile uint8_t ped_request = 0;

void __interrupt() isr(void) {
    if (INTCONbits.INTF) {
        ped_request = 1;
        INTCONbits.INTF = 0;
    }
}

static void drive(uint8_t nr, uint8_t ny, uint8_t ng,
                  uint8_t er, uint8_t ey, uint8_t eg,
                  uint8_t walk) {
    NS_RED = nr; NS_YELLOW = ny; NS_GREEN = ng;
    EW_RED = er; EW_YELLOW = ey; EW_GREEN = eg;
    PED_WALK = walk;
    PED_STOP = !walk;
}

static void apply_phase(phase_t p) {
    switch (p) {
        case PHASE_NS_GREEN:  drive(0,0,1, 1,0,0, 0); break;
        case PHASE_NS_YELLOW: drive(0,1,0, 1,0,0, 0); break;
        case PHASE_EW_GREEN:  drive(1,0,0, 0,0,1, 0); break;
        case PHASE_EW_YELLOW: drive(1,0,0, 0,1,0, 0); break;
        case PHASE_PED_WALK:  drive(1,0,0, 1,0,0, 1); break;
        case PHASE_PED_CLEAR: drive(1,0,0, 1,0,0, 0); break;
    }
}

static void hold_seconds(uint8_t seconds) {
    for (uint8_t s = 0; s < seconds; s++) {
        __delay_ms(1000);
    }
}

void main(void) {
    TRISB = 0b00000001;   /* RB0 input, RB1..RB6 outputs */
    TRISD = 0b11111100;   /* RD0, RD1 outputs */
    PORTB = 0;
    PORTD = 0;

    /* RB0/INT: interrupt on falling edge = button press */
    OPTION_REGbits.INTEDG = 0;
    INTCONbits.INTF = 0;
    INTCONbits.INTE = 1;
    INTCONbits.GIE  = 1;

    phase_t phase = PHASE_NS_GREEN;

    for (;;) {
        apply_phase(phase);
        hold_seconds(PHASE_SECONDS[phase]);

        if ((phase == PHASE_NS_YELLOW || phase == PHASE_EW_YELLOW)
            && ped_request) {
            apply_phase(PHASE_PED_WALK);
            hold_seconds(PHASE_SECONDS[PHASE_PED_WALK]);
            apply_phase(PHASE_PED_CLEAR);
            hold_seconds(PHASE_SECONDS[PHASE_PED_CLEAR]);
            ped_request = 0;
        }

        switch (phase) {
            case PHASE_NS_GREEN:  phase = PHASE_NS_YELLOW; break;
            case PHASE_NS_YELLOW: phase = PHASE_EW_GREEN;  break;
            case PHASE_EW_GREEN:  phase = PHASE_EW_YELLOW; break;
            case PHASE_EW_YELLOW: phase = PHASE_NS_GREEN;  break;
            default:              phase = PHASE_NS_GREEN;  break;
        }
    }
}
