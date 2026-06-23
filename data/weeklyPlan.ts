// ---------------------------------------------------------------------------
// COMMERCETOOLS WEEKLY PLAN AGENT — output data
// ---------------------------------------------------------------------------
// This file holds the structured output of the Weekly Plan agent.
// To refresh the dashboard, replace the `weeklyPlan` object below with the
// agent's latest run. Keep the shape the same and the UI updates automatically.
//
// Current plan: a 6-week "Autonomous Commerce / AgenticLift AI Enablement"
// program — from MosAIc reference architecture through to a qualified AI-led
// modernization pipeline. A parallel workstream develops a platform-agnostic
// Customer Service accelerator (commerce-platform-neutral adapters) across all
// six weeks.
// ---------------------------------------------------------------------------

export type TaskStatus = "todo" | "prog" | "sched" | "done";

export type TaskType =
  | "Blog Post"
  | "Blog"
  | "Whitepaper"
  | "LinkedIn Post"
  | "Internal Milestone"
  | "Review"
  | "Meeting"
  | "Campaign"
  | "Accelerator"
  | "Integration";

export interface PlanTask {
  day: string;
  date: string;
  activity: string;
  team: string;
  type: TaskType;
  kpi: string;
  owner: string;
  department: string;
  status: TaskStatus;
}

export interface FocusCard {
  team: string;
  text: string;
}

export interface PlanWeek {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  focus: FocusCard[];
  tasks: PlanTask[];
}

export type Raci = "R" | "A" | "C" | "I" | "";

export interface RaciMatrix {
  roles: string[];
  rows: { deliverable: string; values: Raci[] }[];
}

export interface WeeklyPlan {
  org: string;
  generated: string;
  weeks: PlanWeek[];
  raci: RaciMatrix;
}

