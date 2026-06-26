// ---------------------------------------------------------------------------
// COMMERCETOOLS QUARTERLY PLAN AGENT — output data
// ---------------------------------------------------------------------------
// This file holds the structured output of the Quarterly Plan agent.
// To refresh the dashboard, replace the `quarterlyPlan` object below with the
// agent's latest run. Keep the shape the same and the UI updates automatically.
//
// Current plan: two quarters.
//   Q3 2026 — the Autonomous Commerce / AgenticLift AI enablement program plus
//             delivery of the SmartMigrate and AI-Native CPQ accelerators.
//   Q4 2026 — development of Optimizely Connect, plus build-out of the
//             platform-agnostic Customer Service (CS) accelerator.
// ---------------------------------------------------------------------------

export type TaskStatus = "todo" | "prog" | "sched" | "done";

export interface PlanInitiative {
  month: string;       // "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec"
  initiative: string;  // initiative / task name
  track: string;       // functional category, e.g. "Autonomous Commerce", "CPQ"
  owner: string;
  department: string;
  goal: string;        // success criterion
  status: TaskStatus;
}

export interface FocusCard {
  team: string;        // category label, e.g. Practice, Marketing, Sales
  text: string;
}

export interface PlanQuarter {
  id: string;          // "q3" | "q4"
  label: string;       // "Q3 2026"
  title: string;
  subtitle: string;    // "Jul – Sep 2026  |  ..." — first month drives current-quarter selection
  focus: FocusCard[];
  initiatives: PlanInitiative[];
}

export interface QuarterlyPlan {
  org: string;
  generated: string;
  quarters: PlanQuarter[];
}

