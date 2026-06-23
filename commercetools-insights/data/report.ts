// ---------------------------------------------------------------------------
// COMMERCETOOLS DEPARTMENT AGENT — weekly intelligence sweep
// ---------------------------------------------------------------------------
// Structured output of the Department Agent's "Trend & Content Opportunities"
// report. Replace the `report` object below with the agent's latest run to
// refresh the dashboard. Keep the same shape.
// ---------------------------------------------------------------------------

export type FlagKind = "ai" | "ent" | "gap";

export interface TrendFlag {
  kind: FlagKind;
  label: string;
}

export interface Trend {
  rank: number;
  title: string;
  body: string;
  flags: TrendFlag[];
}

export interface ReleaseUpdate {
  product: string;
  date: string;
  highlight: string;
  source: string;
  type: string;
}

export interface EventItem {
  event: string;
  when: string;
  focus: string;
  register: string;
}

export interface RoadmapCard {
  product: string;
  phase: string;
  items: string[];
  link: string;
}

export interface ContentIdea {
  title: string;
  why: string;
  audience: string;
  difficulty?: string;
  engagement?: number;
  uniqueness?: number;
  priority?: number;
}

export interface CompetitiveRow {
  theme: string;
  commercetools: string;
  competitor: string;
  opportunity: string;
}

export interface ActionItem {
  n: number;
  title: string;
  why: string;
  priority: number;
  format: string;
}

export interface NextItem {
  bold: string;
  text: string;
}

export interface Report {
  title: string;
  generated: string;
  sub: string;
  tags: { label: string; hot?: boolean }[];
  trends: Trend[];
  releases: ReleaseUpdate[];
  events: EventItem[];
  roadmap: RoadmapCard[];
  blogs: ContentIdea[];
  whitepapers: ContentIdea[];
  linkedin: ContentIdea[];
  competitive: CompetitiveRow[];
  actions: ActionItem[];
  next7: NextItem[];
}

