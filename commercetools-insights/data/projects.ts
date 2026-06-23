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
}

export interface ProjectsData {
  org: string;
  generated: string;
  projects: Project[];
}

export const projectsData: ProjectsData = {
  org: "Royal Cyber",
  generated: "Jun 22, 2026",
  projects: [
    {
      id: "je-dunn-construction",
      name: "JE Dunn Construction",
      status: "current",
      members: [
        { name: "Vaibhav Warhadpande", designation: "Practice Head" },
        { name: "Aniket Dabholkar", designation: "Technical Lead" },
        { name: "Akash Sharma", designation: "Software Engineer" },
        { name: "Asvini Rajan S S", designation: "Trainee" },
        { name: "Kiruthika Rajendran", designation: "Project Manager" },
        { name: "Krishna Kumar", designation: "Delivery Manager" },
        { name: "Sourav Roy", designation: "Account Manager" },
      ],
    },
    {
      id: "white-cap-canada-construction",
      name: "White Cap Canada Construction",
      status: "current",
      members: [
        { name: "Swapnil Undage", designation: "Software Engineer" },
        { name: "Ritesh Hadawale", designation: "Senior Software Engineer" },
        { name: "Monika Pal", designation: "Project Manager" },
        { name: "Krishna Kumar", designation: "Delivery Manager" },
        { name: "Sourav Roy", designation: "Account Manager" },
      ],
    },
    {
      id: "white-cap-usa-construction",
      name: "White Cap USA Construction",
      status: "current",
      members: [
        { name: "Saurabh Mayekar", designation: "Solution Architect" },
        { name: "Swapnil Varade", designation: "Senior Software Engineer" },
        { name: "Monika Pal", designation: "Project Manager" },
        { name: "Krishna Kumar", designation: "Delivery Manager" },
        { name: "Sourav Roy", designation: "Account Manager" },
      ],
    },
    {
      id: "rent-a-center",
      name: "Rent A Center",
      status: "current",
      members: [
        { name: "Savita Sapra", designation: "Senior Technical Lead" },
        { name: "Megha Rai", designation: "Senior Software Engineer" },
        { name: "Shipra S", designation: "Technical Lead" },
        { name: "Anshul Kasana", designation: "Senior Software Engineer" },
        { name: "Dhriti Kumawat", designation: "Senior Software Engineer" },
        { name: "Kanchan Rautela", designation: "Project Manager" },
        { name: "Sourav Roy", designation: "Account Manager" },
      ],
    },
  ],
};
