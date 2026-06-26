"use client";

import { useEffect, useMemo, useState } from "react";
import type { QuarterlyPlan } from "@/data/quarterlyPlan";
import { StatusBadge } from "@/components/badges";

const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

// Parse the first month + year out of a quarter subtitle such as
// "Jul – Sep 2026  |  ..." -> local timestamp for the 1st of that month.
function quarterStart(subtitle: string): number | null {
  const m = subtitle.match(/([A-Z][a-z]{2}).*?(\d{4})/);
  if (!m) return null;
  const month = MONTHS[m[1]];
  const year = Number(m[2]);
  if (month === undefined || !year) return null;
  return new Date(year, month, 1).getTime();
}

// Choose the quarter that matches "today": the latest quarter whose start month
// is on or before now. Falls back to the first quarter before the plan starts
// and lands on the last quarter once today is past it. Derived at view time, so
// it survives data regeneration.
function currentQuarterId(quarters: QuarterlyPlan["quarters"], now: number): string {
  let chosen = quarters[0]?.id ?? "";
  for (const q of quarters) {
    const start = quarterStart(q.subtitle);
    if (start !== null && start <= now) chosen = q.id;
  }
  return chosen;
}

export default function QuarterlyPlanTabs({ plan }: { plan: QuarterlyPlan }) {
  // Start deterministic (first quarter) so server and first client render match;
  // then snap to the current quarter once mounted in the browser.
  const [active, setActive] = useState(plan.quarters[0]?.id ?? "");

  useEffect(() => {
    setActive(currentQuarterId(plan.quarters, Date.now()));
  }, [plan.quarters]);

  const quarter =
    plan.quarters.find((q) => q.id === active) ?? plan.quarters[0];

  const completed = quarter.initiatives.filter((t) => t.status === "done").length;
  const open = quarter.initiatives.length - completed;

  // Stable sort by calendar month so the table reads top-to-bottom in time.
  const rows = useMemo(
    () =>
      [...quarter.initiatives].sort(
        (a, b) => (MONTHS[a.month] ?? 99) - (MONTHS[b.month] ?? 99),
      ),
    [quarter.initiatives],
  );

  return (
    <div>
      <div className="sticky top-0 z-10 -mx-6 flex flex-wrap gap-1 border-b-2 border-[#dde3ec] bg-white px-6 pt-3">
        {plan.quarters.map((q) => (
          <button
            key={q.id}
            onClick={() => setActive(q.id)}
            className={`rounded-t-lg border border-b-0 px-5 py-2 text-sm font-semibold transition ${
              q.id === active
                ? "border-rc-blue bg-rc-blue text-white"
                : "border-[#d8d1f2] bg-[#efecfb] text-[#4a4570] hover:bg-[#e6e1fa]"
            }`}
          >
            {q.label}
          </button>
        ))}
      </div>

      <div className="pt-6">
        <h2 className="text-lg font-bold text-rc-blue sm:text-xl">
          {quarter.title}
        </h2>
        <p className="mt-1 text-sm text-[#5a6b82]">{quarter.subtitle}</p>
        <div className="mt-2 flex flex-wrap gap-4 text-[13px] text-[#41526b]">
          <span>
            <b>{quarter.initiatives.length}</b> initiatives
          </span>
          <span>
            <b>{completed}</b> done
          </span>
          <span>
            <b>{open}</b> open
          </span>
        </div>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {quarter.focus.map((f, i) => (
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
                <th className="px-2.5 py-2.5 font-semibold">Month</th>
                <th className="px-2.5 py-2.5 font-semibold">Initiative</th>
                <th className="px-2.5 py-2.5 font-semibold">Track</th>
                <th className="px-2.5 py-2.5 font-semibold">Owner</th>
                <th className="px-2.5 py-2.5 font-semibold">Department</th>
                <th className="px-2.5 py-2.5 font-semibold">Goal</th>
                <th className="px-2.5 py-2.5 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((t, i) => (
                <tr key={i} className="odd:bg-white even:bg-[#f8fafd]">
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top font-semibold text-rc-blue whitespace-nowrap">
                    {t.month}
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                    {t.initiative}
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                    <span className="inline-block whitespace-nowrap rounded-full bg-opti-chip px-2.5 py-0.5 text-[11px] font-semibold text-opti-teal">
                      {t.track}
                    </span>
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top whitespace-nowrap">
                    {t.owner}
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top whitespace-nowrap">
                    {t.department}
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                    {t.goal}
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
    </div>
  );
}
