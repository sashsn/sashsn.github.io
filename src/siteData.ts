export type FocusKey = 'backend' | 'data' | 'embedded' | 'delivery'

export type ProjectLink = {
  label: string
  url: string
  external?: boolean
}

export type ProjectMetric = {
  label: string
  value: string
  detail: string
}

export type ProjectStoryCard = {
  title: string
  body: string
}

export type ProjectGalleryItem = {
  src: string
  alt: string
  caption: string
  fit?: 'cover' | 'contain'
}

export type ProjectCodeSnippet = {
  title: string
  language: string
  source: string
  caption?: string
}

export type Project = {
  slug: string
  eyebrow: string
  title: string
  status: string
  focus: FocusKey[]
  homeSummary: string
  caseStudySummary: string
  whyThisProject: string
  contributionSummary: string
  role: string
  period: string
  stack: string[]
  chips: string[]
  metrics: ProjectMetric[]
  highlights: string[]
  projectBullets: string[]
  story: ProjectStoryCard[]
  gallery: ProjectGalleryItem[]
  code?: ProjectCodeSnippet[]
  links: ProjectLink[]
  consoleLines: string[]
}

export type ArchiveEntry = {
  title: string
  status: string
  detail: string
}

export const focusModes: Record<
  FocusKey,
  {
    label: string
    title: string
    description: string
    stat: string
    callout: string
    points: string[]
  }
> = {
  backend: {
    label: 'Backend',
    title: 'API design, auth, services, and database-backed application logic.',
    description:
      'The work I reach for first is on the backend side: designing routes, shaping service layers, validating input, and building the logic that keeps a product coherent as it grows.',
    stat: 'APIs, auth, service layers',
    callout: 'Examples: Roadeo, Fitness Planner, Theatre, Food Bank',
    points: [
      'JWT-backed auth and role-gated flows across marketplace, fitness, and ticketing products',
      'Service + DAO organization that keeps domain rules testable instead of scattered across controllers',
      'Input validation, error shape, and predictable response handling at the route boundary',
    ],
  },
  data: {
    label: 'Data + ML',
    title: 'Data workflows, reporting surfaces, and ML experimentation.',
    description:
      'A lot of my best work has been taking messy or high-volume information and turning it into something structured, queryable, or measurable. That shows up in both the internship and coursework.',
    stat: 'Pipelines, dashboards, ML',
    callout: 'Examples: Suncor automation, KPA ML, biometric face recognition',
    points: [
      'Python validation + transform tooling around industrial DCS and historian data',
      'Power BI, SQL, and M Query reporting surfaces for engineering review',
      'Supervised ML experiments for biometric classification and process-area signal detection',
    ],
  },
  embedded: {
    label: 'Embedded',
    title: 'Microcontrollers, interrupts, and deterministic state machines.',
    description:
      'I also enjoy work that runs close to the metal. Designing against tight register budgets and a fixed IO map keeps me honest about program structure in a way higher-level stacks do not.',
    stat: '8-bit PIC firmware',
    callout: 'Examples: traffic control system',
    points: [
      'State-machine-driven firmware on a PIC16F877A with interrupt-backed inputs',
      'Non-preempting pedestrian logic gated by yellow-phase boundaries',
      'MPLAB X + XC8 build, 4 MHz HS crystal, external interrupt + port IO mapping',
    ],
  },
  delivery: {
    label: 'Delivery',
    title: 'Projects that are testable, maintainable, and safe to keep evolving.',
    description:
      'I care about how software gets built and maintained: local setup, tests, CI, and the practical details that make a project easier to extend with a team.',
    stat: 'Testing, CI, local setup',
    callout: 'Examples: Roadeo, Fitness Planner, internship tooling',
    points: [
      'Docker Compose-based local stacks with service + database orchestration',
      'GitHub Actions and GitLab CI experience across school and team projects',
      'Testing habits spanning backend behavior and user-facing flows',
    ],
  },
}

export const heroFacts = [
  'software engineering new grad',
  'suncor internship',
  'backend + data',
  'full-stack + embedded',
]

export const workbenchFiles = [
  { label: 'about.md', kind: 'section' as const, target: 'top' },
  { label: 'experience.md', kind: 'section' as const, target: 'experience' },
  { label: 'projects.json', kind: 'section' as const, target: 'work' },
  { label: 'contact.txt', kind: 'section' as const, target: 'contact' },
]

export const consoleEvents = [
  '[profile] software engineering new grad',
  '[experience] suncor internship + research assistant work',
  '[focus] backend, data workflows, embedded, full-stack',
  '[status] applying for full-time software roles',
]

export const pipeline = [
  'raw inputs',
  'validation',
  'schema design',
  'service logic',
  'clear product behavior',
]

export const experienceCards = [
  {
    title: 'Suncor Energy',
    role: 'Software Engineering Intern',
    detail:
      'Built Python validation and dashboard tooling around DCS tags, PI historian data, and engineering reporting workflows, and contributed to a 4,000+ tag CLM-to-SCADA conversion.',
    link: '/#work',
    linkLabel: 'view internship projects',
  },
  {
    title: 'University of Calgary',
    role: 'Research Assistant',
    detail:
      'Researched gamification and reward-system design for educational software and built interactive learning modules in HTML, CSS, JavaScript, and React.',
    link: 'https://www.linkedin.com/in/sadmansni',
    linkLabel: 'linkedin profile',
  },
]

