import type { Metadata } from "next";
import { weeklyPlan } from "@/data/weeklyPlan";
import WeeklyPlanTabs from "@/components/WeeklyPlanTabs";

export const metadata: Metadata = {
  title: "commercetools Weekly Plan — Royal Cyber",
};

export default function WeeklyPlanPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold text-rc-blue">
          {weeklyPlan.org} — commercetools Weekly Plan
        </h1>
        <p className="mt-1 text-sm text-[#5a6b82]">
          Generated: {weeklyPlan.generated} · {weeklyPlan.weeks.length} week(s)
        </p>
      </div>
      <WeeklyPlanTabs plan={weeklyPlan} />
    </div>
  );
}
