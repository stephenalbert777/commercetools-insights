// ---------------------------------------------------------------------------
// COMMERCETOOLS WEEKLY PLAN AGENT — output data
// ---------------------------------------------------------------------------
// This file holds the structured output of the Weekly Plan agent.
// To refresh the dashboard, replace the `weeklyPlan` object below with the
// agent's latest run. Keep the shape the same and the UI updates automatically.
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
  generated: "Jun 22, 2026 17:26 IST",
  weeks: [
    {
      id: "wk1",
      label: "Week 1",
      title: "Royal Cyber — Week 1: commercetools Visibility Sprint Foundation",
      subtitle:
        "Jun 01 – Jun 05, 2026  |  Composable Commerce foundations + Commerce MCP / Agent Gateway content",
      focus: [
        { team: "Marketing", text: "Kick off commercetools visibility sprint, assign owners, set Slack signal alerts and publish Week 1 social posts." },
        { team: "Content", text: "Draft and publish Blog Post 1 and Blog Post 2 from the two-week plan." },
        { team: "Practice", text: "Provide technical review for the Commerce MCP / Agent Gateway pilot and the MACH composable checklist." },
        { team: "Design", text: "Prepare checklist and architecture visuals for blogs and LinkedIn support." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 01", activity: "Kick-off: assign owners & set Slack signal alerts", team: "Practice Head", type: "Internal Milestone", kpi: "Owners assigned / alerts set", owner: "Vaibhav", department: "Practice", status: "todo" },
        { day: "Mon", date: "Jun 01", activity: "Post: 'Let buyers order in plain language — commercetools Agent Gateway in action'", team: "Marketing Writer", type: "LinkedIn Post", kpi: "Post published", owner: "TBD", department: "Marketing", status: "todo" },
        { day: "Tue", date: "Jun 02", activity: "Beyond catalogs — conversational B2B ordering with the Commerce MCP", team: "Technical Writer", type: "Blog Post", kpi: "Draft completed", owner: "TBD", department: "Content", status: "prog" },
        { day: "Wed", date: "Jun 03", activity: "Blog review & publish: Commerce MCP / Agent Gateway pilot", team: "Editor + Architect", type: "Blog Post", kpi: "Reviewed and published", owner: "TBD", department: "Practice", status: "prog" },
        { day: "Wed", date: "Jun 03", activity: "Post: 'Rethink your replatforming — lift-and-shift won't unlock composable'", team: "Marketing Writer", type: "LinkedIn Post", kpi: "Post published", owner: "Pooja", department: "Marketing", status: "prog" },
        { day: "Thu", date: "Jun 04", activity: "MACH in practice — the architect's checklist for composable commerce", team: "Technical Writer", type: "Blog Post", kpi: "Draft completed", owner: "TBD", department: "Content", status: "done" },
        { day: "Thu", date: "Jun 04", activity: "Whitepaper kick-off: 'The Autonomous Commerce Stack' — outline & research", team: "Senior Architect", type: "Whitepaper", kpi: "Outline approved", owner: "Vaibhav", department: "Practice", status: "prog" },
        { day: "Fri", date: "Jun 05", activity: "Blog publish: MACH composable architecture checklist", team: "Editor", type: "Blog Post", kpi: "Published", owner: "TBD", department: "Content", status: "done" },
        { day: "Fri", date: "Jun 05", activity: "Post: 'Smart Data Modeler — AI proposes your product model in minutes'", team: "Marketing Writer", type: "LinkedIn Post", kpi: "Post published", owner: "TBD", department: "Marketing", status: "todo" },
        { day: "Fri", date: "Jun 05", activity: "Weekly standup: review Week 1 content progress and blockers", team: "All Teams", type: "Review", kpi: "Status logged", owner: "All", department: "All Departments", status: "prog" },
      ],
    },
    {
      id: "wk2",
      label: "Week 2",
      title: "Royal Cyber — Week 2: Sphere & Autonomous Commerce Launch Sprint",
      subtitle:
        "Jun 08 – Jun 12, 2026  |  commercetools Sphere launch (Jun 9) + AgenticLift / AI Hub content",
      focus: [
        { team: "Marketing", text: "Ride the June 9 Sphere launch. Publish Autonomous Commerce explainer and promote whitepaper and LinkedIn assets." },
        { team: "Content", text: "Draft and publish Blog Posts 3–4 plus LinkedIn Posts 4–5." },
        { team: "Practice", text: "Review Sphere architecture, agent governance and AgenticLift / AI Hub messaging." },
        { team: "Design", text: "Begin whitepaper design and architecture visual assets." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 08", activity: "Inside commercetools Sphere — the autonomous commerce platform", team: "Content Writer", type: "Blog Post", kpi: "Draft completed", owner: "TBD", department: "Content", status: "prog" },
        { day: "Mon", date: "Jun 08", activity: "Whitepaper draft sections 1–3: 'The Autonomous Commerce Stack'", team: "Senior Architect", type: "Whitepaper", kpi: "Draft completed", owner: "Vaibhav", department: "Practice", status: "todo" },
        { day: "Tue", date: "Jun 09", activity: "Blog publish: Inside commercetools Sphere (launch-day)", team: "Editor", type: "Blog Post", kpi: "Published", owner: "Vaibhav", department: "Content", status: "done" },
        { day: "Tue", date: "Jun 09", activity: "Post: 'Autonomous Commerce is not a feature — it's the next category' (Dirk Hoerig)", team: "Marketing Writer", type: "LinkedIn Post", kpi: "Post published", owner: "TBD", department: "Marketing", status: "done" },
        { day: "Wed", date: "Jun 10", activity: "AgenticLift explained — join AI shopping without replatforming", team: "Content Writer", type: "Blog Post", kpi: "Draft completed", owner: "TBD", department: "Content", status: "todo" },
        { day: "Wed", date: "Jun 10", activity: "Whitepaper draft sections 4–6: agent governance, RC framework, case study", team: "Senior Architect", type: "Whitepaper", kpi: "Draft completed", owner: "Vaibhav", department: "Practice", status: "prog" },
        { day: "Thu", date: "Jun 11", activity: "Blog publish: AgenticLift adoption guide", team: "Editor", type: "Blog Post", kpi: "Published", owner: "TBD", department: "Content", status: "todo" },
        { day: "Thu", date: "Jun 11", activity: "Whitepaper full draft review: 'The Autonomous Commerce Stack'", team: "Practice Head", type: "Whitepaper", kpi: "Review completed", owner: "TBD", department: "Practice", status: "todo" },
        { day: "Fri", date: "Jun 12", activity: "Architecture visual: sense → decide → act with agent governance", team: "Technical Writer + Designer", type: "LinkedIn Post", kpi: "Post published", owner: "TBD", department: "Content", status: "todo" },
        { day: "Fri", date: "Jun 12", activity: "Finalise & design 'The Autonomous Commerce Stack' whitepaper", team: "Designer", type: "Internal Milestone", kpi: "Design ready", owner: "TBD", department: "Design", status: "prog" },
        { day: "Fri", date: "Jun 12", activity: "Weekly standup: all teams report vs Week 2 targets", team: "All Teams", type: "Review", kpi: "Status logged", owner: "All", department: "All Departments", status: "done" },
      ],
    },
    {
      id: "wk3",
      label: "Week 3",
      title:
        "Royal Cyber + commercetools — Week 3: SAP → commercetools Migration + Partnership Showcase",
      subtitle:
        "Jun 15 – Jun 19, 2026  |  SAP Commerce → commercetools migration campaign and RC Accelerator showcase",
      focus: [
        { team: "Marketing", text: "Publish SAP → commercetools migration blog and prepare campaign assets." },
        { team: "Practice", text: "Build the Composable Migration Accelerator and demo video." },
        { team: "Partnerships", text: "Conduct commercetools partnership meeting on Jun 16 to showcase the RC Accelerator." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 15", activity: "Blog post: migrating from SAP Commerce to commercetools", team: "Marketing", type: "Blog", kpi: "Blog published", owner: "Zainab", department: "Marketing", status: "prog" },
        { day: "Tue", date: "Jun 16", activity: "Partnership meeting with commercetools to showcase RC Accelerator", team: "Partnerships", type: "Meeting", kpi: "Meeting completed", owner: "Vaibhav", department: "Partnerships", status: "done" },
        { day: "Wed", date: "Jun 17", activity: "Composable Migration Accelerator (Smart Data Modeler + Import API) and video", team: "Practice", type: "Accelerator", kpi: "Demo video ready", owner: "Vaibhav", department: "Practice", status: "prog" },
        { day: "Fri", date: "Jun 19", activity: "Campaign launch for SAP → commercetools migration", team: "Marketing", type: "Campaign", kpi: "Campaign launched", owner: "Pooja", department: "Marketing", status: "prog" },
        { day: "Fri", date: "Jun 19", activity: "Weekly standup: all teams report vs targets", team: "All Teams", type: "Review", kpi: "Status logged", owner: "TBD", department: "All Departments", status: "todo" },
      ],
    },
    {
      id: "wk4",
      label: "Week 4",
      title: "Royal Cyber — Week 4: Checkout & Payments Modernization Campaign",
      subtitle:
        "Jun 22 – Jun 26, 2026  |  Express Payments, Drop-in UI & Payment Intents — Blog, Accelerator, Video and Campaign",
      focus: [
        { team: "Marketing", text: "Publish Checkout modernization blog and prepare campaign assets." },
        { team: "Practice", text: "Build a Checkout / Payments integration accelerator and demo video." },
        { team: "Sales", text: "Align campaign follow-up with conversion-focused commerce prospects." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 22", activity: "Blog post: Checkout that converts — Express Payments, Drop-in & Payment Intents", team: "Marketing", type: "Blog", kpi: "Blog published", owner: "TBD", department: "Marketing", status: "todo" },
        { day: "Wed", date: "Jun 24", activity: "Accelerator for commercetools Checkout + PSP integration and video", team: "Practice", type: "Accelerator", kpi: "Demo video ready", owner: "TBD", department: "Practice", status: "todo" },
        { day: "Fri", date: "Jun 26", activity: "Campaign launch for Checkout & Payments modernization", team: "Marketing", type: "Campaign", kpi: "Campaign launched", owner: "TBD", department: "Marketing", status: "todo" },
        { day: "Fri", date: "Jun 26", activity: "Weekly standup: all teams report vs targets", team: "All Teams", type: "Review", kpi: "Status logged", owner: "TBD", department: "All Departments", status: "todo" },
      ],
    },
    {
      id: "wk5",
      label: "Week 5",
      title: "Royal Cyber — Week 5: Real-Time Inventory & Cart Accuracy",
      subtitle:
        "Jun 29 – Jul 03, 2026  |  Inventory Reservations & Cart Freeze campaign",
      focus: [
        { team: "Marketing", text: "Publish inventory & cart accuracy blog and campaign assets." },
        { team: "Practice", text: "Build an accelerator around Inventory Reservations (Reserve On Cart) and Cart Freeze." },
        { team: "Sales", text: "Prepare outreach messaging for high-demand-drop and flash-sale use cases." },
      ],
      tasks: [
        { day: "Mon", date: "Jun 29", activity: "Blog post: real-time inventory at scale with Inventory Reservations", team: "Marketing", type: "Blog", kpi: "Blog published", owner: "TBD", department: "Marketing", status: "todo" },
        { day: "Wed", date: "Jul 01", activity: "Accelerator for Inventory Reservations + Cart Freeze patterns", team: "Practice", type: "Accelerator", kpi: "Accelerator ready", owner: "TBD", department: "Practice", status: "todo" },
        { day: "Fri", date: "Jul 03", activity: "Campaign launch for real-time inventory & cart accuracy", team: "Marketing", type: "Campaign", kpi: "Campaign launched", owner: "TBD", department: "Marketing", status: "todo" },
        { day: "Fri", date: "Jul 03", activity: "Weekly standup: all teams report vs targets", team: "All Teams", type: "Review", kpi: "Status logged", owner: "TBD", department: "All Departments", status: "todo" },
      ],
    },
    {
      id: "wk6",
      label: "Week 6",
      title: "Royal Cyber — Week 6: Connect & Checkout on AWS Adoption",
      subtitle:
        "Jul 06 – Jul 10, 2026  |  Multi-cloud deployment awareness and Royal Cyber integration",
      focus: [
        { team: "Marketing", text: "Publish Connect & Checkout on AWS blog and campaign assets." },
        { team: "Practice", text: "Integrate commercetools Connect within a Royal Cyber AWS reference environment." },
        { team: "Partnerships", text: "Position Royal Cyber as a hands-on commercetools implementation partner." },
      ],
      tasks: [
        { day: "Mon", date: "Jul 06", activity: "Blog post: run commercetools Connect & Checkout natively on AWS", team: "Marketing", type: "Blog", kpi: "Blog published", owner: "TBD", department: "Marketing", status: "todo" },
        { day: "Wed", date: "Jul 08", activity: "Integration of Connect within Royal Cyber AWS reference environment", team: "Practice", type: "Integration", kpi: "Integration completed", owner: "TBD", department: "Practice", status: "todo" },
        { day: "Fri", date: "Jul 10", activity: "Campaign launch for Connect & Checkout on AWS", team: "Marketing", type: "Campaign", kpi: "Campaign launched", owner: "TBD", department: "Marketing", status: "todo" },
        { day: "Fri", date: "Jul 10", activity: "Weekly standup: all teams report vs targets", team: "All Teams", type: "Review", kpi: "Status logged", owner: "TBD", department: "All Departments", status: "todo" },
      ],
    },
  ],
  raci: {
    roles: [
      "Practice Head",
      "Senior Architect",
      "Technical Writer",
      "Content Writer",
      "Marketing Writer",
      "Editor",
      "Designer",
      "Marketing Team",
      "Sales",
      "Partnerships",
    ],
    rows: [
      { deliverable: "Blog Posts (technical)", values: ["A", "C", "R", "", "", "R", "", "I", "", ""] },
      { deliverable: "Blog Posts (marketing)", values: ["I", "C", "", "R", "", "R", "", "A", "", ""] },
      { deliverable: "Whitepapers", values: ["A", "R", "", "", "", "C", "C", "I", "", ""] },
      { deliverable: "LinkedIn Posts", values: ["I", "C", "C", "", "R", "", "C", "A", "", ""] },
      { deliverable: "Architecture Visuals", values: ["I", "C", "R", "", "", "", "R", "A", "", ""] },
      { deliverable: "Internal Milestones / Retros", values: ["A", "C", "I", "I", "I", "I", "I", "R", "I", "I"] },
      { deliverable: "Migration Accelerators", values: ["A", "R", "I", "", "", "", "", "I", "C", ""] },
      { deliverable: "Campaign Launches", values: ["I", "C", "", "", "C", "", "C", "R", "A", ""] },
      { deliverable: "Partnership Meetings", values: ["C", "C", "", "", "", "", "", "I", "I", "R"] },
      { deliverable: "Weekly Standups", values: ["A", "R", "R", "R", "R", "R", "R", "R", "I", "I"] },
    ],
  },
};
