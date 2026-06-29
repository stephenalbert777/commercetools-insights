import Link from "next/link";
import { report } from "@/data/report";
import { quarterlyPlan } from "@/data/quarterlyPlan";
import { accelerators } from "@/data/accelerators";
import { projectsData } from "@/data/projects";

export default function HomePage() {
  const totalInitiatives = quarterlyPlan.quarters.reduce(
    (n, q) => n + q.initiatives.length,
    0,
  );
  const totalBenefits = accelerators.items.reduce(
    (n, a) => n + a.benefits.length,
    0,
  );

  const currentProjects = projectsData.projects.filter(
    (p) => p.status === "current",
  );
  const projectPeople = new Set(
    currentProjects.flatMap((p) => p.members.map((m) => m.name)),
  ).size;
  const projectSeats = currentProjects.reduce(
    (n, p) => n + p.members.length,
    0,
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <section className="mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-rc-accent">
          Royal Cyber · commercetools Practice
        </p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight text-rc-blue sm:text-4xl">
          commercetools Insights Dashboard
        </h1>
        <p className="mt-3 max-w-3xl text-[17px] text-[#5a6b82]">
          A single home for what our commercetools practice produces — the
          Department Agent&apos;s trend &amp; content sweep, the rolling
          six-week execution plan, the Royal Cyber accelerators, and the live
          project teams. Pick a card to dive in.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Link
          href="/newsletter"
          className="group rounded-2xl border border-opti-line bg-opti-navy p-7 text-opti-ink shadow-sm transition duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
        >
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-opti-teal">
            commercetools Department Agent · Weekly Sweep
          </div>
          <h2 className="mt-2 text-2xl font-bold">{report.title}</h2>
          <p className="mt-3 line-clamp-4 text-sm text-opti-muted">
            {report.sub}
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-opti-muted">
            <span>
              <b className="text-opti-ink">{report.trends.length}</b> trends
            </span>
            <span>
              <b className="text-opti-ink">{report.blogs.length}</b> blog ideas
            </span>
            <span>
              <b className="text-opti-ink">{report.releases.length}</b> releases
            </span>
            <span>
              <b className="text-opti-ink">{report.roadmap.length}</b> roadmaps
            </span>
          </div>
          <div className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[#1b1660] px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-[#332a9e]">
            Open newsletter
            <span className="transition group-hover:translate-x-0.5">→</span>
          </div>
        </Link>

        <Link
          href="/quarterly-plan"
          className="group rounded-2xl border border-[#dde3ec] bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
        >
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-rc-accent">
            {quarterlyPlan.org} · Quarterly Plan Agent
          </div>
          <h2 className="mt-2 text-2xl font-bold text-rc-blue">
            commercetools Quarterly Plan
          </h2>
          <p className="mt-3 text-sm text-[#5a6b82]">
            A {quarterlyPlan.quarters.length}-quarter execution plan: Q3 drives
            the Autonomous Commerce &amp; AgenticLift enablement program plus the
            SmartMigrate and AI-Native CPQ accelerators; Q4 builds Optimizely
            Connect and the Customer Service accelerator — month-by-month
            initiatives with owners and goals.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#5a6b82]">
            <span>
              <b className="text-rc-blue">{quarterlyPlan.quarters.length}</b>{" "}
              quarters
            </span>
            <span>
              <b className="text-rc-blue">{totalInitiatives}</b> initiatives
            </span>
          </div>
          <div className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[#1b1660] px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-[#332a9e]">
            Open quarterly plan
            <span className="transition group-hover:translate-x-0.5">→</span>
          </div>
        </Link>
      </section>

      <section className="mt-6">
        <Link
          href="/accelerators"
          className="group block rounded-2xl border border-opti-line bg-opti-navy p-7 text-opti-ink shadow-sm transition duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-opti-teal">
                {accelerators.org} · commercetools Center of Excellence
              </div>
              <h2 className="mt-2 text-2xl font-bold">{accelerators.title}</h2>
              <p className="mt-3 text-sm text-opti-muted">{accelerators.intro}</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-opti-muted">
                <span>
                  <b className="text-opti-ink">{accelerators.items.length}</b>{" "}
                  accelerators
                </span>
                <span>
                  <b className="text-opti-ink">{totalBenefits}</b> customer
                  benefits
                </span>
                <span>
                  <b className="text-opti-ink">5</b> platform areas
                </span>
              </div>
            </div>
            <div className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-[#1b1660] px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-[#332a9e]">
              Explore accelerators
              <span className="transition group-hover:translate-x-0.5">→</span>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {accelerators.items.map((a) => (
              <div
                key={a.slug}
                className="rounded-xl border border-opti-line bg-white p-4"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-opti-accent text-xs font-bold text-white">
                    {a.n}
                  </span>
                  <span className="rounded-full bg-opti-chip px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-opti-teal">
                    {a.maturity}
                  </span>
                </div>
                <h3 className="mt-2.5 text-[15px] font-semibold leading-snug">
                  {a.name}
                </h3>
                <p className="mt-1 text-[12.5px] text-opti-muted">{a.tagline}</p>
              </div>
            ))}
          </div>
        </Link>
      </section>

      <section className="mt-6">
        <Link
          href="/projects"
          className="group block rounded-2xl border border-[#dde3ec] bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-rc-accent">
                {projectsData.org} · Project Teams
              </div>
              <h2 className="mt-2 text-2xl font-bold text-rc-blue">
                commercetools Project Teams
              </h2>
              <p className="mt-3 text-sm text-[#5a6b82]">
                Every running commercetools engagement, the people on each team
                and their designation — with interactive views of team members
                by project, project manager, account manager or delivery
                manager.
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#5a6b82]">
                <span>
                  <b className="text-rc-blue">{currentProjects.length}</b>{" "}
                  projects
                </span>
                <span>
                  <b className="text-rc-blue">{projectPeople}</b> people
                </span>
                <span>
                  <b className="text-rc-blue">{projectSeats}</b> team seats
                </span>
              </div>
            </div>
            <div className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-[#1b1660] px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-[#332a9e]">
              Open projects
              <span className="transition group-hover:translate-x-0.5">→</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {currentProjects.map((p) => (
              <span
                key={p.id}
                className="rounded-full border border-[#dde3ec] bg-[#f5f3fe] px-3 py-1 text-[12.5px] font-medium text-rc-blue"
              >
                {p.name}
              </span>
            ))}
          </div>
        </Link>
      </section>

      <section className="mt-6">
        <a
          href="https://commercetools.com/commercetools-for-builders"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-opti-line bg-opti-navy p-7 text-opti-ink shadow-sm transition duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-opti-teal">
                Resource · commercetools
              </div>
              <h2 className="mt-2 text-2xl font-bold">commercetools for Builders</h2>
              <p className="mt-3 text-sm text-opti-muted">
                Stand up enterprise commerce in days, not months — an AI-powered
                build experience that turns natural-language intent into
                production-ready storefronts, with a Skills Library for Claude
                Code, Cursor and other AI tools.
              </p>
            </div>
            <div className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-[#1b1660] px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-[#332a9e] lg:self-center">
              Visit commercetools.com
              <span className="transition group-hover:translate-x-0.5">↗</span>
            </div>
          </div>
        </a>
      </section>

      <section className="mt-6 rounded-xl border border-[#dde3ec] bg-white p-6">
        <h3 className="text-sm font-bold uppercase tracking-wide text-rc-blue">
          Latest sweep
        </h3>
        <p className="mt-2 text-sm text-[#5a6b82]">
          Newsletter generated{" "}
          <b className="text-[#1c2733]">{report.generated}</b> · Quarterly plan
          generated <b className="text-[#1c2733]">{quarterlyPlan.generated}</b>.
        </p>
      </section>
    </div>
  );
}
