// ---------------------------------------------------------------------------
// ROYAL CYBER ACCELERATORS — commercetools Center of Excellence
// ---------------------------------------------------------------------------
// Curated catalogue of Royal Cyber's commercetools accelerators. Each entry
// extends commercetools with applied AI, analytics and automation and is mapped
// to the customer pain it solves, the ideal customer, and the value it creates
// for both commercetools and Royal Cyber. Keep the shape stable so the
// /accelerators page and the dashboard card compile unchanged.
// ---------------------------------------------------------------------------

export interface AccelBenefit {
  title: string;
  text: string;
}

export interface AccelChallenge {
  title: string;
  text: string;
}

export interface Accelerator {
  n: string;            // "01"
  slug: string;         // anchor id, e.g. "commercetools-mcp-server"
  name: string;         // "commercetools Agentic Ordering"
  category: string;     // "B2B Commerce · Conversational AI"
  tagline: string;      // one-line positioning
  maturity: string;     // "Live pilot" | "In production" | "Production-ready"
  customerValue: string;// headline customer outcome
  overview: string;     // longer description
  benefits: AccelBenefit[];
  technical: string[];  // technical standpoint
  challenge: AccelChallenge;
  resolves: string[];   // how the accelerator resolves the challenge
  idealCustomer: string;
  signals: string[];
  valueCommercetools: string;
  valueRoyalCyber: string;
}

export interface AcceleratorsData {
  org: string;
  title: string;
  heading: string;
  intro: string;
  generated: string;
  items: Accelerator[];
}

