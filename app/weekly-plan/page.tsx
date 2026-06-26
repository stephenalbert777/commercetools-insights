import { redirect } from "next/navigation";

// The Weekly Plan has been replaced by the Quarterly Plan. Keep this route as a
// permanent redirect so any existing links continue to work.
export default function WeeklyPlanRedirect() {
  redirect("/quarterly-plan");
}