export const report: Report = {
  title: "commercetools Trend and Content Opportunities",
  generated: "June 22, 2026",
  sub: "A weekly read for content marketers, solution architects, commerce leads, and product marketers: the signals worth acting on across Sphere, AgenticLift, AI Hub, Composable Commerce, Checkout, Connect, and the Commerce MCP — each tied to a dated release, event, or roadmap item.",
  tags: [
    { label: "Breakout: Autonomous Commerce & Sphere", hot: true },
    { label: "Lookback window: 90 days" },
    { label: "Focus: Agentic AI · Composable / MACH · B2B & Checkout" },
  ],
  trends: [
    {
      rank: 1,
      title: "Autonomous Commerce becomes a category — and Sphere is the platform",
      body: "The dominant signal of the window. On June 9 (Boston), commercetools declared \"Autonomous Commerce\" the next era — AI systems that sense, decide and act in real time across pricing, inventory, promotions and fulfillment — and unveiled commercetools Sphere, an AI-native platform pairing a headless foundation with agent governance (identity, scope, human approval). Sphere already powers $100B+ in annualized GMV at under 60ms. MosAIc, a multi-agent ops tool, previewed at Shoptalk Europe.",
      flags: [
        { kind: "ai", label: "AI relevance" },
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
    {
      rank: 2,
      title: "Agentic shopping channels: AgenticLift + AI Hub",
      body: "AgenticLift (Q1) gives brands on other platforms a fully managed AI commerce layer — connecting catalog, pricing and transactions to consumer AI channels without replatforming. AI Hub now supports UCP product feeds and checkout inside Google's Gemini, and commercetools backs Stripe's Agentic Commerce Suite. The Agent Gateway exposes commerce to AI agents safely.",
      flags: [
        { kind: "ai", label: "AI relevance" },
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
    {
      rank: 3,
      title: "AI-assisted data modeling shortens replatforming",
      body: "Smart Data Modeler uses GenAI to ingest CSV/JSON/XLSX and instantly propose a product data model with human-in-the-loop review — directly easing migrations off rigid platforms like SAP, Adobe and Salesforce. Paired with a 100MB / 500,000-row Import API and a new \"partially imported\" status, it makes catalog onboarding materially faster.",
      flags: [
        { kind: "ai", label: "AI relevance" },
        { kind: "ent", label: "Enterprise relevance" },
        { kind: "gap", label: "Validation still human-in-the-loop" },
      ],
    },
    {
      rank: 4,
      title: "Checkout turns into a conversion engine",
      body: "A heavy quarter for Checkout: Express Payments (one-click PayPal / Google Pay / Apple Pay), Drop-in payment UI (GA), Payment predicates, the Payment Intents API (GA), and Applications / Payment Integrations APIs to configure checkout without manual Merchant Center setup.",
      flags: [
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
    {
      rank: 5,
      title: "Multi-cloud: Connect & Checkout land on AWS",
      body: "commercetools Connect now runs inside a customer's existing AWS environment with full feature parity (previously Google Cloud only), and Checkout plus PSP connectors are supported on AWS natively — reducing architectural complexity and latency for enterprises standardized on AWS.",
      flags: [
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
    {
      rank: 6,
      title: "Real-time inventory & cart accuracy at scale",
      body: "Inventory Reservations (the new \"Reserve On Cart\" mode) hold stock from add-to-cart through checkout — built for fast-selling items at thousands of reservations a minute. Cart Freeze Strategies lock displayed price/discounts, Cart Locking lets support agents edit safely, and carts can now carry a Purchase Order number from the start.",
      flags: [
        { kind: "ent", label: "Enterprise relevance" },
      ],
    },
  ],
  releases: [
    { product: "commercetools Sphere", date: "Jun 9, 2026", highlight: "Autonomous Commerce category launch and commercetools Sphere — an AI-native platform uniting a headless foundation with agent governance (identity, scope, human approval). MosAIc multi-agent ops tool previewed at Shoptalk Europe (Stall M30).", source: "commercetools.com/press-releases", type: "Launch" },
    { product: "Product Search", date: "May 26, 2026", highlight: "Several Product Search fields are now generally available, expanding queryable product data for storefront and agent-driven discovery.", source: "docs.commercetools.com/api/releases", type: "GA release" },
    { product: "commercetools Connect", date: "Mar 23, 2026", highlight: "Connect is now available in AWS regions — deploy and run Connect applications inside your existing AWS environment with full feature parity.", source: "docs.commercetools.com/connect/releases", type: "Enhancement" },
    { product: "commercetools Checkout", date: "Mar 23, 2026", highlight: "Checkout and PSP connectors are now supported on AWS, so customers can run checkout natively within their existing AWS setup.", source: "docs.commercetools.com/checkout/releases", type: "Enhancement" },
    { product: "Import API", date: "Mar 10, 2026", highlight: "New \"partially imported\" status surfaces mixed import outcomes, so you can fix and re-import only the failed rows instead of starting over.", source: "docs.commercetools.com/api/releases", type: "Enhancement" },
    { product: "CSV Import (Merchant Center)", date: "Jan 28, 2026", highlight: "Increased CSV import limits to 100 MB and 500,000 rows, enabling larger bulk data operations in a single import.", source: "docs.commercetools.com/merchant-center/releases", type: "Enhancement" },
    { product: "Checkout — Payment Intents API", date: "Jan 21, 2026", highlight: "Payment Intents API is generally available — manage post-payment actions (capture, refund, cancel) with automatic PSP coordination.", source: "docs.commercetools.com/checkout/releases", type: "GA release" },
    { product: "Inventory — Reserve On Cart", date: "Jan 19, 2026", highlight: "Inventory Reservations with the new \"Reserve On Cart\" mode; inventory records now process with eventual consistency to handle higher order/inventory volumes.", source: "docs.commercetools.com/api/releases", type: "Enhancement" },
    { product: "Carts & Orders", date: "Jan 26, 2026", highlight: "Cart Discounts can now be scoped to recurring vs. non-recurring Orders; Cart Freeze and Cart Locking protect pricing and prevent conflicting edits.", source: "docs.commercetools.com/api/releases", type: "Enhancement" },
    { product: "Cart — Purchase Order Number", date: "Jan 8, 2026", highlight: "Added a purchaseOrderNumber field to the Cart so B2B buyers can attach a PO up front; it carries over to the Quote Request or Order automatically.", source: "docs.commercetools.com/api/releases", type: "Enhancement" },
    { product: "AgenticLift", date: "Q1 2026", highlight: "New solution that fast-tracks AI-driven shopping for businesses on other commerce platforms — a managed AI commerce layer connecting catalog, pricing and transactions without replatforming.", source: "commercetools.com/products/agenticlift", type: "New product" },
    { product: "AI Hub", date: "Q1 2026", highlight: "AI Hub now supports UCP product feeds and checkout inside Google's Gemini, extending commercetools catalogs and transactions into consumer AI channels.", source: "commercetools.com/products/ai-hub", type: "Enhancement" },
    { product: "Smart Data Modeler", date: "Q1 2026", highlight: "GenAI ingests CSV/JSON/XLSX customer files and proposes product types and attributes instantly, with human-in-the-loop review — cutting data-modeling time during implementation.", source: "docs.commercetools.com/merchant-center", type: "Enhancement" },
    { product: "Checkout — Express Payments", date: "Q1 2026", highlight: "Express payment buttons on cart/product pages let shoppers check out instantly with saved PayPal, Google Pay and Apple Pay details; Drop-in payment UI reached GA.", source: "commercetools.com/blog", type: "Enhancement" },
    { product: "Agentic Jumpstart", date: "Nov 2025", highlight: "Lower-risk path for existing customers to participate in agentic commerce at scale; early adopters Frasers Group and Liverpool, with Accenture, EPAM, Orium and Valtech as launch integrators.", source: "commercetools.com/press-releases", type: "New product" },
  ],
  events: [
    { event: "Elevate — The Global Commerce Summit™ 2026", when: "Date to be announced · Sign up for updates", focus: "Visionary keynotes, business and technical breakouts, expo and networking — anchored on agentic and autonomous commerce.", register: "https://elevate.commercetools.com/" },
    { event: "AI x Commerce Series", when: "March–Summer 2026 · Virtual series", focus: "Deep-dive sessions on AI's impact on commerce — agentic shopping, autonomous operations, and modern CX that drives revenue.", register: "https://commercetools.com/events" },
    { event: "commercetools at Shoptalk Europe", when: "Jun 9–11, 2026 · Barcelona (Stall M30)", focus: "Autonomous Commerce vision and a first preview of MosAIc, the multi-agent commerce operations tool for enterprises.", register: "https://commercetools.com/events" },
  ],
  roadmap: [
    { product: "commercetools Sphere / Autonomous Commerce", phase: "Now / near-term", items: ["MosAIc — multi-agent orchestration across pricing, promotions & fulfillment (preview)", "Autonomous inventory & reordering agents with demand forecasting", "Autonomous campaigns, personalization and fulfillment routing", "Agent governance: identity, scope and human approval per agent", "B2B procurement agents for routine reorders within set boundaries"], link: "https://commercetools.com/products/agentic-commerce" },
    { product: "Agentic Commerce (AgenticLift · AI Hub · Agent Gateway)", phase: "Now / near-term", items: ["AgenticLift for brands on non-commercetools platforms", "AI Hub UCP product feeds and checkout in Google Gemini", "Support for Stripe's Agentic Commerce Suite", "Agent Gateway — safe, governed exposure of commerce to AI agents", "Agentic Jumpstart with Accenture, EPAM, Orium, Valtech"], link: "https://commercetools.com/products/agentic-commerce" },
    { product: "Checkout & Payments", phase: "Q1–Q2 2026", items: ["Express Payments (PayPal, Google Pay, Apple Pay)", "Drop-in payment UI (GA) and Payment predicates", "Payment Intents API for capture / refund / cancel (GA)", "Applications & Payment Integrations APIs (config without Merchant Center)", "Checkout + PSP connectors now available on AWS"], link: "https://commercetools.com/products/frontend" },
    { product: "Platform, Connect & Builders", phase: "Now / near-term", items: ["commercetools for Builders — production B2B/B2C experiences in days", "Commerce Integration Layer across content, search, promotions, tax", "Connect applications running natively on AWS (with Google Cloud)", "Infrastructure partners: AWS, Google Cloud, MongoDB", "Audit Log Premium and Payment Hub for compliance & ops"], link: "https://commercetools.com/commerce-platform" },
    { product: "Data, Inventory & Cart", phase: "Q1 2026", items: ["Smart Data Modeler — GenAI-proposed product types & attributes", "Import API \"partially imported\" status; 100MB / 500k-row CSV imports", "Inventory Reservations with Reserve On Cart mode", "Cart Freeze Strategies and Cart Locking", "Recurring-order scoping for Cart Discounts; PO number on Cart"], link: "https://docs.commercetools.com/docs/release-notes" },
    { product: "Frontend, In-Store & Foundry", phase: "In development", items: ["Frontend (frontend-as-a-service) for composable storefronts", "In-Store for unified online + physical retail", "Foundry blueprints (e.g. B2C retail) to accelerate launches", "Merchant Center: Carts list, sort by all attributes, faster Variants list", "Innovation Studio experiments at commercetools.ai"], link: "https://commercetools.com/products/frontend" },
  ],
  blogs: [
    { title: "Inside commercetools Sphere: building for the autonomous commerce era", why: "The June 9 launch defines a new category. Explain the three pillars — headless foundation, cross-domain agent orchestration, and per-agent governance — and show where autonomy fits across pricing, inventory and fulfillment. Highest-momentum topic of the window.", audience: "Solution architects & commerce leads", difficulty: "Intermediate", engagement: 9, uniqueness: 9, priority: 9.3 },
    { title: "AgenticLift explained: join AI shopping without replatforming", why: "AgenticLift lets brands on SAP, Salesforce or Adobe connect catalog, pricing and transactions to AI channels with a managed layer. A clear \"what it is / how to adopt\" piece captures the breakout adoption theme.", audience: "Product & commerce marketers", difficulty: "Beginner", engagement: 9, uniqueness: 8, priority: 8.4 },
    { title: "AI-assisted migration: modeling product data with the Smart Data Modeler", why: "GenAI proposes a product data model from CSV/JSON/XLSX with human-in-the-loop review — the practical answer to slow, risky migrations off rigid platforms. Pair with the 100MB / 500k-row Import API.", audience: "Solution architects", difficulty: "Intermediate", engagement: 8, uniqueness: 8, priority: 7.9 },
    { title: "Checkout that converts: Express Payments, Drop-in & Payment Intents", why: "A full quarter of Checkout releases. Walk through one-click express payments, the Drop-in UI, payment predicates, and post-payment automation via the Payment Intents API.", audience: "Front-end & commerce engineers", difficulty: "Intermediate", engagement: 8, uniqueness: 7, priority: 7.4 },
    { title: "Run commercetools Connect & Checkout natively on AWS", why: "Connect and Checkout now run inside a customer's AWS environment with full feature parity. A deployment-focused post captures the multi-cloud enterprise audience standardized on AWS.", audience: "Platform & DevOps engineers", difficulty: "Intermediate", engagement: 8, uniqueness: 8, priority: 7.2 },
    { title: "Real-time inventory at scale: Inventory Reservations & Cart Freeze", why: "Reserve On Cart holds stock from add-to-cart through checkout for fast-selling items; Cart Freeze and Cart Locking protect pricing and edits. A concrete \"high-demand drop\" scenario lands well.", audience: "Commerce & product marketers", difficulty: "Beginner", engagement: 8, uniqueness: 7, priority: 7.0 },
  ],
  whitepapers: [
    { title: "The autonomous commerce stack: Sphere, agent governance & MACH for enterprise", why: "Sphere plus agent governance lets commercetools make an autonomy-and-control argument competitors are still assembling. Frame the agent lifecycle: sense, decide, act — with identity, scope and human approval, on a headless MACH foundation.", audience: "Solution architects & product marketers", difficulty: "Advanced", engagement: 9, uniqueness: 9, priority: 8.2 },
    { title: "Replatforming to composable: a migration playbook from SAP & Salesforce to commercetools", why: "Smart Data Modeler, the Import API, commercetools for Builders and the Commerce Integration Layer form a defensible, lower-risk replatforming story. Lay out a phased path for teams leaving suite platforms.", audience: "Solution architects & commerce leads", difficulty: "Advanced", engagement: 8, uniqueness: 8, priority: 7.8 },
  ],
  linkedin: [
    { title: '"Autonomous Commerce is not a feature — it is the next category" (Dirk Hoerig, June 9)', why: "Founder quote from the Sphere launch. One graphic on sense → decide → act with governance; high shareability, low production cost.", audience: "Commerce leads & architects", engagement: 8, uniqueness: 8 },
    { title: '"Your catalog now checks out inside Google Gemini" — AI Hub + UCP', why: "AI Hub's UCP product feeds and Gemini checkout make agentic shopping tangible. A 60-second explainer with a single channel diagram.", audience: "Product & commerce marketers", engagement: 8, uniqueness: 7 },
  ],
  competitive: [
    { theme: "Agentic & autonomous commerce", commercetools: "Sphere + AgenticLift + AI Hub + Agent Gateway, plus MosAIc multi-agent ops and per-agent governance; $100B+ GMV at sub-60ms.", competitor: "Salesforce Agentforce Commerce (unified commerce + POS + OMS); Shopify Storefront MCP + UCP; Adobe Experience Platform AI (full UCP targeted late 2026).", opportunity: "Own \"autonomous\" (operations acting, not just agents shopping) and lead on agent governance plus headless speed." },
    { theme: "Composable / MACH architecture", commercetools: "MACH pioneer: headless APIs, Connect, multi-cloud (AWS + Google Cloud), Foundry blueprints and Frontend.", competitor: "Salesforce Commerce Cloud and Adobe Commerce (Magento) lead the non-pure-composable field; SAP for incumbents.", opportunity: "Contrast true composability and bring-your-own-cloud against suite lock-in and monolith upgrade cycles." },
    { theme: "AI-assisted migration off suites", commercetools: "Smart Data Modeler, 100MB/500k-row Import API, commercetools for Builders and the Commerce Integration Layer.", competitor: "Platform-specific migration tooling; replatforming services from SIs without GenAI data modeling.", opportunity: "Position fast, lower-risk replatforming from SAP/Adobe/Salesforce as a repeatable, AI-accelerated motion." },
    { theme: "Checkout & payments", commercetools: "Checkout + PSP connectors, Express Payments, Drop-in UI, Payment Intents API — now on AWS as well as Google Cloud.", competitor: "Shopify Checkout (conversion-leading but platform-bound); Salesforce / Adobe native checkout inside their suites.", opportunity: "Promote composable checkout that drops into any stack, on the customer's own cloud." },
    { theme: "Multi-cloud & enterprise infra", commercetools: "Connect & Checkout on AWS with feature parity, plus Google Cloud and MongoDB infrastructure partners.", competitor: "Single-cloud or vendor-hosted suites with limited deployment flexibility.", opportunity: "Meet enterprises in their existing cloud to cut latency, complexity and procurement friction." },
  ],
  actions: [
    { n: 1, title: "Ship the Sphere / Autonomous Commerce explainer", why: "Define the category and the three pillars (headless foundation, agent orchestration, governance) tied to the June 9 launch and MosAIc preview.", priority: 9.3, format: "Technical blog" },
    { n: 2, title: "Publish the AgenticLift adoption guide + AI Hub / Gemini demo", why: "Capture the breakout \"join AI shopping without replatforming\" theme with a concrete UCP-feed and Gemini-checkout walkthrough.", priority: 8.4, format: "Tutorial + demo" },
    { n: 3, title: "Commission the autonomous commerce stack whitepaper", why: "Agent governance plus MACH as the enterprise differentiator while rivals are still assembling theirs.", priority: 8.2, format: "Whitepaper" },
    { n: 4, title: "Produce the SAP / Salesforce → commercetools migration playbook", why: "Smart Data Modeler + Import API + Builders as a repeatable, lower-risk replatforming motion.", priority: 7.8, format: "Whitepaper" },
    { n: 5, title: "Draft the AWS Connect & Checkout deployment blog", why: "Multi-cloud parity is fresh and underexploited; targets enterprises standardized on AWS.", priority: 7.2, format: "Blog" },
  ],
  next7: [
    { bold: "Lock two pieces:", text: "the Sphere / Autonomous Commerce explainer and the AgenticLift adoption guide — both ride peak momentum off the June 9 launch and have demoable capabilities." },
    { bold: "Open Elevate 2026 content runway:", text: "with registration opening soon, brief an Elevate teaser series anchored on autonomous commerce and the Sphere vision." },
    { bold: "Capture the MosAIc preview", text: "from Shoptalk Europe while it is novel; line up a multi-agent operations angle for enterprise buyers." },
    { bold: "Queue the LinkedIn posts", text: "on the Dirk Hoerig \"next category\" quote and AI Hub + Gemini checkout to keep weekly cadence between long-form pieces." },
    { bold: "Validate competitor claims", text: "before publishing the comparison whitepaper — re-check Salesforce Agentforce Commerce, Shopify Storefront MCP/UCP, and Adobe's UCP timing for updates." },
  ],
};
