"use client";

import { useEffect, useState } from "react";
import type { WeeklyPlan, Raci } from "@/data/weeklyPlan";
import { StatusBadge, TypeBadge } from "@/components/badges";

const RACI_CLASS: Record<Exclude<Raci, "">, string> = {
  R: "bg-[#d3eef2] text-[#0b6e7d]",
  A: "bg-[#d9f2e3] text-[#13794a]",
  C: "bg-[#fff3cd] text-[#8a6d00]",
  I: "bg-[#eceff3] text-[#5a6b82]",
};

const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

// Parse the start date out of a week subtitle such as
// "Jun 22 – Jun 26, 2026  |  ..." -> local timestamp for Jun 22, 2026.
function weekStart(subtitle: string): number | null {
  const m = subtitle.match(/([A-Z][a-z]{2})\s+(\d{1,2})\b.*?(\d{4})/);
  if (!m) return null;
  const month = MONTHS[m[1]];
  const day = Number(m[2]);
  const year = Number(m[3]);
  if (month === undefined || !day || !year) return null;
  return new Date(year, month, day).getTime();
}

// Choose the week that matches "today": the latest week whose start date is on
// or before now (so Jun 22 lands on Week 4). Falls back to the first week when
// today is before the plan starts, and naturally lands on the last week when
// today is past the plan. Survives data regeneration since it reads subtitles.
function currentWeekId(weeks: WeeklyPlan["weeks"], now: number): string {
  let chosen = weeks[0]?.id ?? "";
  for (const w of weeks) {
    const start = weekStart(w.subtitle);
    if (start !== null && start <= now) chosen = w.id;
  }
  return chosen;
}