export const accelerators: AcceleratorsData = {
  org: "Royal Cyber",
  title: "Royal Cyber Accelerators",
  heading: "Four Accelerators, Built for Customer Value",
  intro:
    "Each accelerator extends commercetools with applied AI, analytics and automation — and answers a real customer pain. Built and proven by the Royal Cyber commercetools Center of Excellence, they shorten time-to-value across B2B commerce, platform migration, analytics and catalog management.",
  generated: "Jun 22, 2026",
  items: [
    {
      n: "01",
      slug: "commercetools-agentic-ordering",
      name: "commercetools Agentic Ordering (Commerce MCP)",
      category: "B2B Commerce · Conversational AI",
      tagline: "AI-powered product discovery & order submission",
      maturity: "Live pilot",
      customerValue: "Buyers self-serve faster, with fewer support calls.",
      overview:
        "A Commerce MCP / Agent Gateway layer on commercetools lets buyers search in plain language, get contract pricing, and place orders through conversation — turning a large B2B catalog into a guided, AI-native ordering experience that plugs into commercetools' agentic stack.",
      benefits: [
        { title: "AI-Driven Search", text: "Describe needs in plain English — no menus or SKU lists." },
        { title: "Conversational Ordering", text: "Search, select and checkout all through dialogue." },
        { title: "Customer-Specific Pricing", text: "Each buyer's contract pricing is applied automatically." },
        { title: "Reduced Service Load", text: "Fewer routine order calls and emails reach reps." },
      ],
      technical: [
        "Commerce MCP / Agent Gateway layer on commercetools APIs",
        "Live pilot running inside Microsoft Teams",
        "Non-catalog add-to-cart via photo upload",
      ],
      challenge: {
        title: "Slow Product Discovery",
        text: "Large B2B catalogs and manual order entry stretch sales cycles and tie up CSR teams.",
      },
      resolves: [
        "Conversational search replaces manual catalog navigation.",
        "Plain-language ordering removes manual entry for buyers and CSRs.",
        "Order status, stock and pricing are answered instantly in chat.",
        "Non-catalog parts are added by photo upload.",
      ],
      idealCustomer:
        "Mid-to-large B2B distributors and manufacturers on commercetools with complex catalogs, contract pricing, and busy CSR teams.",
      signals: [
        "Large or complex B2B catalog",
        "High volume of phone / email orders",
        "Customer-specific contract pricing",
        "Microsoft Teams already used day-to-day",
      ],
      valueCommercetools:
        "An AI-native ordering experience that showcases the Agent Gateway and deepens platform usage in B2B accounts.",
      valueRoyalCyber:
        "Accelerator-led implementation plus managed services across new channels and catalogs.",
    },
    {
      n: "02",
      slug: "platform-migration-modernization",
      name: "Composable Migration Accelerator",
      category: "Digital Experience · Platform Modernization",
      tagline: "SAP / Salesforce → commercetools with AI data modeling",
      maturity: "Production-ready",
      customerValue: "Months of replatforming effort cut to weeks.",
      overview:
        "An automated framework carries enterprises off rigid suites (SAP, Salesforce, Adobe) onto commercetools — using the Smart Data Modeler to propose product models from existing exports and the Import API to load catalogs at scale, with far less manual effort and materially lower migration risk.",
      benefits: [
        { title: "Reduced Migration Risk", text: "AI-proposed data models surface gaps before cutover." },
        { title: "Faster Delivery", text: "Less manual data modeling and catalog rebuild work." },
        { title: "Future-Proof Platform", text: "Lands on a composable, MACH, cloud-native foundation." },
      ],
      technical: [
        "Smart Data Modeler ingests CSV/JSON/XLSX to propose product types",
        "Import API at 100MB / 500,000 rows with partial-import recovery",
        "Commerce Integration Layer wiring to content, search, tax & promotions",
      ],
      challenge: {
        title: "Rigid Legacy Suites",
        text: "Monolithic platforms slow change and make every catalog update costly and risky.",
      },
      resolves: [
        "AI-proposed data models replace slow, manual modeling.",
        "Bulk Import API loads large catalogs with re-import of only failed rows.",
        "Phased cutover moves customers onto composable commerce safely.",
        "Lower risk and effort shorten time-to-value.",
      ],
      idealCustomer:
        "Enterprises on SAP, Salesforce or Adobe Commerce facing rising cost or upgrade deadlines who want composable commerce without a risky big-bang rebuild.",
      signals: [
        "Running a legacy / monolithic commerce suite",
        "Concerned about upgrade cost or end-of-support",
        "Complex catalog and product data to migrate",
        "Wants MACH / composable flexibility",
      ],
      valueCommercetools:
        "Moves suite customers onto commercetools faster, lifting net-new platform adoption.",
      valueRoyalCyber:
        "Defined-scope migration engagements plus follow-on enhancement and optimization.",
    },
    {
      n: "03",
      slug: "power-bi-integration",
      name: "Power BI Commerce Analytics",
      category: "Analytics & Reporting · Composable Commerce",
      tagline: "Real-time dashboards on commercetools data",
      maturity: "In production",
      customerValue: "One trusted set of numbers, faster decisions.",
      overview:
        "commercetools, ERP and inventory data are unified into one connected dataset and surfaced as live Power BI dashboards — replacing scheduled pulls and disconnected exports with real-time visibility for operations and leadership.",
      benefits: [
        { title: "Single Source of Truth", text: "Commerce, ERP and inventory unified into one dataset." },
        { title: "Real-Time Visibility", text: "Revenue, orders and inventory update live." },
        { title: "Executive Scorecards", text: "Leadership views built on commercetools data." },
      ],
      technical: [
        "Power BI connected to commercetools APIs and events",
        "Live client in production today",
        "Replaces scheduled pulls with near-real-time data",
      ],
      challenge: {
        title: "Limited Reporting Visibility",
        text: "Commerce, ERP and inventory data sit in separate tools.",
      },
      resolves: [
        "Unifies commerce, ERP and inventory — no manual exports.",
        "Live dashboards replace scheduled, batch reporting.",
        "Executive scorecards give one trusted set of numbers.",
        "Operations and BI reporting run from one dataset.",
      ],
      idealCustomer:
        "commercetools customers running ERP and inventory in separate systems, where teams rely on manual or scheduled reports.",
      signals: [
        "Commerce, ERP, inventory in separate systems",
        "Manual or scheduled reporting cycles",
        "Leadership asks for 'one number'",
        "Existing or planned Power BI investment",
      ],
      valueCommercetools:
        "Positions commercetools as the operational data hub, keeping analytics on the platform.",
      valueRoyalCyber:
        "Data-integration and dashboard engagements plus recurring scorecard and report work.",
    },
    {
      n: "04",
      slug: "catalog-bulk-import-ai-enrichment",
      name: "Catalog Bulk Import & AI Enrichment",
      category: "Catalog / PIM · AI Tagging",
      tagline: "Automated product onboarding with AI attributes",
      maturity: "Production-ready",
      customerValue: "Catalogs live in hours, not weeks.",
      overview:
        "AI-assisted enrichment brings thousands of products into commercetools in hours — using the Smart Data Modeler and Import API to apply consistent product types, attributes and taxonomy automatically as files are ingested.",
      benefits: [
        { title: "Hours, Not Weeks", text: "Rapid onboarding of large catalogs into commercetools." },
        { title: "Consistent Metadata", text: "Product types, attributes and taxonomy applied automatically." },
        { title: "Improved Searchability", text: "Better attributes power Product Search and discovery." },
      ],
      technical: [
        "Smart Data Modeler proposes product types & attributes",
        "Import API at 100MB / 500,000 rows with partial-import recovery",
        "AI enrichment applied during bulk ingestion",
      ],
      challenge: {
        title: "Catalog Onboarding Gaps",
        text: "Manual product loads and inconsistent attributes make items hard to find.",
      },
      resolves: [
        "Bulk import replaces one-by-one product entry.",
        "AI enrichment applies consistent attributes automatically.",
        "Clean attributes improve Product Search accuracy.",
        "Reduces ongoing manual catalog governance overhead.",
      ],
      idealCustomer:
        "commercetools customers and prospects with large or growing catalogs, multiple contributing teams, and inconsistent product data.",
      signals: [
        "Large or fast-growing product catalog",
        "Multiple teams contributing product data",
        "Inconsistent attributes or taxonomy",
        "Migrating from legacy PIM or spreadsheets",
      ],
      valueCommercetools:
        "Accelerates onboarding and time-to-value, supporting launch and expansion.",
      valueRoyalCyber:
        "Migration and onboarding plus ongoing taxonomy and governance services.",
    },
  ],
};
