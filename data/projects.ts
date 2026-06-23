// ---------------------------------------------------------------------------
// ROYAL CYBER — COMMERCETOOLS PROJECT TEAMS
// ---------------------------------------------------------------------------
// Project roster: each project, its team members and their designations.
// `status` separates currently-running projects from past/completed ones.
// Project Manager, Account Manager and Delivery Manager are derived from each
// member's designation on the /projects page, so they drive the interactive
// "group by" views automatically. Keep the shape stable.
// ---------------------------------------------------------------------------

export interface TeamMember {
  name: string;
  designation: string;
}

export type ProjectStatus = "current" | "past";

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  members: TeamMember[];
  // Optional fields used for past / industry case-study projects, where the
  // story is the implementation and outcome rather than a live team roster.
  industry?: string;
  summary?: string;
  highlights?: string[];
}

export interface ProjectsData {
  org: string;
  generated: string;
  projects: Project[];
}

export const projectsData: ProjectsData = {
  org: "Royal Cyber",
  generated: "Jun 23, 2026",
  projects: [
    {
      id: "mars",
      name: "Mars",
      status: "current",
      members: [
        { name: "Aakash Gupta", designation: "Technical Lead" },
        { name: "Akshay Khobragade", designation: "Solution Architect" },
        { name: "Anurag Nair", designation: "Technical Lead" },
        { name: "Chetan Bhangale", designation: "Technical Lead" },
        { name: "Muhammad Tahir Gulzar", designation: "Software Engineer" },
        { name: "Pankaj Malviya", designation: "Senior Software Engineer" },
      ],
    },
    {
      id: "rich-usa",
      name: "RichUSA",
      status: "current",
      members: [
        { name: "Bhawesh Kurmi", designation: "Technical Lead" },
        { name: "Nitin Rachabathuni", designation: "Senior Software Engineer" },
        { name: "Saad Asad Ali", designation: "Software Engineer" },
        { name: "Sudhanshu Singh", designation: "Software Engineer" },
      ],
    },
    {
      id: "bench",
      name: "bench",
      status: "current",
      members: [
        { name: "Mahesh Ramachandran", designation: "Senior Software Engineer" },
        { name: "Shahmir Khan", designation: "Software Engineer" },
        { name: "Shivam Soni", designation: "Software Engineer" },
        { name: "Stephen Albert", designation: "Practice Head" },
      ],
    },
    // -----------------------------------------------------------------------
    // Past projects — industry-specific composable commerce implementations
    // delivered on commercetools (Royal Cyber commercetools case studies).
    // -----------------------------------------------------------------------
    {
      id: "breville",
      name: "Breville",
      status: "past",
      industry: "Retail · Consumer Appliances",
      summary:
        "Re-platformed Breville's B2C commerce engine from Elastic Path to commercetools, consolidating multiple regional storefronts onto one composable, cloud-native foundation.",
      highlights: [
        "Event-driven, cloud-native microservices architecture",
        "Multiple regional sites unified on commercetools",
        "Payments, tax, shipping and sales-channel setup",
      ],
      members: [],
    },
    {
      id: "jsw-one",
      name: "JSW One",
      status: "past",
      industry: "Manufacturing & Materials",
      summary:
        "Built an omnichannel, tech-led 'one-stop online shop' for JSW on commercetools, on a scalable cloud foundation paired with a Digital Experience Platform.",
      highlights: [
        "Advanced commerce APIs, event-driven & cloud-native",
        "Omnichannel one-stop shop across product lines",
        "commercetools paired with a DXP for content & experience",
      ],
      members: [],
    },
    {
      id: "wildfork-foods",
      name: "Wildfork Foods",
      status: "past",
      industry: "Food & Beverage",
      summary:
        "Designed a fully integrated Customer Service Accelerator (CSA) inside commercetools for this specialty meat & seafood retailer — one interface for customers, orders, refunds and replacements.",
      highlights: [
        "Unified customer-service interface within commercetools",
        "Centralized customer data, orders, refunds & replacements",
        "Foundation for the Royal Cyber CSA accelerator",
      ],
      members: [],
    },
  ],
};