export const weeklyPlan: WeeklyPlan = {
  org: "Royal Cyber",
  generated: "Jun 23, 2026 11:30 IST",
  weeks: [
    {
      id: "wk1",
      label: "Week 1",
      title: "Royal Cyber — Week 1: Autonomous Commerce (MosAIc) & AgenticLift Foundation",
      subtitle:
        "Jun 22 – Jun 26, 2026  |  Autonomous Commerce reference architecture + AgenticLift POV & use-case map",
      focus: [
        { team: "Practice", text: "Review commercetools' Autonomous Commerce (MosAIc) architecture and draft the Royal Cyber implementation blueprint." },
        { team: "Practice", text: "Run the AgenticLift architecture workshop across catalog, pricing, inventory, cart, order and customer-service context." },
        { team: "Practice", text: "Kick off the platform-agnostic Customer Service accelerator — define scope and a commerce-platform-neutral adapter architecture." },
        { team: "Design", text: "Produce architecture visuals for the reference architecture and the AgenticLift use-case map." },
        { team: "All Teams", text: "Lock owners, cadence and goals for the 6-week AI Commerce enablement program." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 22", activity: "Kick-off: AI Commerce enablement program — assign owners, cadence & goals", team: "Practice Head", type: "Internal Milestone", kpi: "Owners assigned / plan locked", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Tue", date: "Jun 23", activity: "Review commercetools Autonomous Commerce (MosAIc) reference architecture", team: "Practice", type: "Internal Milestone", kpi: "Architecture reviewed", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Wed", date: "Jun 24", activity: "Draft Royal Cyber Autonomous Commerce implementation blueprint", team: "Senior Architect", type: "Whitepaper", kpi: "Reference architecture drafted", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Thu", date: "Jun 25", activity: "AgenticLift architecture workshop: catalog, pricing, inventory, cart, order & CS context", team: "Practice", type: "Meeting", kpi: "Workshop completed", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Fri", date: "Jun 26", activity: "Publish AgenticLift POV + use-case map", team: "Senior Architect", type: "Internal Milestone", kpi: "POV + use-case map published", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Fri", date: "Jun 26", activity: "Define platform-agnostic Customer Service accelerator scope & adapter architecture", team: "Practice", type: "Internal Milestone", kpi: "CS accelerator scope & architecture defined", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Fri", date: "Jun 26", activity: "Weekly standup: review Week 1 enablement progress and blockers", team: "All Teams", type: "Review", kpi: "Status logged", owner: "All", department: "All Departments", status: "todo" },
      ],
    },
    {
      id: "wk2",
      label: "Week 2",
      title: "Royal Cyber — Week 2: MosAIc Setup & AgenticLift Demo Storyline",
      subtitle:
        "Jun 29 – Jul 03, 2026  |  Sandbox data, product feed, governance & data readiness + AgenticLift demo script",
      focus: [
        { team: "Practice", text: "Define the sandbox / demo data approach, product-feed strategy, governance and data-readiness checklist for Autonomous Commerce." },
        { team: "Practice + Marketing", text: "Write the AgenticLift demo storyline — discovery, inventory lookup, recommendations, cart creation and checkout handoff." },
        { team: "Practice", text: "Design the Customer Service accelerator's platform-agnostic adapter contracts for order, returns, ticketing and knowledge base." },
        { team: "Design", text: "Mock the demo storyline screens and the data-readiness checklist visuals." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 29", activity: "Define sandbox / demo data approach and product-feed strategy", team: "Practice", type: "Internal Milestone", kpi: "Data approach defined", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Tue", date: "Jun 30", activity: "Draft Autonomous Commerce governance & data-readiness checklist", team: "Senior Architect", type: "Accelerator", kpi: "Setup checklist ready", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Wed", date: "Jul 01", activity: "Define AgenticLift demo storyline: discovery → inventory → recommendations → cart → checkout handoff", team: "Practice + Marketing", type: "Internal Milestone", kpi: "Demo script drafted", owner: "Pooja", department: "Marketing", status: "todo" },
        { day: "Thu", date: "Jul 02", activity: "Review demo script with Practice and align to MosAIc data feeds", team: "Practice", type: "Review", kpi: "Script reviewed", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Fri", date: "Jul 03", activity: "Finalise AgenticLift demo script and setup checklist", team: "Practice", type: "Internal Milestone", kpi: "Script + checklist signed off", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Fri", date: "Jul 03", activity: "Draft platform-agnostic CS accelerator adapter contracts (order, returns, ticketing, KB)", team: "Senior Architect", type: "Accelerator", kpi: "Adapter contracts drafted", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Fri", date: "Jul 03", activity: "Weekly standup: all teams report vs Week 2 targets", team: "All Teams", type: "Review", kpi: "Status logged", owner: "All", department: "All Departments", status: "todo" },
      ],
    },
    {
      id: "wk3",
      label: "Week 3",
      title: "Royal Cyber — Week 3: AgenticLift Demo Build & Workshop Kit",
      subtitle:
        "Jul 06 – Jul 10, 2026  |  AgenticLift demo (product discovery, inventory, pricing, cart) + workshop kit",
      focus: [
        { team: "Practice", text: "Build the AgenticLift demo — AI-agent product discovery, inventory lookup, pricing context and cart recommendation." },
        { team: "Practice + Marketing", text: "Assemble the workshop kit: AI-readiness assessment, workshop deck, discovery questionnaire and ROI calculator." },
        { team: "Practice", text: "Build the platform-agnostic Customer Service accelerator demo — order status, returns/refunds and knowledge-base answers through neutral adapters." },
        { team: "Design", text: "Design the workshop deck and the ROI calculator interface." },
      ],
      tasks: [
        { day: "Mon", date: "Jul 06", activity: "Build AgenticLift demo: AI-agent product discovery & inventory lookup", team: "Practice", type: "Accelerator", kpi: "Demo build started", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Tue", date: "Jul 07", activity: "Extend AgenticLift demo: pricing context & cart recommendation", team: "Practice", type: "Accelerator", kpi: "Demo functional end-to-end", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Wed", date: "Jul 08", activity: "Create AI-readiness assessment & discovery questionnaire", team: "Practice + Marketing", type: "Internal Milestone", kpi: "Assessment & questionnaire drafted", owner: "Pooja", department: "Marketing", status: "todo" },
        { day: "Thu", date: "Jul 09", activity: "Build Autonomous Commerce workshop deck & ROI calculator", team: "Practice + Marketing", type: "Whitepaper", kpi: "Workshop kit ready", owner: "Pooja", department: "Marketing", status: "todo" },
        { day: "Thu", date: "Jul 09", activity: "Build Customer Service accelerator demo: order status, returns/refunds & KB answers via neutral adapters", team: "Practice", type: "Accelerator", kpi: "CS accelerator demo functional", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Fri", date: "Jul 10", activity: "Dry-run AgenticLift demo + workshop kit walkthrough", team: "Practice", type: "Review", kpi: "Dry-run completed", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Fri", date: "Jul 10", activity: "Weekly standup: all teams report vs Week 3 targets", team: "All Teams", type: "Review", kpi: "Status logged", owner: "All", department: "All Departments", status: "todo" },
      ],
    },
    {
      id: "wk4",
      label: "Week 4",
      title: "Royal Cyber — Week 4: Sales Enablement & Customer GTM",
      subtitle:
        "Jul 13 – Jul 17, 2026  |  AI Commerce sales talk track + industry AI commerce GTM pack",
      focus: [
        { team: "Sales + Practice", text: "Create the AI-readiness sales talk track for customers who already run B2B/B2C commerce but need AI readiness." },
        { team: "Sales + Marketing", text: "Package the AI-led commerce modernization message for manufacturing, distribution and retail accounts." },
        { team: "Design", text: "Produce GTM one-pagers and talk-track battlecards." },
      ],
      tasks: [
        { day: "Mon", date: "Jul 13", activity: "Draft AI Commerce sales talk track for existing B2B/B2C customers needing AI readiness", team: "Sales + Practice", type: "Internal Milestone", kpi: "Talk track drafted", owner: "Ella", department: "Sales", status: "todo" },
        { day: "Tue", date: "Jul 14", activity: "Review talk track with Practice for technical accuracy", team: "Practice", type: "Review", kpi: "Talk track reviewed", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Wed", date: "Jul 15", activity: "Package AI-led modernization message for manufacturing, distribution & retail", team: "Sales + Marketing", type: "Campaign", kpi: "GTM pack drafted", owner: "Pooja", department: "Marketing", status: "todo" },
        { day: "Thu", date: "Jul 16", activity: "Design industry GTM one-pagers & battlecards", team: "Designer", type: "Internal Milestone", kpi: "GTM assets ready", owner: "TBD", department: "Design", status: "todo" },
        { day: "Thu", date: "Jul 16", activity: "Position platform-agnostic Customer Service accelerator in the talk track & GTM pack", team: "Sales + Practice", type: "Campaign", kpi: "CS accelerator positioned in GTM", owner: "Pooja", department: "Marketing", status: "todo" },
        { day: "Fri", date: "Jul 17", activity: "Finalise sales talk track and industry AI commerce GTM pack", team: "Sales + Marketing", type: "Internal Milestone", kpi: "Talk track + GTM pack signed off", owner: "Ella", department: "Sales", status: "todo" },
        { day: "Fri", date: "Jul 17", activity: "Weekly standup: all teams report vs Week 4 targets", team: "All Teams", type: "Review", kpi: "Status logged", owner: "All", department: "All Departments", status: "todo" },
      ],
    },
    {
      id: "wk5",
      label: "Week 5",
      title: "Royal Cyber — Week 5: Partner Motion with commercetools",
      subtitle:
        "Jul 20 – Jul 24, 2026  |  MosAIc / AgenticLift demo review with commercetools + partner-ready POV",
      focus: [
        { team: "Partnerships", text: "Review the MosAIc / AgenticLift demo with the commercetools partner team and capture co-sell feedback." },
        { team: "Practice", text: "Refine the demo and POV from partner feedback into a partner-ready POV." },
        { team: "Marketing", text: "Prepare co-sell collateral aligned to the partner motion." },
      ],
      tasks: [
        { day: "Mon", date: "Jul 20", activity: "Prep partner review: finalise MosAIc / AgenticLift demo and POV deck", team: "Practice", type: "Internal Milestone", kpi: "Review pack ready", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Wed", date: "Jul 22", activity: "Partner review with commercetools team — walk through MosAIc / AgenticLift demo", team: "Partnerships", type: "Meeting", kpi: "Meeting completed", owner: "Venky", department: "Partnerships", status: "todo" },
        { day: "Thu", date: "Jul 23", activity: "Capture co-sell feedback and log partner action items", team: "Partnerships", type: "Review", kpi: "Feedback captured", owner: "Venky", department: "Partnerships", status: "todo" },
        { day: "Thu", date: "Jul 23", activity: "Review platform-agnostic Customer Service accelerator with commercetools partner team", team: "Partnerships", type: "Meeting", kpi: "CS accelerator feedback captured", owner: "Venky", department: "Partnerships", status: "todo" },
        { day: "Fri", date: "Jul 24", activity: "Update POV into a partner-ready POV with co-sell positioning", team: "Practice", type: "Whitepaper", kpi: "Partner-ready POV published", owner: "Stephen", department: "Practice", status: "todo" },
        { day: "Fri", date: "Jul 24", activity: "Weekly standup: all teams report vs Week 5 targets", team: "All Teams", type: "Review", kpi: "Status logged", owner: "All", department: "All Departments", status: "todo" },
      ],
    },
    {
      id: "wk6",
      label: "Week 6",
      title: "Royal Cyber — Week 6: Pipeline Creation & AI-Led Modernization",
      subtitle:
        "Jul 27 – Jul 31, 2026  |  AI-led modernization validation workshops → qualified opportunities",
      focus: [
        { team: "Sales", text: "Run the AI-led modernization validation workshop with target accounts to build qualified pipeline." },
        { team: "Marketing", text: "Activate the industry AI commerce GTM pack to source workshop attendees." },
        { team: "Practice", text: "Support the workshops with the AgenticLift demo and technical discovery." },
      ],
      tasks: [
        { day: "Mon", date: "Jul 27", activity: "Identify & invite target manufacturing, distribution and retail accounts", team: "Sales + Marketing", type: "Campaign", kpi: "Target list & invites sent", owner: "Pooja", department: "Marketing", status: "todo" },
        { day: "Wed", date: "Jul 29", activity: "Run AI-led modernization validation workshop with prospects", team: "Sales", type: "Meeting", kpi: "Workshop delivered", owner: "Ella", department: "Sales", status: "todo" },
        { day: "Wed", date: "Jul 29", activity: "Showcase platform-agnostic Customer Service accelerator in modernization workshops", team: "Sales + Practice", type: "Meeting", kpi: "CS accelerator demoed to prospects", owner: "Ella", department: "Sales", status: "todo" },
        { day: "Thu", date: "Jul 30", activity: "Qualify opportunities and capture AI-readiness scores", team: "Sales", type: "Internal Milestone", kpi: "Qualified AI-led opportunities logged", owner: "Ella", department: "Sales", status: "todo" },
        { day: "Fri", date: "Jul 31", activity: "Program retro: enablement → pipeline outcomes & next-quarter plan", team: "All Teams", type: "Review", kpi: "Retro completed / pipeline reported", owner: "All", department: "All Departments", status: "todo" },
      ],
    },
  ],
  raci: {
    roles: [
      "Practice Head",
      "Senior Architect",
      "Practice Consultant",
      "Designer",
      "Marketing",
      "Sales",
      "Partnerships",
    ],
    rows: [
      { deliverable: "Autonomous Commerce blueprint / reference architecture", values: ["A", "R", "C", "C", "I", "", ""] },
      { deliverable: "MosAIc setup & data-readiness checklist", values: ["A", "R", "R", "", "I", "", ""] },
      { deliverable: "AgenticLift demo", values: ["A", "R", "R", "C", "C", "", "I"] },
      { deliverable: "Customer Service accelerator (platform-agnostic)", values: ["A", "R", "R", "C", "C", "I", "C"] },
      { deliverable: "Workshop kit (deck / ROI / assessment)", values: ["A", "C", "C", "R", "R", "I", ""] },
      { deliverable: "AI Commerce sales talk track", values: ["C", "C", "R", "", "C", "A", ""] },
      { deliverable: "Industry AI commerce GTM pack", values: ["I", "", "C", "R", "A", "R", ""] },
      { deliverable: "Partner-ready POV", values: ["C", "R", "C", "C", "I", "I", "A"] },
      { deliverable: "Pipeline workshops / qualification", values: ["I", "C", "C", "", "R", "A", "C"] },
      { deliverable: "Weekly standups / program retro", values: ["A", "R", "R", "R", "R", "R", "R"] },
    ],
  },
};
