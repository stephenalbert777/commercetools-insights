"use client";

import { useMemo, useState } from "react";
import type { ProjectsData, Project } from "@/data/projects";

type GroupBy = "project" | "pm" | "am" | "dm";

const GROUP_OPTIONS: { key: GroupBy; label: string; metric: string }[] = [
  { key: "project", label: "By Project", metric: "project" },
  { key: "pm", label: "By Project Manager", metric: "project manager" },
  { key: "am", label: "By Account Manager", metric: "account manager" },
  { key: "dm", label: "By Delivery Manager", metric: "delivery manager" },
];

const LEAD_ROLES: Record<Exclude<GroupBy, "project">, string> = {
  pm: "Project Manager",
  am: "Account Manager",
  dm: "Delivery Manager",
};

function holder(p: Project, designation: string): string {
  const m = p.members.find(
    (x) => x.designation.toLowerCase() === designation.toLowerCase(),
  );
  return m ? m.name : "Unassigned";
}

function groupKey(p: Project, by: GroupBy): string {
  if (by === "project") return p.name;
  return holder(p, LEAD_ROLES[by]);
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

interface Group {
  key: string;
  projects: Project[];
  members: number;
}

export default function ProjectsExplorer({ data }: { data: ProjectsData }) {
  const [groupBy, setGroupBy] = useState<GroupBy>("project");
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState<"current" | "past">("current");

  const projects = useMemo(
    () => data.projects.filter((p) => p.status === status),
    [data.projects, status],
  );

  const groups = useMemo<Group[]>(() => {
    const map = new Map<string, Group>();
    for (const p of projects) {
      const key = groupKey(p, groupBy);
      const g = map.get(key) ?? { key, projects: [], members: 0 };
      g.projects.push(p);
      g.members += p.members.length;
      map.set(key, g);
    }
    return Array.from(map.values()).sort((a, b) => b.members - a.members);
  }, [projects, groupBy]);

  const maxMembers = groups.reduce((m, g) => Math.max(m, g.members), 0) || 1;

  const activeSelected =
    selected && groups.some((g) => g.key === selected) ? selected : null;

  const visibleProjects = activeSelected
    ? projects.filter((p) => groupKey(p, groupBy) === activeSelected)
    : projects;

  const uniquePeople = new Set(
    projects.flatMap((p) => p.members.map((m) => m.name)),
  ).size;
  const totalSeats = projects.reduce((n, p) => n + p.members.length, 0);

  const groupNoun = GROUP_OPTIONS.find((g) => g.key === groupBy)!.metric;

  function changeGroup(g: GroupBy) {
    setGroupBy(g);
    setSelected(null);
  }
  function changeStatus(s: "current" | "past") {
    setStatus(s);
    setSelected(null);
  }
  function toggleBar(key: string) {
    setSelected((cur) => (cur === key ? null : key));
  }

  return (
    <div>
      {/* Status toggle */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[12px] font-semibold uppercase tracking-wide text-opti-teal">
          Status
        </span>
        <div className="inline-flex rounded-full border border-opti-line bg-white p-1">
          {(["current", "past"] as const).map((s) => (
            <button
              key={s}
              onClick={() => changeStatus(s)}
              className={`rounded-full px-4 py-1.5 text-[13px] font-semibold transition ${
                status === s
                  ? "bg-rc-blue text-white shadow-sm"
                  : "text-opti-muted hover:text-rc-blue"
              }`}
            >
              {s === "current" ? "Current projects" : "Past projects"}
            </button>
          ))}
        </div>
      </div>

      {status === "past" ? (
        <div className="mt-6">
          <p className="max-w-2xl text-[13.5px] text-opti-muted">
            Industry-specific composable commerce implementations delivered on
            commercetools by the Royal Cyber Center of Excellence.
          </p>

          {projects.length === 0 ? (
            <div className="mt-5 rounded-2xl border border-dashed border-opti-line bg-opti-navy p-10 text-center text-[13.5px] text-opti-muted">
              No past projects recorded yet.
            </div>
          ) : (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-opti-line bg-white shadow-sm"
                >
                  <div className="border-b border-opti-line bg-gradient-to-r from-[#f1eefc] to-white px-5 py-4">
                    {p.industry && (
                      <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-opti-teal">
                        {p.industry}
                      </span>
                    )}
                    <h3 className="mt-1 text-[17px] font-bold text-opti-ink">
                      {p.name}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 px-5 py-4">
                    {p.summary && (
                      <p className="text-[13.5px] leading-relaxed text-opti-muted">
                        {p.summary}
                      </p>
                    )}
                    {p.highlights && p.highlights.length > 0 && (
                      <ul className="mt-auto space-y-1.5">
                        {p.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-[12.5px] text-opti-ink"
                          >
                            <span className="text-opti-accent">›</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 rounded-2xl border border-opti-line bg-opti-navy p-5">
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-opti-teal">
              Industries served
            </div>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {["Retail", "Fashion", "Food", "Manufacturing", "Healthcare"].map(
                (ind) => (
                  <span
                    key={ind}
                    className="rounded-full border border-opti-line bg-white px-3 py-1 text-[12.5px] font-semibold text-opti-ink"
                  >
                    {ind}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Group-by controls */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-[12px] font-semibold uppercase tracking-wide text-opti-teal">
              Group by
            </span>
            {GROUP_OPTIONS.map((o) => (
              <button
                key={o.key}
                onClick={() => changeGroup(o.key)}
                className={`rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition ${
                  groupBy === o.key
                    ? "border-opti-accent bg-opti-accent text-white"
                    : "border-opti-line bg-white text-opti-muted hover:border-opti-accent hover:text-opti-accent"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          {/* Summary stats */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { n: projects.length, l: "Projects" },
              { n: uniquePeople, l: "People" },
              { n: totalSeats, l: "Team seats" },
              { n: groups.length, l: `${groupNoun}s` },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl border border-opti-line bg-white p-4"
              >
                <div className="text-2xl font-extrabold text-rc-blue">
                  {s.n}
                </div>
                <div className="mt-0.5 text-[12px] font-semibold uppercase tracking-wide text-opti-muted">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="mt-5 rounded-2xl border border-opti-line bg-white p-5 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-[16px] font-bold text-opti-ink">
                Team members by {groupNoun}
              </h2>
              <span className="text-[12px] text-opti-muted">
                Click a bar to filter the projects below
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {groups.map((g) => {
                const pct = Math.max(6, Math.round((g.members / maxMembers) * 100));
                const isSel = activeSelected === g.key;
                return (
                  <button
                    key={g.key}
                    onClick={() => toggleBar(g.key)}
                    aria-pressed={isSel}
                    className={`block w-full rounded-lg p-1.5 text-left transition ${
                      isSel ? "bg-opti-chip ring-1 ring-opti-accent" : "hover:bg-opti-chip/60"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 text-[13px]">
                      <span className="font-semibold text-opti-ink">
                        {g.key}
                      </span>
                      <span className="whitespace-nowrap text-opti-muted">
                        <b className="text-opti-ink">{g.members}</b> members ·{" "}
                        {g.projects.length} project
                        {g.projects.length === 1 ? "" : "s"}
                      </span>
                    </div>
                    <div className="mt-1.5 h-3.5 w-full overflow-hidden rounded-full bg-opti-chip">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#5b3df5] to-[#9b8bff]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active filter banner */}
          {activeSelected && (
            <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-opti-line bg-opti-chip px-4 py-2.5 text-[13px]">
              <span className="text-opti-muted">
                Filtered to {groupNoun}:{" "}
                <b className="text-opti-ink">{activeSelected}</b>
              </span>
              <button
                onClick={() => setSelected(null)}
                className="rounded-full border border-opti-line bg-white px-3 py-1 text-[12px] font-semibold text-opti-accent hover:border-opti-accent"
              >
                Clear filter ✕
              </button>
            </div>
          )}

          {/* Project listing */}
          <div className="mt-5 space-y-4">
            {visibleProjects.map((p) => {
              const pm = holder(p, "Project Manager");
              const dm = holder(p, "Delivery Manager");
              const am = holder(p, "Account Manager");
              return (
                <div
                  key={p.id}
                  className="overflow-hidden rounded-2xl border border-opti-line bg-white shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-opti-line bg-gradient-to-r from-[#f1eefc] to-white px-5 py-4">
                    <div>
                      <h3 className="text-[17px] font-bold text-opti-ink">
                        {p.name}
                      </h3>
                      <div className="mt-1.5 flex flex-wrap gap-2 text-[12px]">
                        <span className="rounded-full bg-opti-chip px-2.5 py-0.5 text-opti-muted">
                          PM: <b className="text-opti-ink">{pm}</b>
                        </span>
                        <span className="rounded-full bg-opti-chip px-2.5 py-0.5 text-opti-muted">
                          Delivery: <b className="text-opti-ink">{dm}</b>
                        </span>
                        <span className="rounded-full bg-opti-chip px-2.5 py-0.5 text-opti-muted">
                          Account: <b className="text-opti-ink">{am}</b>
                        </span>
                      </div>
                    </div>
                    <span className="whitespace-nowrap rounded-full border border-opti-line bg-white px-3 py-1 text-[12px] font-semibold text-opti-teal">
                      {p.members.length} members
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-[13.5px]">
                      <thead>
                        <tr className="bg-rc-blue text-left text-xs text-white">
                          <th className="px-4 py-2.5 font-semibold">#</th>
                          <th className="px-4 py-2.5 font-semibold">
                            Team Member
                          </th>
                          <th className="px-4 py-2.5 font-semibold">
                            Designation
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {p.members.map((m, i) => (
                          <tr
                            key={i}
                            className="odd:bg-white even:bg-[#f5f3fe]"
                          >
                            <td className="border-t border-opti-line px-4 py-2.5 text-opti-muted">
                              {i + 1}
                            </td>
                            <td className="border-t border-opti-line px-4 py-2.5">
                              <span className="flex items-center gap-2.5">
                                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-opti-accent text-[10.5px] font-bold text-white">
                                  {initials(m.name)}
                                </span>
                                <span className="font-medium text-opti-ink">
                                  {m.name}
                                </span>
                              </span>
                            </td>
                            <td className="border-t border-opti-line px-4 py-2.5 text-opti-muted">
                              {m.designation}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