export default function WeeklyPlanTabs({ plan }: { plan: WeeklyPlan }) {
  // Start deterministic (first week) so server-rendered and first client render
  // match; then snap to the current week of the month once mounted in the browser.
  const [active, setActive] = useState(plan.weeks[0]?.id ?? "");

  useEffect(() => {
    setActive(currentWeekId(plan.weeks, Date.now()));
  }, [plan.weeks]);

  const isRaci = active === "raci";
  const week = plan.weeks.find((w) => w.id === active) ?? plan.weeks[0];

  const completed = week.tasks.filter((t) => t.status === "done").length;
  const open = week.tasks.length - completed;

  return (
    <div>
      <div className="sticky top-0 z-10 -mx-6 flex flex-wrap gap-1 border-b-2 border-[#dde3ec] bg-white px-6 pt-3">
        {plan.weeks.map((w) => (
          <button
            key={w.id}
            onClick={() => setActive(w.id)}
            className={`rounded-t-lg border border-b-0 px-5 py-2 text-sm font-semibold transition ${
              w.id === active
                ? "border-rc-blue bg-rc-blue text-white"
                : "border-[#d8d1f2] bg-[#efecfb] text-[#4a4570] hover:bg-[#e6e1fa]"
            }`}
          >
            {w.label}
          </button>
        ))}
        <button
          onClick={() => setActive("raci")}
          className={`rounded-t-lg border border-b-0 px-5 py-2 text-sm font-semibold transition ${
            isRaci
              ? "border-[#6a2fb8] bg-[#6a2fb8] text-white"
              : "border-[#6a2fb8] bg-[#f3ecfd] text-[#6a2fb8] hover:bg-[#ece0fb]"
          }`}
        >
          RACI Matrix
        </button>
      </div>

      {isRaci ? (
        <RaciPane plan={plan} />
      ) : (
        <div className="pt-6">
          <h2 className="text-lg font-bold text-rc-blue sm:text-xl">
            {week.title}
          </h2>
          <p className="mt-1 text-sm text-[#5a6b82]">{week.subtitle}</p>
          <div className="mt-2 flex flex-wrap gap-4 text-[13px] text-[#41526b]">
            <span>
              <b>{week.tasks.length}</b> tasks
            </span>
            <span>
              <b>{completed}</b> completed
            </span>
            <span>
              <b>{open}</b> open
            </span>
          </div>

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {week.focus.map((f, i) => (
              <div
                key={i}
                className="rounded-md border border-[#dde3ec] border-l-4 border-l-rc-accent bg-white p-3"
              >
                <div className="text-xs font-bold uppercase text-rc-blue">
                  {f.team}
                </div>
                <div className="mt-0.5 text-[13px] text-[#41526b]">{f.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 overflow-x-auto rounded-lg border border-[#dde3ec]">
            <table className="w-full border-collapse bg-white text-[13px]">
              <thead>
                <tr className="bg-rc-blue text-left text-xs text-white">
                  <th className="px-2.5 py-2.5 font-semibold">Day</th>
                  <th className="px-2.5 py-2.5 font-semibold">Date</th>
                  <th className="px-2.5 py-2.5 font-semibold">Task / Activity</th>
                  <th className="px-2.5 py-2.5 font-semibold">Team</th>
                  <th className="px-2.5 py-2.5 font-semibold">Type</th>
                  <th className="px-2.5 py-2.5 font-semibold">KPI / Goal</th>
                  <th className="px-2.5 py-2.5 font-semibold">Owner</th>
                  <th className="px-2.5 py-2.5 font-semibold">Department</th>
                  <th className="px-2.5 py-2.5 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {week.tasks.map((t, i) => (
                  <tr key={i} className="odd:bg-white even:bg-[#f8fafd]">
                    <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                      {t.day}
                    </td>
                    <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top whitespace-nowrap">
                      {t.date}
                    </td>
                    <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                      {t.activity}
                    </td>
                    <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                      {t.team}
                    </td>
                    <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                      <TypeBadge type={t.type} />
                    </td>
                    <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                      {t.kpi}
                    </td>
                    <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top whitespace-nowrap">
                      {t.owner}
                    </td>
                    <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top whitespace-nowrap">
                      {t.department}
                    </td>
                    <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                      <StatusBadge status={t.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function RaciPane({ plan }: { plan: WeeklyPlan }) {
  const { roles, rows } = plan.raci;
  return (
    <div className="pt-6">
      <h2 className="text-lg font-bold text-rc-blue sm:text-xl">
        RACI Matrix — Roles &amp; Responsibilities
      </h2>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-[13px] text-[#41526b]">
        <span className="rounded-full bg-[#d3eef2] px-2 py-0.5 text-[11px] font-bold text-[#0b6e7d]">
          R
        </span>
        Responsible
        <span className="rounded-full bg-[#d9f2e3] px-2 py-0.5 text-[11px] font-bold text-[#13794a]">
          A
        </span>
        Accountable
        <span className="rounded-full bg-[#fff3cd] px-2 py-0.5 text-[11px] font-bold text-[#8a6d00]">
          C
        </span>
        Consulted
        <span className="rounded-full bg-[#eceff3] px-2 py-0.5 text-[11px] font-bold text-[#5a6b82]">
          I
        </span>
        Informed
      </div>

      <div className="mt-4 overflow-x-auto rounded-lg border border-[#dde3ec]">
        <table className="w-full border-collapse bg-white text-[13px]">
          <thead>
            <tr className="bg-rc-blue text-left text-xs text-white">
              <th className="px-2.5 py-2.5 font-semibold">
                Deliverable / Activity
              </th>
              {roles.map((r) => (
                <th key={r} className="px-2 py-2.5 text-center font-semibold">
                  {r}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="odd:bg-white even:bg-[#f8fafd]">
                <td className="border-t border-[#dde3ec] px-2.5 py-2 font-semibold text-[#1c2733]">
                  {row.deliverable}
                </td>
                {row.values.map((v, j) => (
                  <td
                    key={j}
                    className={`border-t border-[#dde3ec] px-2 py-2 text-center font-bold ${
                      v ? RACI_CLASS[v] : ""
                    }`}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