export const quarterlyPlan: QuarterlyPlan = {
  org: "Royal Cyber",
  generated: "Jun 26, 2026",
  quarters: [
    {
      id: "q3",
      label: "Q3 2026",
      title: "Royal Cyber — Q3 2026: Autonomous Commerce Enablement & Accelerator Delivery",
      subtitle:
        "Jun – Sep 2026  |  Autonomous Commerce (MosAIc) & AgenticLift enablement program, plus SmartMigrate and AI-Native CPQ accelerator delivery",
      focus: [
        { team: "Practice", text: "Deliver the Autonomous Commerce (MosAIc) blueprint, the AgenticLift demo and workshop kit, and build the SmartMigrate and AI-Native CPQ accelerators." },
        { team: "Marketing", text: "Package the AI-led modernization GTM — talk track, industry one-pagers and ROI calculator — and drive demand for the accelerator portfolio." },
        { team: "Sales", text: "Run the AI-readiness talk track and modernization validation workshops to build qualified pipeline." },
        { team: "Partnerships", text: "Co-sell review of MosAIc / AgenticLift and the accelerators with the commercetools partner team." },
      ],
      initiatives: [
        // --- Week 1 enablement (Jun) -------------------------------------
        { month: "Jun", initiative: "Kick-off: AI Commerce enablement program — assign owners, cadence & goals", track: "Program", owner: "Stephen", department: "Practice", goal: "Owners assigned / plan locked", status: "done" },
        { month: "Jun", initiative: "Review commercetools Autonomous Commerce (MosAIc) reference architecture", track: "Autonomous Commerce", owner: "Stephen", department: "Practice", goal: "Architecture reviewed", status: "prog" },
        { month: "Jun", initiative: "Draft Royal Cyber Autonomous Commerce implementation blueprint", track: "Autonomous Commerce", owner: "Stephen", department: "Practice", goal: "Reference architecture drafted", status: "prog" },
        { month: "Jun", initiative: "AgenticLift architecture workshop: catalog, pricing, inventory, cart, order & CS context", track: "Autonomous Commerce", owner: "Stephen", department: "Practice", goal: "Workshop completed", status: "todo" },
        { month: "Jun", initiative: "Publish AgenticLift POV + use-case map", track: "Autonomous Commerce", owner: "Stephen", department: "Practice", goal: "POV + use-case map published", status: "todo" },
        { month: "Jun", initiative: "Weekly standup: review Week 1 enablement progress and blockers", track: "Program", owner: "All", department: "All Departments", goal: "Status logged", status: "todo" },
        // --- Week 2 setup & demo storyline (Jun–Jul) ---------------------
        { month: "Jun", initiative: "Define sandbox / demo data approach and product-feed strategy", track: "Enablement", owner: "Stephen", department: "Practice", goal: "Data approach defined", status: "todo" },
        { month: "Jun", initiative: "Draft Autonomous Commerce governance & data-readiness checklist", track: "Autonomous Commerce", owner: "Stephen", department: "Practice", goal: "Setup checklist ready", status: "todo" },
        { month: "Jul", initiative: "Define AgenticLift demo storyline: discovery → inventory → recommendations → cart → checkout handoff", track: "Enablement", owner: "Pooja", department: "Marketing", goal: "Demo script drafted", status: "todo" },
        { month: "Jul", initiative: "Review demo script with Practice and align to MosAIc data feeds", track: "Enablement", owner: "Stephen", department: "Practice", goal: "Script reviewed", status: "todo" },
        { month: "Jul", initiative: "Finalise AgenticLift demo script and setup checklist", track: "Enablement", owner: "Stephen", department: "Practice", goal: "Script + checklist signed off", status: "todo" },
        { month: "Jul", initiative: "Weekly standup: all teams report vs Week 2 targets", track: "Program", owner: "All", department: "All Departments", goal: "Status logged", status: "todo" },
        // --- Week 3 demo build & workshop kit (Jul) ----------------------
        { month: "Jul", initiative: "Build AgenticLift demo: AI-agent product discovery & inventory lookup", track: "Enablement", owner: "Stephen", department: "Practice", goal: "Demo build started", status: "todo" },
        { month: "Jul", initiative: "Extend AgenticLift demo: pricing context & cart recommendation", track: "Enablement", owner: "Stephen", department: "Practice", goal: "Demo functional end-to-end", status: "todo" },
        { month: "Jul", initiative: "Create AI-readiness assessment & discovery questionnaire", track: "Enablement", owner: "Pooja", department: "Marketing", goal: "Assessment & questionnaire drafted", status: "todo" },
        { month: "Jul", initiative: "Build Autonomous Commerce workshop deck & ROI calculator", track: "Enablement", owner: "Pooja", department: "Marketing", goal: "Workshop kit ready", status: "todo" },
        { month: "Jul", initiative: "Dry-run AgenticLift demo + workshop kit walkthrough", track: "Enablement", owner: "Stephen", department: "Practice", goal: "Dry-run completed", status: "todo" },
        { month: "Jul", initiative: "Weekly standup: all teams report vs Week 3 targets", track: "Program", owner: "All", department: "All Departments", goal: "Status logged", status: "todo" },
        // --- Week 4 sales enablement & GTM (Jul) -------------------------
        { month: "Jul", initiative: "Draft AI Commerce sales talk track for existing B2B/B2C customers needing AI readiness", track: "GTM & Sales", owner: "Ella", department: "Sales", goal: "Talk track drafted", status: "todo" },
        { month: "Jul", initiative: "Review talk track with Practice for technical accuracy", track: "GTM & Sales", owner: "Stephen", department: "Practice", goal: "Talk track reviewed", status: "todo" },
        { month: "Jul", initiative: "Package AI-led modernization message for manufacturing, distribution & retail", track: "GTM & Sales", owner: "Pooja", department: "Marketing", goal: "GTM pack drafted", status: "todo" },
        { month: "Jul", initiative: "Design industry GTM one-pagers & battlecards", track: "GTM & Sales", owner: "TBD", department: "Design", goal: "GTM assets ready", status: "todo" },
        { month: "Jul", initiative: "Finalise sales talk track and industry AI commerce GTM pack", track: "GTM & Sales", owner: "Ella", department: "Sales", goal: "Talk track + GTM pack signed off", status: "todo" },
        { month: "Jul", initiative: "Weekly standup: all teams report vs Week 4 targets", track: "Program", owner: "All", department: "All Departments", goal: "Status logged", status: "todo" },
        // --- Week 5 partner motion (Jul) ---------------------------------
        { month: "Jul", initiative: "Prep partner review: finalise MosAIc / AgenticLift demo and POV deck", track: "Partnerships", owner: "Stephen", department: "Practice", goal: "Review pack ready", status: "todo" },
        { month: "Jul", initiative: "Partner review with commercetools team — walk through MosAIc / AgenticLift demo", track: "Partnerships", owner: "Venky", department: "Partnerships", goal: "Meeting completed", status: "todo" },
        { month: "Jul", initiative: "Capture co-sell feedback and log partner action items", track: "Partnerships", owner: "Venky", department: "Partnerships", goal: "Feedback captured", status: "todo" },
        { month: "Jul", initiative: "Update POV into a partner-ready POV with co-sell positioning", track: "Partnerships", owner: "Stephen", department: "Practice", goal: "Partner-ready POV published", status: "todo" },
        { month: "Jul", initiative: "Weekly standup: all teams report vs Week 5 targets", track: "Program", owner: "All", department: "All Departments", goal: "Status logged", status: "todo" },
        // --- Week 6 pipeline creation (Jul) ------------------------------
        { month: "Jul", initiative: "Identify & invite target manufacturing, distribution and retail accounts", track: "GTM & Sales", owner: "Pooja", department: "Marketing", goal: "Target list & invites sent", status: "todo" },
        { month: "Jul", initiative: "Run AI-led modernization validation workshop with prospects", track: "GTM & Sales", owner: "Ella", department: "Sales", goal: "Workshop delivered", status: "todo" },
        { month: "Jul", initiative: "Qualify opportunities and capture AI-readiness scores", track: "GTM & Sales", owner: "Ella", department: "Sales", goal: "Qualified AI-led opportunities logged", status: "todo" },
        { month: "Jul", initiative: "Program retro: enablement → pipeline outcomes & next-quarter plan", track: "Program", owner: "All", department: "All Departments", goal: "Retro completed / pipeline reported", status: "todo" },
        // --- SmartMigrate accelerator (Jul–Sep) --------------------------
        { month: "Jul", initiative: "SmartMigrate: finalise any-to-any connector matrix & common commerce model", track: "SmartMigrate", owner: "Stephen", department: "Practice", goal: "Connector matrix finalised", status: "todo" },
        { month: "Aug", initiative: "SmartMigrate: build guided 5-step migration demo (connect → scope → map → review → migrate)", track: "SmartMigrate", owner: "Stephen", department: "Practice", goal: "Demo functional end-to-end", status: "todo" },
        { month: "Aug", initiative: "SmartMigrate: inline & bulk error-remediation walkthrough + live progress board", track: "SmartMigrate", owner: "Stephen", department: "Practice", goal: "Remediation demo ready", status: "todo" },
        { month: "Sep", initiative: "SmartMigrate: package fixed-scope cutover offer & submit for certification", track: "SmartMigrate", owner: "Stephen", department: "Practice", goal: "Offer packaged / submitted", status: "sched" },
        // --- AI-Native CPQ accelerator (Jul–Sep) -------------------------
        { month: "Jul", initiative: "AI-Native CPQ: secure COE approval to proceed (v1 scope & resourcing)", track: "CPQ", owner: "Stephen", department: "Practice", goal: "Approval to build secured", status: "todo" },
        { month: "Aug", initiative: "AI-Native CPQ: build RFQ-to-quote ingestion on commercetools quote primitives", track: "CPQ", owner: "Stephen", department: "Practice", goal: "RFQ-to-quote demo", status: "todo" },
        { month: "Aug", initiative: "AI-Native CPQ: conversational guided selling + deal-desk copilot with guardrails", track: "CPQ", owner: "Stephen", department: "Practice", goal: "Guided selling + copilot demo", status: "todo" },
        { month: "Sep", initiative: "AI-Native CPQ: package v1 + proof-of-impact metrics; submit for certification", track: "CPQ", owner: "Stephen", department: "Practice", goal: "v1 packaged / submitted", status: "sched" },
      ],
    },
    {
      id: "q4",
      label: "Q4 2026",
      title: "Royal Cyber — Q4 2026: Optimizely Connect Development & CS Accelerator Build",
      subtitle:
        "Oct – Dec 2026  |  Build Optimizely Connect end to end, plus the platform-agnostic Customer Service accelerator",
      focus: [
        { team: "Practice", text: "Build Optimizely Connect end to end — real-time sync, commerce components, ODP events and experimentation hooks — and build out the platform-agnostic CS accelerator." },
        { team: "Partnerships", text: "Take Optimizely Connect and the CS accelerator through commercetools certification and into the co-sell motion." },
        { team: "Marketing", text: "Launch GTM for Optimizely Connect and the CS accelerator; publish proof-of-impact stories." },
        { team: "Sales", text: "Convert Q3 pipeline and demo the CS accelerator and Optimizely-powered experiences to prospects." },
      ],
      initiatives: [
        // --- Optimizely Connect development (Oct–Dec) --------------------
        { month: "Oct", initiative: "Optimizely Connect: finalise integration architecture & field-mapping spec (commercetools ↔ Optimizely CMS/ODP)", track: "Optimizely Connect", owner: "Stephen", department: "Practice", goal: "Architecture & mapping spec signed off", status: "todo" },
        { month: "Oct", initiative: "Optimizely Connect: build real-time sync of products, prices, inventory & promotions via Subscriptions/APIs", track: "Optimizely Connect", owner: "Stephen", department: "Practice", goal: "Live sync working", status: "todo" },
        { month: "Nov", initiative: "Optimizely Connect: build pre-built commerce content components (PLP/PDP/cart) rendering live data", track: "Optimizely Connect", owner: "Stephen", department: "Practice", goal: "Components rendering live data", status: "todo" },
        { month: "Nov", initiative: "Optimizely Connect: stream order & customer events to ODP for audiences & personalization", track: "Optimizely Connect", owner: "Stephen", department: "Practice", goal: "ODP events flowing", status: "todo" },
        { month: "Nov", initiative: "Optimizely Connect: wire experimentation hooks (Web & Feature Experimentation) with conversion/order metrics", track: "Optimizely Connect", owner: "Stephen", department: "Practice", goal: "Experimentation metrics fed back", status: "todo" },
        { month: "Dec", initiative: "Optimizely Connect: end-to-end QA, retry/reconciliation & SSO / unified preview", track: "Optimizely Connect", owner: "Stephen", department: "Practice", goal: "End-to-end validated", status: "todo" },
        { month: "Dec", initiative: "Optimizely Connect: package connector + docs; submit for commercetools certification", track: "Optimizely Connect", owner: "Stephen", department: "Practice", goal: "Connector packaged / submitted", status: "sched" },
        // --- Customer Service accelerator (moved from the 6-week plan) ----
        { month: "Oct", initiative: "Define platform-agnostic Customer Service accelerator scope & adapter architecture", track: "CS Accelerator", owner: "Stephen", department: "Practice", goal: "Scope & architecture defined", status: "todo" },
        { month: "Oct", initiative: "Draft platform-agnostic CS accelerator adapter contracts (order, returns, ticketing, KB)", track: "CS Accelerator", owner: "Stephen", department: "Practice", goal: "Adapter contracts drafted", status: "todo" },
        { month: "Nov", initiative: "Build Customer Service accelerator demo: order status, returns/refunds & KB answers via neutral adapters", track: "CS Accelerator", owner: "Stephen", department: "Practice", goal: "CS accelerator demo functional", status: "todo" },
        { month: "Nov", initiative: "Position platform-agnostic Customer Service accelerator in the talk track & GTM pack", track: "CS Accelerator", owner: "Pooja", department: "Marketing", goal: "CS accelerator positioned in GTM", status: "todo" },
        { month: "Nov", initiative: "Review platform-agnostic Customer Service accelerator with commercetools partner team", track: "CS Accelerator", owner: "Venky", department: "Partnerships", goal: "CS accelerator feedback captured", status: "todo" },
        { month: "Dec", initiative: "Showcase platform-agnostic Customer Service accelerator in modernization workshops", track: "CS Accelerator", owner: "Ella", department: "Sales", goal: "CS accelerator demoed to prospects", status: "todo" },
      ],
    },
  ],
};
