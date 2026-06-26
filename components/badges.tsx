import type { TaskStatus } from "@/data/quarterlyPlan";

const STATUS_LABEL: Record<TaskStatus, string> = {
  todo: "To Do",
  prog: "In Progress",
  sched: "Scheduled",
  done: "Done",
};

const STATUS_CLASS: Record<TaskStatus, string> = {
  todo: "bg-[#eceff3] text-[#5a6b82]",
  prog: "bg-[#fff3cd] text-[#8a6d00]",
  sched: "bg-[#d3eef2] text-[#0b6e7d]",
  done: "bg-[#d9f2e3] text-[#13794a]",
};

export function StatusBadge({ status }: { status: TaskStatus }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${STATUS_CLASS[status]}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}
