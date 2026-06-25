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

export interface AccelVideo {
  title: string;        // caption shown under the player
  src: string;          // embed URL (iframe) or a direct video file URL (.mp4)
  embed?: boolean;      // true → iframe embed (e.g. HeyGen); otherwise rendered as an <video> file
}

export interface Accelerator {
  n: string;            // "01"
  slug: string;         // anchor id, e.g. "commercetools-mcp-server"
  name: string;         // "commercetools Agentic Ordering"
  category: string;     // "B2B Commerce · Conversational AI"
  tagline: string;      // one-line positioning
  maturity: string;     // "Live pilot" | "In production" | "Production-ready"
  videos?: AccelVideo[]; // optional showcase videos rendered, in order, beside the block
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
    "Each accelerator extends commercetools with applied AI, analytics and automation — and answers a real customer pain. Built and proven by the Royal Cyber commercetools Center of Excellence, they shorten time-to-value across customer service, platform migration, digital experience and B2B quoting.",
  generated: "Jun 23, 2026",
  items: [
    {
      n: "01",
      slug: "customer-service-accelerator",
      name: "Customer Service Accelerator (CSA)",
      category: "Customer Service · AI Agents · Multi-Tenant SaaS",
      tagline: "AI-assisted B2C & B2B service desks, live per client in days",
      maturity: "Production-ready",
      videos: [
        { title: "CSA Transformation", src: "https://app.heygen.com/embeds/2633de80446b435ebc7a820ad3dea918", embed: true },
        { title: "CSA Demo - Enhanced 2026", src: "https://storage.googleapis.com/csa-standalone-bucket/CSA-Enhanced-Demo.mp4" },
      ],
      customerValue: "More cases resolved per agent, with each client's desk live in days.",
      overview:
        "A multi-tenant SaaS Customer Service Accelerator that runs AI-assisted B2C and B2B service desks for many client organisations from one platform. New clients are onboarded from a superadmin control plane that registers their commercetools projects and bootstraps their admins, so a fully isolated, branded service desk goes live in days instead of a multi-month build. Each tenant connects to its own commercetools project with encrypted credentials and signs in through its existing identity provider, while a single codebase serves both consumer and business support — turning customer service from a slow, costly build into a fast-to-deploy, AI-driven way to protect revenue and loyalty.",
      benefits: [
        { title: "Onboard clients in days", text: "A superadmin control plane registers each client's commercetools projects and bootstraps admins, so a branded desk launches without a bespoke build." },
        { title: "One platform, every client", text: "A single multi-tenant SaaS codebase runs many isolated tenants — lower cost to operate and one upgrade path for all." },
        { title: "B2C and B2B in one desk", text: "The same platform serves consumer and business support, toggled per commercetools project, so mixed-model clients need only one rollout." },
        { title: "Enterprise-grade trust", text: "Encrypted credentials (AES-256-GCM), per-tenant isolation and instant block / unblock clear security reviews before they stall a deal." },
        { title: "Sign in with what they have", text: "Per-tenant SSO via OIDC / PKCE (Azure AD, Okta, Google, Auth0) and SAML — no new passwords and faster IT approval." },
        { title: "AI governed per client", text: "Per-tenant LLM / AI-agent configuration and role-based access let every client tune automation to its own policies." },
      ],
      technical: [
        "Multi-tenant SaaS: superadmin control plane onboards tenants and registers per-client commercetools projects",
        "Per-tenant commercetools projects with AES-256-GCM-encrypted credentials and a live Test Connection against CT Auth + GraphQL",
        "Per-tenant SSO / federation — OIDC with PKCE (Azure AD, Okta, Google, Auth0), email-based org discovery and SAML",
        "Tenant administration: custom roles with per-page CRUD ACLs, SMTP profiles and per-tenant LLM / AI-agent configuration",
        "Isolation & security: encrypted secrets, per-project Redis token caching and an immediate block / unblock tenant lifecycle",
        "Single codebase serving both B2C and B2B agent workspaces, toggled per registered project",
      ],
      challenge: {
        title: "Service desks that don't scale",
        text: "Supporting each new client, brand or region means a fresh build, another security review and more agents — so customer service stays slow to launch and expensive to run.",
      },
      resolves: [
        "Superadmin onboarding replaces per-client builds — new desks go live in days.",
        "Multi-tenant isolation lets one platform serve many clients safely, cutting cost-to-serve.",
        "Existing-identity SSO and encrypted, isolated data clear security reviews faster.",
        "AI assistance across a unified B2C / B2B desk lifts cases resolved per agent without new headcount.",
      ],
      idealCustomer:
        "Agencies, brands and commercetools customers running B2C and/or B2B support across multiple brands, regions or client organisations who need governed, AI-assisted service desks fast — without a custom build per tenant.",
      signals: [
        "Multiple brands, regions or client orgs to support",
        "Both B2C and B2B service desks",
        "Rising support cost or headcount pressure",
        "Strict security / SSO needs (Azure AD, Okta, SAML)",
        "commercetools already in place per client",
      ],
      valueCommercetools:
        "Makes commercetools the system of record behind every AI service desk — per-tenant projects deepen platform usage and pull customer-service workloads onto commercetools.",
      valueRoyalCyber:
        "A repeatable multi-tenant SaaS offering: per-client onboarding and configuration plus recurring managed-service and AI-tuning revenue across every tenant.",
    },
    {
      n: "02",
      slug: "smartmigrate-migration-accelerator",
      name: "SmartMigrate — Migration Accelerator",
      category: "Platform Migration · Any-to-Any Commerce",
      tagline: "Any commerce platform onto commercetools — guided, mapped and self-correcting",
      maturity: "In progress",
      customerValue: "Replatform in weeks, not months — and fix messy data inline instead of restarting.",
      overview:
        "A guided migration accelerator that moves any commerce platform — Shopify, Magento, SAP Commerce, Salesforce, Adobe, VTEX, a bespoke API or a plain CSV export — onto commercetools through one repeatable five-step flow. SmartMigrate normalizes every source and target into a common commerce model, so the same wizard handles any pairing: connect both stores with encrypted, read-only credentials, auto-detect what to move (products, variants, customers, orders, catalog, content and media), auto-map fields between schemas, then run. Crucially, bad data never stalls a cutover — unmapped fields and failing records surface as fixable errors that teams correct inline or in bulk and re-run on their own, turning a high-risk, months-long replatforming project into a controlled, observable migration measured in weeks.",
      benefits: [
        { title: "Any source, one playbook", text: "Shopify, Magento, SAP, Salesforce, Adobe, VTEX, bespoke APIs or CSV — all normalized into a common model, so every move onto commercetools runs the same way." },
        { title: "Replatform in weeks", text: "A guided connect → scope → map → review → migrate flow with auto-detected resources and schema mapping replaces months of hand-built scripts." },
        { title: "Bad data won't block go-live", text: "Unmapped fields and failing records become fixable errors, not a failed run — the migration keeps going and shows exactly what needs attention." },
        { title: "Fix inline, re-run only those", text: "Correct records one by one or bulk-fix a whole error group, then re-run just the failed rows — never the entire migration." },
        { title: "Migrate with confidence", text: "A live board shows migrated, failed and remaining counts per resource, so business and IT watch progress and risk in real time." },
        { title: "Secure by default", text: "Encrypted credentials and recommended read-only access on the source keep the legacy store safe throughout cutover." },
      ],
      technical: [
        "Platform-agnostic engine: 15+ source/target connectors (Shopify, WooCommerce, Magento, BigCommerce, Salesforce, SAP, Adobe, VTEX, Elastic Path, commercetools, CSV …) normalized to a common commerce model",
        "Guided 5-step pipeline: Platforms → Connect → Resources → Mapping → Review → Migration",
        "Auto-detected resource scoping across products, variants/SKUs, customers, orders, collections, discounts, reviews, media and CMS",
        "Automatic field mapping from the source schema with review / unmapped flags; unresolved fields degrade to fixable record errors rather than blockers",
        "Inline and bulk error remediation with a record inspector and suggested fixes; re-run only the corrected records",
        "Live board / pipeline progress with per-resource migrated / failed / remaining metrics; encrypted, read-only source credentials",
      ],
      challenge: {
        title: "Risky, all-or-nothing replatforming",
        text: "Moving off a legacy platform usually means bespoke scripts, a big-bang cutover and dirty data that fails late — so projects run for months and stall when a few thousand records won't load.",
      },
      resolves: [
        "One normalized engine migrates any source onto commercetools without per-platform rebuilds.",
        "Auto-detected scope and auto-mapping remove most manual data modeling.",
        "Failing records are isolated and fixable inline — no big-bang, no restart.",
        "Live, per-resource visibility turns cutover risk into a tracked, observable process.",
      ],
      idealCustomer:
        "Enterprises and mid-market retailers on Shopify, Magento, SAP, Salesforce, Adobe or a bespoke stack who want to reach commercetools quickly and safely — especially teams burned by stalled, script-heavy migrations or large, messy catalogs.",
      signals: [
        "Replatforming to commercetools from a legacy or SaaS platform",
        "Large or messy catalog / customer / order data to move",
        "A previous migration that stalled or overran",
        "Tight cutover window or phased go-live",
        "Multiple stores or brands to migrate",
      ],
      valueCommercetools:
        "Removes the biggest barrier to adoption — migration risk — so customers on any platform land on commercetools faster, lifting net-new platform wins.",
      valueRoyalCyber:
        "A repeatable, tool-led migration practice: fixed-scope cutover engagements from any source, plus follow-on data, enrichment and managed-services work.",
    },
    {
      n: "03",
      slug: "optimizely-connect",
      name: "Optimizely Connect",
      category: "Digital Experience · Content, Experimentation & Personalization",
      tagline: "commercetools commerce, powered by the Optimizely experience layer",
      maturity: "Planning",
      customerValue: "Merchandise, test and personalize on live commerce data — without custom middleware.",
      overview:
        "A pre-built integration that pairs commercetools — the engine for catalog, pricing, inventory and orders — with the Optimizely experience layer for content, experimentation and personalization. Optimizely Connect streams live product, price, promotion and stock data from commercetools into Optimizely CMS / DXP through ready-made commerce components, so marketers build landing pages, campaigns and merchandised storefronts on real commerce data instead of stale copies. It pipes commercetools order and customer events into the Optimizely Data Platform to power audiences and personalization, and wires conversion events back into Optimizely Web & Feature Experimentation so teams can A/B test PDPs, promotions and checkout against actual revenue. The result: best-of-breed composable commerce and a marketer-friendly experience platform working as one — with no brittle, hand-built middleware to maintain.",
      benefits: [
        { title: "Merchandise on live commerce data", text: "Pre-built commerce components surface real-time commercetools products, prices, promotions and stock inside Optimizely CMS — no duplicated catalogs." },
        { title: "Test what drives revenue", text: "Conversion and order events flow into Optimizely Web & Feature Experimentation, so teams A/B test PDPs, pricing displays and checkout against real sales." },
        { title: "Personalize end to end", text: "commercetools order and behavioral events feed the Optimizely Data Platform, turning purchase history into audiences that personalize content and merchandising." },
        { title: "Best-of-breed, not big suite", text: "Keep commercetools as the commerce backbone and Optimizely as the experience layer — composable freedom without a monolith." },
        { title: "Launch campaigns faster", text: "Marketers assemble commerce pages and promotions in Optimizely with live data, cutting the dependence on developers for every change." },
        { title: "No brittle middleware", text: "A maintained connector with configurable mapping survives platform updates, replacing one-off integrations that break on every release." },
      ],
      technical: [
        "Real-time sync of commercetools products, prices, inventory and promotions into Optimizely CMS / DXP via commercetools Subscriptions & APIs",
        "Pre-built Optimizely commerce content components / catalog blocks (PLP, PDP, cart) rendering live commercetools data",
        "Order & customer event streaming from commercetools to the Optimizely Data Platform (ODP) for audiences & personalization",
        "Experimentation hooks: commerce experiences exposed to Optimizely Web & Feature Experimentation with conversion / order metrics fed back",
        "Configurable field mapping between commercetools product types / attributes and Optimizely content models",
        "Webhook-driven (product published, price changed, order created) with retry & reconciliation; SSO and unified preview",
      ],
      challenge: {
        title: "Commerce and experience pulling apart",
        text: "Composable means best-of-breed — but bolting a content, experimentation and personalization platform onto a headless commerce engine is custom middleware that's slow to build, brittle to maintain and leaves marketers working off stale product data.",
      },
      resolves: [
        "A maintained connector replaces bespoke integration between the two platforms.",
        "Live commercetools data renders natively inside Optimizely content and campaigns.",
        "Order and behavioral events unify in ODP for segmentation and personalization.",
        "Commerce experiences become testable in Optimizely with revenue-based metrics.",
      ],
      idealCustomer:
        "Enterprises invested in Optimizely (DXP / CMS, experimentation or ODP) adopting commercetools as their composable commerce engine — and commercetools customers who want a proven content, experimentation and personalization layer rather than building one.",
      signals: [
        "Running Optimizely CMS / DXP, experimentation or ODP",
        "Adopting or already on commercetools for commerce",
        "Marketing wants to merchandise & run campaigns on live commerce data",
        "Needs A/B testing or personalization on commerce experiences",
        "Duplicated product data or disconnected content & commerce",
      ],
      valueCommercetools:
        "Positions commercetools as the commerce backbone behind Optimizely-powered experiences — opening the large Optimizely DXP install base and reinforcing composable best-of-breed.",
      valueRoyalCyber:
        "A pre-built connector plus integration engagements across two platforms Royal Cyber knows deeply — with recurring content-ops, experimentation enablement and managed-services revenue.",
    },
    {
      n: "04",
      slug: "ai-native-cpq-accelerator",
      name: "AI-Native CPQ Accelerator",
      category: "B2B Commerce · Configure-Price-Quote · AI Guided Selling",
      tagline: "AI-native CPQ on commercetools' B2B quote primitives — an intelligence layer, not a standalone rebuild",
      maturity: "Proposed",
      customerValue: "Turn RFQs into accurate, approved quotes faster — ~28% shorter sales cycles and ~49% more quotes per rep.",
      overview:
        "An AI-native, commerce-native CPQ (Configure, Price, Quote) accelerator built on commercetools' existing B2B quote primitives — quotes, quote requests, staged quotes, quote states, business units and customer-specific pricing — adding the intelligence and orchestration layer that commercetools' own integration guidance leaves to partners. It does the three jobs that are newly possible and not commoditized: RFQ-to-quote ingestion that turns an unstructured email, spreadsheet or PDF into a structured, configured, priced quote; conversational guided selling that resolves natural language into a valid configuration with real-time compatibility validation; and a deal-desk copilot that recommends the price that wins while protecting margin — all with guardrails, approval routing and a full audit trail. It is deliberately scoped to medium-complexity configuration (bundles, tiered options, compatibility rules, customer-specific pricing) and integrates a specialist tool for deep nested BOM rather than rebuilding one — the scoping decision that keeps it deliverable, differentiated, and aimed squarely at the live wave of enterprises migrating off legacy CPQ.",
      benefits: [
        { title: "RFQ-to-quote in minutes", text: "AI turns an unstructured request — email, spreadsheet or PDF — into a structured, configured, priced commercetools quote, riding the rails of the B2B Intake Agent direction." },
        { title: "Conversational guided selling", text: "Natural-language configuration resolves to a valid product or bundle with real-time compatibility validation, so reps quote correctly without spreadsheets." },
        { title: "Deal-desk copilot", text: "AI discount and margin guidance recommends the price that wins while protecting margin — with full guardrails, approval routing and audit trail." },
        { title: "Commerce-native, not bolted on", text: "Pricing and configuration logic stay unified on commercetools quote primitives, keeping the AI ceiling high instead of fragmenting logic across systems." },
        { title: "Faster cycles, more quotes", text: "Directly attributable impact — roughly 28% shorter sales cycles and ~49% more quotes per rep, plus deals that used to die in email chains." },
        { title: "Proof of impact built in", text: "Quote-cycle time, quotes per rep, margin and win-rate instrumentation ship in v1 as a first-class feature, so ROI is measurable from day one." },
      ],
      technical: [
        "Built on commercetools native B2B: Quotes, Quote Requests, Staged Quotes, quote states, Business Units and customer-specific pricing",
        "RFQ-to-quote ingestion — unstructured email / spreadsheet / PDF parsed into a structured, configured, priced quote or cart",
        "Conversational guided selling with real-time compatibility-rule validation for medium-complexity bundles and tiered options",
        "Deal-desk copilot — AI discount / margin guidance with guardrails, approval routing on commercetools quote states and a full audit trail",
        "Quote document generation, customer-group / tiered / contract pricing, and a clean ERP / CRM handoff (pricing sync + order handoff)",
        "Proof-of-impact instrumentation: quote-cycle time, quotes per rep, margin and win-rate metrics as a first-class capability",
      ],
      challenge: {
        title: "Legacy CPQ is forcing a forward-path decision",
        text: "Salesforce CPQ went End-of-Sale in March 2025 and Conga absorbed PROS's B2B business in February 2026, so thousands of enterprises must re-choose CPQ now — while fragmented, standalone configuration and pricing logic caps how much AI they can layer on later.",
      },
      resolves: [
        "An AI-native orchestration layer on commercetools quote primitives replaces standalone CPQ without a heavy rebuild.",
        "Unified, commerce-native pricing and configuration logic keeps the door open to agentic automation later.",
        "A hard scope boundary at medium complexity — with specialist tools for deep BOM — keeps delivery predictable.",
        "Governance-first design (guardrails, approval workflows, audit trail) makes a CFO comfortable letting AI touch prices.",
      ],
      idealCustomer:
        "B2B enterprises on or moving to commercetools that quote configured or tiered products — especially the large installed base forced off legacy CPQ (Salesforce CPQ End-of-Sale, the Conga / PROS consolidation) and needing a commerce-native, AI-ready forward path rather than another standalone tool.",
      signals: [
        "On legacy CPQ (Salesforce, Oracle, SAP, Conga) facing a forced migration",
        "B2B quoting of bundles, tiered options or customer-specific pricing",
        "Quotes still run on spreadsheets and pricing email chains",
        "Margin leakage or slow deal-desk approvals",
        "Already on commercetools B2B (quotes, business units) or adopting it",
      ],
      valueCommercetools:
        "Fills the orchestration and intelligence layer that commercetools' own B2B guidance hands to partners — deepening use of quote primitives and the B2B Intake Agent direction, and converting legacy-CPQ migrations into net-new commercetools B2B wins.",
      valueRoyalCyber:
        "A higher-margin, repeatable B2B accelerator that shortens delivery, lifts win rates in commercetools pursuits and opens immediate pipeline from the legacy-CPQ migration wave — a strong certification and co-sell candidate that complements Metafy (AEO/GEO) in the COE.",
    },
  ],
};