export const projects: Project[] = [
  {
    slug: 'roadeo',
    eyebrow: 'Full stack / team project',
    title: 'Roadeo',
    status: 'team project',
    focus: ['backend', 'delivery'],
    homeSummary:
      'Current team project where I work on backend and full-stack features for a peer-to-peer car rental platform: auth, search, bookings, messaging, reviews, and role-based dashboards.',
    caseStudySummary:
      'Roadeo is a current team project that best reflects the kind of backend and full-stack work I want to do professionally: typed services, database-backed product flows, protected routes, and logic that has to stay coherent as the scope grows.',
    whyThisProject:
      'This is the clearest example of me working in a modern team stack on application logic that goes well beyond a small CRUD demo.',
    contributionSummary:
      'I focus on the backend and full-stack side of the build: protected flows, service and route organization, database-backed features, and the logic connecting listings, bookings, messaging, and reviews.',
    role: 'Full-stack engineering / team project',
    period: '2026 / current build',
    stack: [
      'React',
      'Vite',
      'TypeScript',
      'Express',
      'PostgreSQL',
      'Drizzle ORM',
      'React Query',
      'Docker Compose',
      'GitLab CI',
      'Vitest',
    ],
    chips: ['marketplace', 'jwt auth', 'bookings', 'messaging', 'reviews'],
    metrics: [
      { label: 'Core flows', value: '6', detail: 'Listings, search, bookings, reviews, dashboards, messaging' },
      { label: 'Data surfaces', value: '8+', detail: 'Drizzle-modelled tables across users, listings, and reservations' },
      { label: 'Platform', value: 'CI + tests', detail: 'Compose-based local stack with Vitest coverage + GitLab CI' },
    ],
    highlights: [
      'Protected flows with role-based auth and JWT-backed sessions',
      'Search, listing, and booking logic shaped around real product constraints',
      'Cargo-fit and marketplace interactions that move beyond a CRUD-only demo',
    ],
    projectBullets: [
      'Built backend and full-stack features for a peer-to-peer car-rental platform with listings, search, bookings, messaging, reviews, and role-based dashboards.',
      'Worked across React/Vite, TypeScript/Express, PostgreSQL/Drizzle, Docker Compose, and GitLab CI, with tested flows for auth, inventory, bookings, and messaging.',
    ],
    story: [
      {
        title: 'Scope',
        body:
          'Hard part was making a marketplace feel coherent across renter and owner flows, not just rendering screens. Auth, validation, search, reviews, messaging, and booking all have to agree with each other.',
      },
      {
        title: 'Architecture',
        body:
          'Typed React + Express stack with protected routes, service-layer calls, Drizzle-modeled data, and testable backend modules. Organized so product behaviour stays reason-about-able as features grow.',
      },
      {
        title: 'Working on a team',
        body:
          'Operating inside a GitLab CI / merge-request flow with other contributors. That constraint has done more for the project than any individual feature: it forces scoped changes, reviewable commits, and passing tests.',
      },
    ],
    gallery: [
      { src: '/images/roadeo/landing.png', alt: 'Roadeo landing page', caption: 'Landing page with product positioning and entry into the marketplace flow.' },
      { src: '/images/roadeo/car-search.png', alt: 'Roadeo car search experience', caption: 'Search flow for browsing inventory with filters and car details.' },
      { src: '/images/roadeo/renter-dashboard.png', alt: 'Roadeo renter dashboard', caption: 'Role-based dashboard showing booking state and renter actions.' },
      { src: '/images/roadeo/login.png', alt: 'Roadeo sign-in screen', caption: 'Sign-in screen for renters and owners with a shared account flow.' },
      { src: '/images/roadeo/renter-listings.png', alt: 'Roadeo owner listings page', caption: 'Owner listings view for managing availability, status, and listing activity.' },
      { src: '/images/roadeo/owner-inbox.png', alt: 'Roadeo owner inbox and messaging', caption: 'Owner inbox showing threaded renter conversations alongside active bookings.' },
    ],
    links: [
      { label: 'Request walkthrough', url: 'mailto:sadmanshahriar.snigd@ucalgary.ca?subject=Roadeo%20walkthrough' },
    ],
    consoleLines: [
      'GET /cars/search 200',
      'POST /bookings 201',
      'POST /messages/thread 200',
      'PATCH /reviews/:id 200',
    ],
  },

  {
    slug: 'suncor-automation',
    eyebrow: 'Internship / industrial data + reporting',
    title: 'Suncor Automation + Reporting',
    status: 'internship work',
    focus: ['data', 'backend'],
    homeSummary:
      'Python, SQL, and Power BI tooling built during the Suncor internship: DCS tag validation, reporting surfaces for engineering review, and a 4,000+ tag CLM-to-SCADA conversion.',
    caseStudySummary:
      'The automation + reporting side of the Suncor internship at Syncrude Upgrading Automation. Work centred on turning messy, heterogeneous engineering data into validated, reviewable, and dashboardable state for the team.',
    whyThisProject:
      'This is the clearest evidence of production-adjacent data + tooling work on my resume: real scale, real stakeholders, and a reporting surface the team actually used.',
    contributionSummary:
      'I built and maintained the Python reference-check tool for DCS tag data, shaped Power BI + M Query reporting workflows, and wrote the transform layer that fed the engineering review dashboards. I also supported the 4,000+ tag CLM-to-SCADA conversion by validating outputs and iterating on operator feedback.',
    role: 'Software engineering intern',
    period: 'Sep 2023 – Apr 2024',
    stack: [
      'Python',
      'pandas',
      'openpyxl',
      'SQL',
      'Power BI',
      'Power Query (M)',
      'VBA',
      'PI System',
      'Honeywell Experion (context)',
      'Shell scripts',
    ],
    chips: ['dcs tag validation', '4,000+ tag conversion', 'power bi', 'pi historian'],
    metrics: [
      { label: 'Tag scope', value: '4,000+', detail: 'Tags validated across the CLM-to-SCADA conversion effort' },
      { label: 'Source systems', value: '5+', detail: 'Experion DCS, PI System, Excel registers, SharePoint, shell outputs' },
      { label: 'Surfaces shipped', value: 'Dashboard', detail: 'Power BI dashboards + reviewer reports feeding engineering QA' },
    ],
    highlights: [
      'Python reference-check tool that cross-validates DCS tag data across engineering sources',
      'M Query + Power BI reporting layer for engineering review and CLM-to-SCADA conversion tracking',
      'Integration of operator and reviewer feedback into the validation workflow',
    ],
    projectBullets: [
      'Built a Python reference-check tool to parse and validate DCS tag data from multiple engineering file sources, improving review speed and consistency for controls work.',
      'Created and maintained an automation dashboard and reporting workflows using Python, VBA, shell scripts, M Query, and PI System data.',
      'Supported a 4,000+ tag CLM-to-SCADA conversion effort by updating tooling, validating outputs, and incorporating operator and team feedback.',
    ],
    story: [
      {
        title: 'Environment',
        body:
          'Syncrude Upgrading Automation runs a long-lived Honeywell Experion / PI System stack. The engineering side of a conversion like CLM-to-SCADA means pulling tag structures out of the DCS, cross-checking with engineering registers, and keeping operator corrections in the loop.',
      },
      {
        title: 'Tooling',
        body:
          'I wrote Python tooling to parse, normalize, and validate DCS tag references across heterogeneous sources. Outputs fed M Query transforms into Power BI so reviewers could work against a live view instead of scrolling through spreadsheets.',
      },
      {
        title: 'Working safely in a confidential setting',
        body:
          'All of this work is internal, so the portfolio entry stays at the architecture + tooling level. No tag names, no thresholds, no proprietary mapping rules — just the shape of the system I built inside of and the habits it reinforced.',
      },
    ],
    gallery: [
      {
        src: '/images/suncor-automation/pipeline.svg',
        alt: 'Suncor automation and reporting pipeline diagram',
        caption: 'Source systems, Python validation, M Query + SQL transforms, and the Power BI reporting surface.',
        fit: 'contain',
      },
    ],
    links: [
      { label: 'Request internship context', url: 'mailto:sadmanshahriar.snigd@ucalgary.ca?subject=Suncor%20internship%20context' },
    ],
    consoleLines: [
      'python ref_check.py --source experion --target scada',
      'validated tags: 4127 / 4127',
      'power bi dataset refresh -> OK',
      'reviewer deltas exported -> /reports/2024-q2.xlsx',
    ],
  },

  {
    slug: 'suncor-kpa-ml',
    eyebrow: 'Internship / predictive ML',
    title: 'Predictive KPA Identification',
    status: 'internship R&D',
    focus: ['data'],
    homeSummary:
      'Predictive ML work from the Suncor internship: learning to tag process telemetry into key process areas of the upgrader so reviewer-facing tools could prioritize signals instead of browsing them.',
    caseStudySummary:
      'An R&D project built on top of the Syncrude automation + reporting platform. The goal was to take sensor telemetry and learn which named key process area (KPA) of the upgrader a given tag pattern belonged to — so engineering review surfaces could lead with the most relevant signals instead of everything at once.',
    whyThisProject:
      'This is the project where I pushed furthest past just wiring tools together. It forced me to think about feature design, labelling, evaluation, and what "useful" means for a reviewer rather than a benchmark.',
    contributionSummary:
      'Shaped feature engineering on PI System tag data, built a gradient-boosted classifier for KPA membership plus a severity regressor, evaluated with walk-forward splits across labelled event windows, and wired the scoring output back into the existing reviewer surface.',
    role: 'Software engineering intern / applied ML',
    period: 'Sep 2023 – Apr 2024',
    stack: [
      'Python',
      'pandas',
      'NumPy',
      'scikit-learn',
      'XGBoost / LightGBM',
      'Optuna',
      'SciPy',
      'PI System',
      'Power BI (integration surface)',
    ],
    chips: ['kpa scoring', 'rolling features', 'walk-forward cv', 'reviewer loop'],
    metrics: [
      { label: 'Input signal', value: 'PI tags', detail: 'Sub-minute telemetry + engineering metadata across unit ops' },
      { label: 'Feature families', value: '5', detail: 'Rolling stats, lag windows, rate-of-change, cross-corr, spectral' },
      { label: 'Eval protocol', value: 'Walk-fwd', detail: 'Time-aware CV aligned to labelled event windows' },
    ],
    highlights: [
      'Feature pipeline that respects historian tag quality bits and DCS context',
      'Gradient-boosted KPA classifier + severity regressor paired in a single scoring step',
      'Feedback loop from reviewer corrections back into retraining windows',
    ],
    projectBullets: [
      'Designed a predictive ML pipeline for identifying key process areas (KPAs) of the Syncrude upgrader from PI System tag telemetry using rolling, lagged, and spectral features.',
      'Trained and evaluated gradient-boosted models under walk-forward cross-validation and wired scoring outputs into the existing engineering reporting surface.',
    ],
    story: [
      {
        title: 'Problem shape',
        body:
          'Reviewers already had dashboards. What they didn\'t have was a principled way to sort "watch this first" from "eventually" across thousands of tags. That is what KPA scoring was trying to produce, not another alarm.',
      },
      {
        title: 'Features + model',
        body:
          'I leaned on rolling means, residuals against local trend, tag-pair correlations, and frequency-band energy as features. Gradient-boosted classifiers handled the noisy, mixed-scale feature space well and gave usable feature-importance explanations back to the reviewer.',
      },
      {
        title: 'Why this matters for backend work',
        body:
          'The lesson that transferred out of this project was less about model choice and more about pipeline hygiene: clean tag metadata, well-defined evaluation splits, and an honest feedback path from reviewer corrections back to the next model version.',
      },
    ],
    gallery: [
      {
        src: '/images/suncor-kpa-ml/feature-pipeline.svg',
        alt: 'Predictive KPA identification feature + model pipeline diagram',
        caption: 'Telemetry in, rolling + spectral features, gradient-boosted classification + severity regression, KPA scoring back into the reviewer surface.',
        fit: 'contain',
      },
    ],
    links: [
      { label: 'Request internship context', url: 'mailto:sadmanshahriar.snigd@ucalgary.ca?subject=Suncor%20KPA%20ML%20context' },
    ],
    consoleLines: [
      'pipeline: features_v3 -> model_xgb_v2',
      'walk_forward_cv: folds=5 auc=0.88',
      'kpa_scoring: wrote reviewer deltas',
      'optuna: 120 trials, best_score=0.881',
    ],
  },

  {
    slug: 'biometric-face-recognition',
    eyebrow: 'Course project / Python + ML',
    title: 'Biometric Face Recognition',
    status: 'course project',
    focus: ['data'],
    homeSummary:
      'Python biometric face-recognition project comparing raw-pixel and LBP features with SVM and MLP, reaching 96.0% accuracy on the AT&T face dataset.',
    caseStudySummary:
      'A biometrics course project that compares raw-pixel and LBP feature pipelines for face recognition using SVM and MLP classifiers. It shows I can move from raw data to evaluation, reporting, and a clear explanation of the results instead of stopping at a final accuracy number.',
    whyThisProject:
      'Good evidence of data-oriented coursework: feature design, model comparison, evaluation, and a written report that explains why the winning approach won.',
    contributionSummary:
      'Worked through the Python notebook pipeline, biometric feature extraction, classifier experiments, and performance analysis — including ROC and DET curves and the raw-vs-LBP comparison.',
    role: 'Computer vision / biometrics project',
    period: 'April 2026',
    stack: ['Python', 'OpenCV', 'scikit-learn', 'NumPy', 'Matplotlib', 'Jupyter'],
    chips: ['96.0% accuracy', 'roc/det curves', 'lbp experiments', 'att dataset'],
    metrics: [
      { label: 'Best accuracy', value: '96.0%', detail: 'SVM on raw-pixel biometric features' },
      { label: 'Dataset', value: '400', detail: 'AT&T / ORL face images across 40 subjects' },
      { label: 'Model paths', value: '4', detail: 'Raw and LBP features paired with SVM and MLP' },
    ],
    highlights: [
      'Compared raw-pixel and LBP feature extraction under the same evaluation setup',
      'Produced ROC and DET curves across 40 subjects',
      'Documented why raw pixels outperformed LBP on a controlled dataset',
    ],
    projectBullets: [
      'Implemented raw-pixel and LBP-based face-recognition pipelines using SVM and MLP, achieving 96.0% accuracy on the AT&T face dataset.',
      'Produced ROC/DET analysis and documented why raw-pixel features outperformed LBP on a controlled biometric dataset.',
    ],
    story: [
      {
        title: 'Dataset',
        body:
          'AT&T (ORL) face set: 40 subjects, 10 images each, 92x112 greyscale, tightly aligned. A clean, controlled baseline for comparing feature pipelines.',
      },
      {
        title: 'Features + classifiers',
        body:
          'We ran raw pixel vectors and grid-based LBP histograms through both an SVM and an MLP under the same train/test protocol, then generated ROC and DET curves for each pair.',
      },
      {
        title: 'Why raw pixels won',
        body:
          'LBP usually pays off when lighting or texture varies. AT&T is already normalised and aligned, so LBP threw away discriminative pixel information the SVM could otherwise use directly. Raw + SVM came out on top at 96.0%.',
      },
    ],
    gallery: [
      { src: '/images/orl/face-detection.png', alt: 'Face detection result from the biometric face recognition project', caption: 'OpenCV Haar Cascade face-detection example used in the demo pipeline.' },
      { src: '/images/orl/lbp-visualization.png', alt: 'LBP visualization from the biometric face recognition notebook', caption: 'LBP feature extraction visualized from the notebook workflow.' },
      { src: '/images/orl/roc-det-curves.png', alt: 'ROC and DET curves for the biometric face recognition project', caption: 'ROC and DET analysis across the evaluated recognition pipelines.' },
      { src: '/images/orl/lbp-bins-experiment.png', alt: 'LBP grid and bin experiment results for the biometric face recognition project', caption: 'Experiment output comparing LBP grid and bin configurations.' },
    ],
    links: [
      { label: 'Implementation notebook', url: '/projects/orl/Lab07_group56.ipynb' },
      { label: 'Technical report', url: '/projects/orl/Lab07-group56.pdf' },
      { label: 'Project findings', url: '/projects/orl/findings.md' },
    ],
    consoleLines: [
      'python evaluate.py --model svm --features raw',
      'accuracy=0.9600',
      'curve export => roc_det_curves.png',
      'lbp grid sweep => 4x4 / 6x6 / 8x8 / 10x10',
    ],
  },

  {
    slug: 'traffic-control',
    eyebrow: 'Course project / embedded C',
    title: 'PIC Traffic Control System',
    status: 'course project',
    focus: ['embedded'],
    homeSummary:
      'Two-axis intersection controller on a PIC16F877A, built from scratch on breadboard: state-machine firmware in XC8 C, external-interrupt pedestrian button, and six signal LEDs driven from PORTB.',
    caseStudySummary:
      'A traffic controller for a two-axis intersection written in embedded C on a PIC16F877A. The project is structured as a six-state state machine driving six signal LEDs plus walk/stop indicators, with a pedestrian request handled via the RB0 external interrupt and serviced only at a safe yellow boundary.',
    whyThisProject:
      'This is the clearest example of me working below the OS line: no runtime, no threads, no malloc — just a PIC, a state machine, and an honest wiring diagram.',
    contributionSummary:
      'Designed the intersection state machine, wired the PIC + crystal + signal LEDs + pedestrian button on breadboard, and wrote the XC8 firmware from scratch.',
    role: 'Embedded systems / individual work',
    period: '2024',
    stack: ['PIC16F877A', 'XC8 C', 'MPLAB X', 'Breadboard', '4 MHz crystal', 'Interrupts'],
    chips: ['state machine', 'xc8 c', 'rb0/int', '6 led signals'],
    metrics: [
      { label: 'States', value: '6', detail: 'NS G/Y, EW G/Y, PED walk, PED clear' },
      { label: 'Outputs', value: '8', detail: '6 signal LEDs + walk / stop indicators' },
      { label: 'Timing', value: '4 MHz', detail: 'HS crystal, instruction cycle = 1 us' },
    ],
    highlights: [
      'Deterministic state machine driven from a single main loop with an ISR-flagged pedestrian request',
      'Pedestrian phase can only be entered at a yellow boundary, which keeps greens safe and conflicting phases impossible',
      'Full IO map + signal palette documented in a hand-authored schematic',
    ],
    projectBullets: [
      'Designed and built a two-axis traffic intersection controller on a PIC16F877A, including breadboard wiring, hand-authored schematic, and XC8 firmware.',
      'Implemented a six-state state machine with an external-interrupt pedestrian request that is serviced only at safe yellow-phase boundaries.',
    ],
    story: [
      {
        title: 'Hardware',
        body:
          'PIC16F877A on breadboard with a 4 MHz HS crystal, 22 pF caps on OSC1/OSC2, 10k pull-ups on MCLR and RB0, and 330 ohm current-limit resistors per signal LED.',
      },
      {
        title: 'Firmware',
        body:
          'XC8 C on MPLAB X. Phase durations live in a lookup table, the state transitions live in a simple switch, and the pedestrian request is a volatile flag set by an RB0/INT falling-edge ISR.',
      },
      {
        title: 'Safety property',
        body:
          'The main loop only checks the pedestrian flag at the end of a yellow phase. Greens on one axis can never be preempted, and a pedestrian press never drives a state with conflicting greens.',
      },
    ],
    gallery: [
      {
        src: '/images/traffic-control/schematic.svg',
        alt: 'Hand-authored PIC16F877A traffic control schematic',
        caption: 'Breadboard schematic: PIC + 4 MHz crystal + 22 pF caps, 6 LED signal heads on RB1–RB6, pedestrian button on RB0 with pull-up, walk/stop LEDs on RD0/RD1.',
        fit: 'contain',
      },
      {
        src: '/images/traffic-control/state-machine.svg',
        alt: 'Traffic control state machine diagram',
        caption: 'State machine: NS and EW alternation with a pedestrian branch armed by RB0/INT and serviced only at the next yellow boundary.',
        fit: 'contain',
      },
    ],
    code: [
      {
        title: 'main.c — state machine + pedestrian ISR',
        language: 'c',
        caption: 'Core firmware loop. Phase durations in a lookup table; pedestrian branch only entered at a yellow boundary.',
        source: `typedef enum {
    PHASE_NS_GREEN, PHASE_NS_YELLOW,
    PHASE_EW_GREEN, PHASE_EW_YELLOW,
    PHASE_PED_WALK, PHASE_PED_CLEAR
} phase_t;

static const uint8_t PHASE_SECONDS[] = {
    [PHASE_NS_GREEN]  = 12, [PHASE_NS_YELLOW] =  3,
    [PHASE_EW_GREEN]  = 12, [PHASE_EW_YELLOW] =  3,
    [PHASE_PED_WALK]  = 10, [PHASE_PED_CLEAR] =  3,
};

static volatile uint8_t ped_request = 0;

void __interrupt() isr(void) {
    if (INTCONbits.INTF) {
        ped_request = 1;
        INTCONbits.INTF = 0;
    }
}

void main(void) {
    TRISB = 0b00000001;   /* RB0 in, RB1..RB6 out */
    TRISD = 0b11111100;   /* RD0, RD1 out          */
    OPTION_REGbits.INTEDG = 0;  /* INT on falling edge */
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
        phase = next_phase(phase);
    }
}`,
      },
    ],
    links: [
      { label: 'main.c (XC8 firmware)', url: '/projects/traffic-control/main.c' },
      { label: 'Project findings', url: '/projects/traffic-control/findings.md' },
    ],
    consoleLines: [
      'mplabx: building traffic_control.X ...',
      'xc8-cc  main.c -o traffic.hex',
      'program flash: 2.3 KB / 14 KB',
      'ISR(RB0/INT) -> ped_request = 1',
    ],
  },

  {
    slug: 'fitness-planner',
    eyebrow: 'Full stack / React + Express',
    title: 'Fitness Planner',
    status: 'team project',
    focus: ['backend'],
    homeSummary:
      'Full-stack team project with authentication, workout and nutrition tracking, dashboards, and AI-assisted workout-plan generation.',
    caseStudySummary:
      'A full-stack team build with authentication, personalized tracking, dashboards, and AI-assisted workout generation. A useful portfolio example because it combines user-specific product logic with a conventional stack an employer can evaluate quickly.',
    whyThisProject:
      'Shows a more complete user product than a simple class demo: auth, stateful tracking, dashboards, and generated plans all working together.',
    contributionSummary:
      'Full-stack product logic: auth, user-specific flows, tracking features, and wiring the frontend experience to the backend APIs and PostgreSQL-backed data.',
    role: 'Team project / full-stack development',
    period: '2025',
    stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'JWT', 'AI-assisted generation'],
    chips: ['auth', 'dashboards', 'tracking', 'ai plans'],
    metrics: [
      { label: 'Core flows', value: '4', detail: 'Auth, tracking, dashboards, plan generation' },
      { label: 'Data model', value: '6 tables', detail: 'Users, workouts, nutrition, goals, plans, sessions' },
      { label: 'Repo', value: 'Public', detail: 'Available on GitHub for code review' },
    ],
    highlights: [
      'Authentication and user-specific dashboard flows',
      'Workout and nutrition tracking built around user state',
      'AI-assisted planning integrated into the product experience',
    ],
    projectBullets: [
      'Developed a full-stack fitness application with JWT authentication, workout tracking, nutrition logging, goal management, and dashboard views.',
      'Integrated AI-assisted workout-plan generation and data visualization in a responsive React frontend backed by REST APIs and PostgreSQL.',
    ],
    story: [
      {
        title: 'Scope',
        body:
          'Several user-specific flows had to share state without feeling fragmented: plans, tracking, dashboards, and recommendations all depended on the same user model.',
      },
      {
        title: 'Architecture',
        body:
          'React + TypeScript frontend, Express + PostgreSQL backend. REST endpoints for tracking + plans, JWT-authenticated session handling, and an AI service boundary for plan generation.',
      },
      {
        title: 'What I take away',
        body:
          'A public repo that shows breadth: full-stack engineering, product logic, and a user-facing feature set beyond a simple class demo.',
      },
    ],
    gallery: [
      { src: '/images/fitness-planner/login.png', alt: 'Fitness Planner login screen', caption: 'Login screen from the Fitness Planner frontend repository.' },
      { src: '/images/fitness-planner/frontend-architecture.png', alt: 'Fitness Planner frontend architecture from the project report', caption: 'Frontend architecture diagram from the team project report.', fit: 'contain' },
      { src: '/images/fitness-planner/backend-architecture.png', alt: 'Fitness Planner backend architecture from the project report', caption: 'Backend architecture diagram showing API, services, and data access layers.', fit: 'contain' },
      { src: '/images/fitness-planner/database-schema.png', alt: 'Fitness Planner database schema from the project report', caption: 'Database schema used for users, workouts, nutrition, goals, and generated plans.', fit: 'contain' },
    ],
    links: [
      { label: 'GitHub repo', url: 'https://github.com/sashsn/fitness-planner-seng-401', external: true },
      { label: 'Project report', url: '/projects/fitness-planner/project-report.pdf' },
    ],
    consoleLines: [
      'POST /auth/register 201',
      'GET /workouts 200',
      'POST /plans/generate 200',
      'PATCH /nutrition/log 200',
    ],
  },

  {
    slug: 'food-bank-inventory-manager',
    eyebrow: 'Java / SQL / team systems',
    title: 'Food Bank Inventory Manager',
    status: 'team project',
    focus: ['backend'],
    homeSummary:
      'Java + SQL project for inventory management, consumer registration, and hamper generation with constraints around stock and nutritional requirements.',
    caseStudySummary:
      'A practical data-handling and order-generation project in Java + SQL. Less visual than the web projects, but a useful example of backend and data-oriented thinking outside the TypeScript stack.',
    whyThisProject:
      'Evidence that my backend and data work is not limited to web APIs. The useful part here is the rules and data logic, not a flashy UI.',
    contributionSummary:
      'Core work was turning service rules into consistent behavior: inventory state, consumer registration, and hamper-generation logic tied to SQL-backed data.',
    role: 'Team project / Java + SQL',
    period: '2024',
    stack: ['Java', 'SQL', 'Inventory logic', 'Order generation', 'GUI app'],
    chips: ['inventory', 'sql', 'orders', 'hamper generation'],
    metrics: [
      { label: 'Core logic', value: 'Inventory', detail: 'Registration, order creation, hamper generation' },
      { label: 'Stack', value: 'Java + SQL', detail: 'Practical data-backed workflow project' },
      { label: 'Repo', value: 'Public', detail: 'GitHub repository available' },
    ],
    highlights: [
      'Inventory state and consumer registration workflow',
      'Hamper generation shaped by inventory and nutritional constraints',
      'Practical team project with a real service-oriented use case',
    ],
    projectBullets: [
      'Built a Java + SQL application for inventory management, consumer registration, and hamper generation under real stock and nutritional constraints.',
      'Translated service rules into consistent backend behavior around inventory, order creation, and data-backed decision logic.',
    ],
    story: [
      {
        title: 'Scope',
        body:
          'Turning business rules into consistent application behavior. Inventory availability, consumer registration, and hamper generation all had to stay in agreement.',
      },
      {
        title: 'Architecture',
        body:
          'Java application backed by SQL data handling. The core value is in the logic layer: inventory management, order flows, and practical constraints around what can be assembled and delivered.',
      },
      {
        title: 'What I take away',
        body:
          'A useful example of backend and data-oriented thinking in a non-web stack, especially when I want to show breadth outside of TypeScript-only projects.',
      },
    ],
    gallery: [
      {
        src: '/images/food-bank/uml-diagram.png',
        alt: 'Food Bank Inventory Manager UML class diagram',
        caption: 'UML class diagram showing inventory, hamper, order, and GUI relationships.',
        fit: 'contain',
      },
    ],
    links: [
      { label: 'GitHub repo', url: 'https://github.com/sashsn/Food-Bank-Inventory-Manager', external: true },
      { label: 'UML diagram', url: '/projects/food-bank/uml-diagram.pdf' },
    ],
    consoleLines: [
      'SELECT * FROM inventory',
      'POST /hamper/generate',
      'consumer constraints => satisfied',
      'waste reduction path => optimized',
    ],
  },

  {
    slug: 'ttgtalk',
    eyebrow: 'Internal org tool / realtime + contracts',
    title: 'TTGTalk',
    status: 'private org project',
    focus: ['backend'],
    homeSummary:
      'Internal real-time chat and contract-generation tool for an organization: threaded messaging, contract templates, and a PDF + signature flow, on a Node + PostgreSQL backend.',
    caseStudySummary:
      'TTGTalk is an internal team-communication tool that pairs real-time chat with templated contract generation. Threaded Socket.IO messaging, Express REST, PostgreSQL-backed state, and a small rendering service turn chat-captured fields into signed PDF contracts. Private to the org, so this entry stays at the architecture + responsibilities level.',
    whyThisProject:
      'Evidence of real-time backend work paired with a document-generation path. It is also the project where I had to think hardest about boundaries between synchronous REST state and an asynchronous socket layer that has to stay agreeing with it.',
    contributionSummary:
      'Worked on the backend: Socket.IO room model, Express REST endpoints for threads and templates, the contract-rendering service, and the PostgreSQL schema that backs the messaging + contract flow.',
    role: 'Full-stack engineer / backend focus',
    period: '2023',
    stack: ['Node.js', 'Express', 'Socket.IO', 'React', 'PostgreSQL', 'Redis', 'PDFKit', 'Handlebars'],
    chips: ['realtime', 'threads', 'contract pdfs', 'signature flow'],
    metrics: [
      { label: 'Surfaces', value: '2', detail: 'Chat workspace + admin / template console' },
      { label: 'Transports', value: 'REST + WS', detail: 'Express for state, Socket.IO for live messages' },
      { label: 'Contract path', value: 'Template → PDF', detail: 'Handlebars fields, PDFKit render, signature + hash' },
    ],
    highlights: [
      'Per-thread Socket.IO rooms with presence, typing, and ack-based delivery receipts',
      'Contract templates generated to PDF with a captured typed-signature + hash for integrity',
      'PostgreSQL schema covering users, threads, messages, templates, contracts, and signatures',
      'Redis-backed pub/sub so socket fan-out stays correct across multiple Node processes',
    ],
    projectBullets: [
      'Built the backend for an internal real-time messaging and contract-generation tool with Node, Express, Socket.IO, PostgreSQL, and Redis.',
      'Implemented a Handlebars + PDFKit contract rendering service with a signature capture + hash step for document integrity.',
    ],
    story: [
      {
        title: 'Two transports, one state',
        body:
          'The hard part was keeping the REST + Postgres picture and the Socket.IO picture in agreement. Every chat write lands in Postgres first, then the socket layer broadcasts the canonical row; clients never render a message that only lived on the wire.',
      },
      {
        title: 'Contracts from chat context',
        body:
          'Contract templates are stored Handlebars docs with declared fields. The contract service fills fields from the thread / admin input, renders with PDFKit, hashes the resulting byte stream, and stores the signed artifact under the workspace-scoped object path.',
      },
      {
        title: 'Discipline around confidentiality',
        body:
          'The project is private to the org. The portfolio entry stays at the architecture + responsibilities level — no workspace names, no template content, no data shown.',
      },
    ],
    gallery: [
      {
        src: '/images/ttgtalk/architecture.svg',
        alt: 'TTGTalk architecture diagram',
        caption: 'React SPA over an Express REST + Socket.IO backend, PostgreSQL state, Redis pub/sub for socket fan-out, and a Handlebars + PDFKit contract rendering service.',
        fit: 'contain',
      },
    ],
    links: [
      { label: 'Request project context', url: 'mailto:sadmanshahriar.snigd@ucalgary.ca?subject=TTGTalk%20context' },
    ],
    consoleLines: [
      'POST /threads 201',
      'ws: join thread#482 -> presence=online',
      'POST /contracts/render -> contract_id=0917',
      'sha256(contract.pdf) -> a71f... (signed)',
    ],
  },

  {
    slug: 'childdocs-nursery-solutions',
    eyebrow: 'Team project / PHP + MySQL web app',
    title: 'ChildDocs Nursery Solutions',
    status: 'team project',
    focus: ['backend'],
    homeSummary:
      'A web application for a nursery organization: child profiles, daily care logs, staff scheduling, and location + bus-route tracking, on a classic PHP + MySQL stack.',
    caseStudySummary:
      'ChildDocs is a web app for a small nursery team. The product surface is three role-gated flows — parent portal, teacher dashboard, and admin console — sharing the same PHP + MySQL backend. Daily care logs, incident tracking, and zone / bus-route check-ins drive the data model.',
    whyThisProject:
      'Evidence that I can ship a real, small web product outside the TypeScript stack. The useful part here is authorization done right: parents only see their own child, teachers only see their classroom, admin sees everything — enforced in the middleware, not just the UI.',
    contributionSummary:
      'Built the backend: PHP controllers, MySQL schema, session-based auth with role middleware, the daily-care log model, and the location + zone tracking feature. Also wrote the parent-link token flow that lets a parent register against a pre-approved child record.',
    role: 'Team project / PHP + MySQL',
    period: '2022',
    stack: ['PHP 7', 'MySQL 8', 'Apache', 'Bootstrap 4', 'jQuery', 'HTML / CSS'],
    chips: ['role gating', 'daily logs', 'zone tracking', 'parent portal'],
    metrics: [
      { label: 'Role flows', value: '3', detail: 'Parent, teacher, admin, gated in middleware' },
      { label: 'Core entities', value: '8', detail: 'Children, parents, staff, classrooms, zones, logs, incidents, audit' },
      { label: 'Data integrity', value: 'FK + audit', detail: 'Foreign-key constraints + per-mutation audit rows' },
    ],
    highlights: [
      'Role-gated access enforced at the PHP middleware layer, not just hidden in the UI',
      'Daily care logs (meals, naps, incidents) with per-entry audit rows for accountability',
      'Zone + bus-route check-ins that track where a child is at any point in the day',
      'Parent-link token flow so a parent only registers against a pre-approved child record',
    ],
    projectBullets: [
      'Built a PHP + MySQL web application for nursery child monitoring, staff scheduling, and zone + bus-route tracking with role-gated flows for parents, teachers, and admin.',
      'Designed the MySQL schema and audit model for daily care logs and incidents, and implemented the parent-link token flow for verified parent onboarding.',
    ],
    story: [
      {
        title: 'Users first',
        body:
          'Three very different users share the same backend: a parent who only wants to see their own child, a teacher who manages a classroom\'s day, and an admin who configures everything. The biggest design decision was doing authorization at the middleware layer so no controller accidentally leaked data between roles.',
      },
      {
        title: 'Data model',
        body:
          'Normalized MySQL schema with foreign keys across children, parents, staff, classrooms, zones, daily logs, incidents, and audit rows. Parent accounts are linked to children through a one-time token issued by an admin — no self-serve registration onto arbitrary children.',
      },
      {
        title: 'Why this still matters to me',
        body:
          'This was the first project where I had to take authorization seriously — who can see what, and where the check lives. That lesson transferred directly into the JWT + role flows I later built on the TypeScript side.',
      },
    ],
    gallery: [
      {
        src: '/images/childdocs/architecture.svg',
        alt: 'ChildDocs Nursery Solutions architecture diagram',
        caption: 'Role-gated web app on Apache + PHP + MySQL with parent, teacher, and admin flows sharing a single authorization middleware.',
        fit: 'contain',
      },
    ],
    links: [
      { label: 'Request project context', url: 'mailto:sadmanshahriar.snigd@ucalgary.ca?subject=ChildDocs%20context' },
    ],
    consoleLines: [
      'POST /auth/login role=teacher 200',
      'GET /children?classroom=4A 200',
      'POST /daily-log -> audit row #1824',
      'check_in zone=playground child=47',
    ],
  },

  {
    slug: 'theatre-project',
    eyebrow: 'Java / MySQL / team desktop app',
    title: 'Theatre Ticket Reservation System',
    status: 'team project',
    focus: ['backend'],
    homeSummary:
      'Java desktop app for theatre ticket reservations with a layered service design and MySQL-backed seat availability and booking workflow.',
    caseStudySummary:
      'A team desktop project delivered as a runnable Java JAR with a MySQL backend. Layered into presentation, domain services, and JDBC persistence, with seat-level availability and a transactional booking path.',
    whyThisProject:
      'A reminder that not every useful backend project is a web app. Desktop + relational DB forces you to think about connection handling, transactions, and seat-locking without hiding behind a framework.',
    contributionSummary:
      'Worked on the service + persistence layers: reservation service, catalog queries, and the JDBC DAO layer that backs the booking flow.',
    role: 'Team project / Java + MySQL',
    period: '2024',
    stack: ['Java', 'Swing / AWT', 'JDBC', 'MySQL'],
    chips: ['reservations', 'seat locking', 'mysql', 'jar app'],
    metrics: [
      { label: 'Domain entities', value: '7', detail: 'Users, movies, shows, theatres, seats, reservations, payments' },
      { label: 'Delivery', value: 'Runnable JAR', detail: 'Packaged app + bundled schema' },
      { label: 'Persistence', value: 'MySQL', detail: 'Transactional bookings, unique constraints enforce availability' },
    ],
    highlights: [
      'Layered app: Swing presentation, service-layer domain logic, JDBC DAO layer',
      'Seat locking enforced at the database level via unique constraints + transactions',
      'Admin + customer flows sharing the same backing catalog + reservation models',
    ],
    projectBullets: [
      'Built a Java + MySQL theatre ticket reservation system with a Swing desktop UI, service layer, and JDBC persistence.',
      'Implemented a transactional booking path and enforced seat availability at the database layer through unique constraints.',
    ],
    story: [
      {
        title: 'Scope',
        body:
          'Customer booking + admin management on the same application. Shared domain (movies, shows, theatres, seats) with role-gated entry points.',
      },
      {
        title: 'Architecture',
        body:
          'Presentation layer in Swing, domain + service logic in plain Java, persistence via JDBC against MySQL. Booking happens inside a transaction with seat-level uniqueness constraints to prevent double-booking.',
      },
      {
        title: 'What I take away',
        body:
          'Working without a framework forces you to think clearly about where logic lives. This project is where I first internalized "DAO vs service vs UI" as a real structural distinction.',
      },
    ],
    gallery: [
      {
        src: '/images/theatre/architecture.svg',
        alt: 'Theatre ticket reservation system architecture diagram',
        caption: 'Layered architecture: Swing/AWT desktop UI, service layer, JDBC DAO, MySQL persistence with seat-level uniqueness constraints.',
        fit: 'contain',
      },
    ],
    links: [
      { label: 'GitHub repo', url: 'https://github.com/sashsn/TheatreProject', external: true },
    ],
    consoleLines: [
      'java -jar theatre-reservations.jar',
      'SELECT * FROM shows WHERE starts_at > NOW()',
      'BEGIN TX -> INSERT reservation -> COMMIT',
      'seat (show_id, row, col) uniq -> OK',
    ],
  },
]

export const archiveEntries: ArchiveEntry[] = []

export const projectIndex = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
) as Record<string, Project>
