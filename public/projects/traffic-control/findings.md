# Traffic Control System — findings

## Scope

A two-axis intersection controller built from scratch on a PIC16F877A, with:

- independent NS and EW signal heads (red / yellow / green)
- a pedestrian request button with walk and stop indicators
- a safe, non-preempting pedestrian phase that is only serviced at a yellow boundary

## Hardware

- Microchip PIC16F877A (DIP-40), 4 MHz HS crystal, 22 pF loading caps
- 10 kΩ MCLR pull-up, 10 kΩ pull-up on RB0/INT for the pedestrian button
- 6 signal LEDs (2 × RGY) on RB1–RB6, 2 pedestrian indicators on RD0–RD1
- 330 Ω per LED, common cathode to ground, 5 V rail from a bench supply

## Firmware design

- Six-state state machine: NS_GREEN → NS_YELLOW → EW_GREEN → EW_YELLOW, with PED_WALK + PED_CLEAR injected as an all-red detour.
- Pedestrian button is handled via the RB0/INT external interrupt on a falling edge. The ISR sets a `ped_request` flag and returns; the main loop inspects the flag only at yellow-phase boundaries so a pedestrian press can never cut short an active green.
- Phase durations are stored in a small lookup table so timing can be tuned without touching the state logic.
- Built with MPLAB X + XC8. Fits comfortably in the PIC16F877A's flash with headroom for expansion.

## What this project demonstrates

- Designing against a constrained target (no OS, no malloc, 8-bit registers, a handful of IO pins).
- Using interrupts only where they earn their keep, and keeping the rest of the program in a deterministic main loop.
- Turning an everyday intersection spec into a testable state machine with clear invariants (no conflicting greens; no pedestrian preemption during green).

## Possible extensions

- Timer-driven tick instead of `__delay_ms()` so CPU time is available for additional sensors.
- Induction-loop vehicle detection on unused PORTC pins to skip empty phases at night.
- UART telemetry out to a host for cycle counting and diagnostics.
