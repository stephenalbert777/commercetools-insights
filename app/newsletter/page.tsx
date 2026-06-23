import type { Metadata } from "next";
import { report, type FlagKind } from "@/data/report";

export const metadata: Metadata = {
  title: "commercetools Trend & Content Opportunities — Royal Cyber",
};

const FLAG_CLASS: Record<FlagKind, string> = {
  ai: "border-[#d8c9f2] bg-[#efe9fb] text-[#5b2bb5]",
  ent: "border-[#bfe3cc] bg-[#e7f6ee] text-[#15703f]",
  gap: "border-[#f0d9a8] bg-[#fdf1db] text-[#9a6212]",
};

function Section({
  n,
  title,
  intro,
  children,
}: {
  n: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-9">
      <h2 className="text-[19px] font-semibold tracking-tight">
        <span className="mr-2 font-semibold text-opti-teal">{n}</span>
        {title}
      </h2>
      {intro ? (
        <p className="mb-4 mt-1 max-w-3xl text-[13.5px] text-opti-muted">
          {intro}
        </p>
      ) : (
        <div className="mb-2" />
      )}
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-2xl border border-opti-line bg-opti-panel p-5">
      {children}
    </div>
  );
}

function Scores({ items }: { items: { label: string; pri?: boolean }[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {items.map((s, i) => (
        <span
          key={i}
          className={`rounded-md border px-2.5 py-1 text-[11.5px] ${
            s.pri
              ? "border-opti-accent bg-opti-accent font-semibold text-white"
              : "border-opti-line bg-opti-chip text-opti-muted"
          }`}
        >
          {s.label}
        </span>
      ))}
    </div>
  );
}

const TH = "px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-opti-teal";
const TD = "border-b border-opti-line px-3 py-2.5 align-top";

export default function ReportPage() {
  return (
    <div className="bg-gradient-to-b from-[#f1eefc] to-white">
      <div className="mx-auto max-w-5xl px-6 py-10 text-opti-ink">
        <header className="mb-7 border-b border-opti-line pb-6">
          <h1 className="text-[27px] font-bold tracking-tight">
            {report.title}
          </h1>
          <p className="mt-1.5 text-sm text-opti-muted">
            {report.sub} · Generated {report.generated}
          </p>
          <div className="mt-3.5 flex flex-wrap gap-2">
            {report.tags.map((t, i) => (
              <span
                key={i}
                className={`rounded-full border px-2.5 py-1 text-xs ${
                  t.hot
                    ? "border-opti-accent bg-opti-accent text-white"
                    : "border-opti-line bg-opti-chip text-opti-muted"
                }`}
              >
                {t.label}
              </span>
            ))}
          </div>
        </header>

        <Section
          n="01"
          title="Top Emerging Trends"
          intro="Clusters ranked by momentum (signal volume, recency weighting, and source diversity). Every cluster below cleared the momentum threshold and is anchored to dated releases, roadmap items, or documented capabilities."
        >
          {report.trends.map((t) => (
            <div
              key={t.rank}
              className="flex items-start gap-3.5 border-b border-opti-line py-3.5 last:border-b-0"
            >
              <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-lg bg-opti-accent text-sm font-bold text-white">
                {t.rank}
              </div>
              <div className="flex-1">
                <h3 className="text-[15.5px] font-semibold">{t.title}</h3>
                <p className="mt-0.5 text-[13.5px] text-opti-muted">{t.body}</p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {t.flags.map((f, i) => (
                    <span
                      key={i}
                      className={`rounded-[5px] border px-2 py-0.5 text-[11px] ${FLAG_CLASS[f.kind]}`}
                    >
                      {f.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Section>

        <Section
          n="02"
          title="Release Updates"
          intro="Dated entries from official commercetools release notes within the lookback window, newest first."
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13.5px]">
              <thead>
                <tr>
                  <th className={TH}>Product</th>
                  <th className={TH}>Date</th>
                  <th className={TH}>Release Highlight</th>
                  <th className={TH}>Type</th>
                </tr>
              </thead>
              <tbody>
                {report.releases.map((r, i) => (
                  <tr key={i}>
                    <td className={`${TD} whitespace-nowrap font-medium`}>
                      {r.product}
                    </td>
                    <td className={`${TD} whitespace-nowrap text-opti-muted`}>
                      {r.date}
                    </td>
                    <td className={`${TD} text-opti-muted`}>
                      {r.highlight}
                      <span className="mt-1.5 block break-all text-[11.5px] text-[#7c8c83]">
                        {r.source}
                      </span>
                    </td>
                    <td className={TD}>
                      <span className="whitespace-nowrap rounded-md border border-opti-line bg-opti-chip px-2 py-0.5 text-[11.5px] text-opti-muted">
                        {r.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          n="03"
          title="Upcoming Events"
          intro="Events upcoming relative to today, sourced from the commercetools events listing and individual event pages."
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13.5px]">
              <thead>
                <tr>
                  <th className={TH}>Event</th>
                  <th className={TH}>When / Format</th>
                  <th className={TH}>Focus</th>
                  <th className={TH}>Register</th>
                </tr>
              </thead>
              <tbody>
                {report.events.map((e, i) => (
                  <tr key={i}>
                    <td className={`${TD} font-medium`}>{e.event}</td>
                    <td className={`${TD} text-opti-muted`}>{e.when}</td>
                    <td className={`${TD} text-opti-muted`}>{e.focus}</td>
                    <td className={TD}>
                      <a
                        href={e.register}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block whitespace-nowrap rounded-full bg-[#1b1660] px-4 py-1.5 text-[13px] font-semibold text-white transition hover:bg-[#332a9e]"
                      >
                        Register
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          n="04"
          title="Product Roadmap"
          intro="Near-term items pulled from the current / Now / Q2 sections of each product page. Forward-looking and informational only — commercetools states roadmaps are not binding and may change."
        >
          <div className="grid gap-3.5 sm:grid-cols-2">
            {report.roadmap.map((c, i) => (
              <div
                key={i}
                className="rounded-xl border border-opti-line bg-opti-chip p-4"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-opti-teal">
                  {c.phase}
                </div>
                <h3 className="mt-0.5 text-[15px] font-semibold">{c.product}</h3>
                <ul className="my-2.5 list-disc space-y-1 pl-[18px] text-[13.5px] text-opti-muted">
                  {c.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-semibold text-opti-accent hover:underline"
                >
                  View roadmap →
                </a>
              </div>
            ))}
          </div>
        </Section>

        <Section
          n="05"
          title="High-Value Blog Opportunities"
          intro="Blog angles tied to in-window releases, roadmap items, or events. Scores are 1–10; composite priority weights AI relevance, enterprise relevance, momentum, uniqueness, and search trend."
        >
          {report.blogs.map((b, i) => (
            <Card key={i}>
              <h3 className="text-base font-semibold">{b.title}</h3>
              <p className="my-2 text-[13.5px] text-opti-muted">{b.why}</p>
              <Scores
                items={[
                  { label: `Audience: ${b.audience}` },
                  { label: `Difficulty: ${b.difficulty}` },
                  { label: `Engagement ${b.engagement}` },
                  { label: `Uniqueness ${b.uniqueness}` },
                  { label: `Composite priority ${b.priority}`, pri: true },
                ]}
              />
            </Card>
          ))}
        </Section>

        <Section
          n="06"
          title="Whitepaper Opportunities"
          intro="Longer-form, enterprise-oriented assets for buying committees and architecture reviews."
        >
          {report.whitepapers.map((w, i) => (
            <Card key={i}>
              <h3 className="text-base font-semibold">{w.title}</h3>
              <p className="my-2 text-[13.5px] text-opti-muted">{w.why}</p>
              <Scores
                items={[
                  { label: `Audience: ${w.audience}` },
                  { label: `Difficulty: ${w.difficulty}` },
                  { label: `Engagement ${w.engagement}` },
                  { label: `Uniqueness ${w.uniqueness}` },
                  { label: `Composite priority ${w.priority}`, pri: true },
                ]}
              />
            </Card>
          ))}
        </Section>

        <Section
          n="07"
          title="LinkedIn Post Ideas"
          intro="Short, evidence-led posts that ride current releases and events."
        >
          {report.linkedin.map((l, i) => (
            <Card key={i}>
              <h3 className="text-base font-semibold">{l.title}</h3>
              <p className="my-2 text-[13.5px] text-opti-muted">{l.why}</p>
              <Scores
                items={[
                  { label: `Audience: ${l.audience}` },
                  { label: `Engagement ${l.engagement}` },
                  { label: `Uniqueness ${l.uniqueness}` },
                ]}
              />
            </Card>
          ))}
        </Section>

        <Section
          n="08"
          title="Competitive Insight"
          intro="Each focus cluster benchmarked against the competitor set."
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13.5px]">
              <thead>
                <tr>
                  <th className={TH}>Theme</th>
                  <th className={TH}>commercetools Position</th>
                  <th className={TH}>Competitor Position</th>
                  <th className={TH}>Opportunity</th>
                </tr>
              </thead>
              <tbody>
                {report.competitive.map((c, i) => (
                  <tr key={i}>
                    <td className={`${TD} font-medium`}>{c.theme}</td>
                    <td className={`${TD} text-opti-muted`}>{c.commercetools}</td>
                    <td className={`${TD} text-opti-muted`}>{c.competitor}</td>
                    <td className={`${TD} text-opti-muted`}>{c.opportunity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          n="09"
          title="Recommended Immediate Actions"
          intro="Top items by composite priority, blending AI and enterprise relevance, momentum, uniqueness, and freshness of the underlying signal."
        >
          {report.actions.map((a) => (
            <Card key={a.n}>
              <h3 className="text-base font-semibold">
                {a.n}. {a.title}
              </h3>
              <p className="my-2 text-[13.5px] text-opti-muted">{a.why}</p>
              <Scores
                items={[
                  { label: `Composite priority ${a.priority}`, pri: true },
                  { label: `Format: ${a.format}` },
                ]}
              />
            </Card>
          ))}
        </Section>

        <Section n="10" title="Next 7 Days">
          <ul className="list-disc space-y-2 pl-5 text-sm text-opti-muted">
            {report.next7.map((it, i) => (
              <li key={i}>
                <b className="text-opti-ink">{it.bold}</b> {it.text}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
