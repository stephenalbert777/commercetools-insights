import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import ProjectsExplorer from "@/components/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Project Teams — Royal Cyber commercetools",
  description:
    "Royal Cyber commercetools project teams — projects, team members and designations, with interactive views by project, project manager, account manager and delivery manager.",
};

export default function ProjectsPage() {
  const current = projectsData.projects.filter((p) => p.status === "current");
  const people = new Set(
    current.flatMap((p) => p.members.map((m) => m.name)),
  ).size;

  return (
    <div className="bg-gradient-to-b from-[#f1eefc] to-white">
      <div className="mx-auto max-w-5xl px-6 py-10 text-opti-ink">
        <header className="mb-7 border-b border-opti-line pb-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-rc-accent">
            {projectsData.org} · commercetools Practice
          </p>
          <h1 className="mt-2 text-[28px] font-extrabold tracking-tight">
            Project Teams
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-opti-muted">
            Live view of Royal Cyber&apos;s commercetools engagements — every
            project, who is on the team and their designation. Switch the{" "}
            <b className="text-opti-ink">Group by</b> view to see team members
            by project, project manager, account manager or delivery manager,
            and click any bar to filter. Currently showing {current.length}{" "}
            running projects across {people} people · Updated{" "}
            {projectsData.generated}.
          </p>
        </header>

        <ProjectsExplorer data={projectsData} />
      </div>
    </div>
  );
}
