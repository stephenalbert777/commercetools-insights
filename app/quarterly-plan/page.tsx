import type { Metadata } from "next";
import { quarterlyPlan } from "@/data/quarterlyPlan";
import QuarterlyPlanTabs from "@/components/QuarterlyPlanTabs";

export const metadata: Metadata = {
  title: "commercetools Quarterly Plan — Royal Cyber",
};

export default function QuarterlyPlanPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold text-rc-blue">
          {quarterlyPlan.org} — commercetools Quarterly Plan
        </h1>
        <p className="mt-1 text-sm text-[#5a6b82]">
          Generated: {quarterlyPlan.generated} ·{" "}
          {quarterlyPlan.quarters.length} quarter(s)
        </p>
      </div>
      <QuarterlyPlanTabs plan={quarterlyPlan} />
    </div>
  );
}
