import type { Metadata } from "next";
import { accelerators, type Accelerator } from "@/data/accelerators";

export const metadata: Metadata = {
  title: "Royal Cyber Accelerators — commercetools Center of Excellence",
  description:
    "Royal Cyber accelerators that extend commercetools with applied AI, analytics and automation — each mapped to the customer pain it solves and the value it creates.",
};

const LABEL =
  "text-[11px] font-bold uppercase tracking-[0.14em] text-opti-teal";

function Label({ children }: { children: React.ReactNode }) {
  return <div className={LABEL}>{children}</div>;
}

function AcceleratorBlock({ a }: { a: Accelerator }) {
  return (
    <section
      id={a.slug}
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-opti-line bg-opti-panel shadow-sm"
    >
      {/* Header band */}
      <div className="border-b border-opti-line bg-gradient-to-r from-[#f1eefc] to-white p-6 sm:p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="min-w-0 flex-1">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-opti-accent text-lg font-extrabold text-white">
                {a.n}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={LABEL}>{a.category}</span>
                  <span className="rounded-full border border-opti-line bg-opti-chip px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-opti-teal">
                    {a.maturity}
                  </span>
                </div>
                <h2 className="mt-1.5 text-[22px] font-bold leading-tight text-opti-ink">
                  {a.name}
                </h2>
                <p className="mt-1 text-[15px] font-medium text-rc-accent">
                  {a.tagline}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-opti-muted">
              {a.overview}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-opti-line bg-white px-3 py-2 text-[13px]">
              <span className="font-semibold text-opti-teal">Customer value</span>
              <span className="text-opti-ink">{a.customerValue}</span>
            </div>
          </div>

          {a.video && (
            <div className="w-full lg:w-[380px] lg:flex-none">
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-opti-line bg-black shadow-sm">
                <iframe
                  src={a.video}
                  title={`${a.name} — video`}
                  className="h-full w-full"
                  allow="encrypted-media; fullscreen;"
                  allowFullScreen
                />
              </div>
              <p className="mt-1.5 text-center text-[11px] font-semibold uppercase tracking-wide text-opti-teal">
                {a.name} — see it in action
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="space-y-7 p-6 sm:p-7">
        {/* Benefits */}
        <div>
          <Label>Key Benefits</Label>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {a.benefits.map((b, i) => (
              <div
                key={i}
                className="rounded-xl border border-opti-line bg-opti-chip p-4"
              >
                <h3 className="text-[14px] font-semibold text-opti-ink">
                  {b.title}
                </h3>
                <p className="mt-1 text-[12.5px] text-opti-muted">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Problem + resolution */}
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-opti-line border-l-4 border-l-opti-accent bg-white p-5">
            <Label>The Challenge</Label>
            <h3 className="mt-1.5 text-[15px] font-semibold text-opti-ink">
              {a.challenge.title}
            </h3>
            <p className="mt-1 text-[13.5px] text-opti-muted">
              {a.challenge.text}
            </p>
          </div>
          <div className="rounded-xl border border-opti-line bg-white p-5">
            <Label>How This Accelerator Resolves It</Label>
            <ul className="mt-2 list-disc space-y-1.5 pl-[18px] text-[13.5px] text-opti-muted">
              {a.resolves.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ideal customer + signals */}
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-opti-line bg-white p-5">
            <Label>Ideal Customer Profile</Label>
            <p className="mt-2 text-[13.5px] text-opti-muted">
              {a.idealCustomer}
            </p>
          </div>
          <div className="rounded-xl border border-opti-line bg-white p-5">
            <Label>Signals to Look For</Label>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {a.signals.map((s, i) => (
                <span
                  key={i}
                  className="rounded-full border border-opti-line bg-opti-chip px-3 py-1 text-[12.5px] text-opti-ink"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Technical + value */}
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-opti-line bg-opti-chip p-5">
            <Label>Technical Standpoint</Label>
            <ul className="mt-2 list-disc space-y-1.5 pl-[18px] text-[13px] text-opti-muted">
              {a.technical.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-opti-line bg-white p-5">
            <Label>Value for commercetools</Label>
            <p className="mt-2 text-[13.5px] text-opti-muted">
              {a.valueCommercetools}
            </p>
          </div>
          <div className="rounded-xl border border-opti-line bg-white p-5">
            <Label>Value for Royal Cyber</Label>
            <p className="mt-2 text-[13.5px] text-opti-muted">
              {a.valueRoyalCyber}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AcceleratorsPage() {
  return (
    <div className="bg-gradient-to-b from-[#f1eefc] to-white">
      <div className="mx-auto max-w-5xl px-6 py-10 text-opti-ink">
        <header className="mb-7 border-b border-opti-line pb-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-rc-accent">
            {accelerators.org} · commercetools Center of Excellence
          </p>
          <h1 className="mt-2 text-[28px] font-extrabold tracking-tight">
            {accelerators.title}
          </h1>
          <p className="mt-1 text-[16px] font-semibold text-rc-blue">
            {accelerators.heading}
          </p>
          <p className="mt-2.5 max-w-3xl text-sm text-opti-muted">
            {accelerators.intro} · Updated {accelerators.generated}
          </p>

          <nav className="mt-5 flex flex-wrap gap-2">
            {accelerators.items.map((a) => (
              <a
                key={a.slug}
                href={`#${a.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-opti-line bg-white px-3.5 py-1.5 text-[13px] font-semibold text-opti-ink transition hover:border-opti-accent hover:text-opti-accent"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-opti-accent text-[11px] font-bold text-white">
                  {a.n}
                </span>
                {a.name}
              </a>
            ))}
          </nav>
        </header>

        <div className="space-y-7">
          {accelerators.items.map((a) => (
            <AcceleratorBlock key={a.slug} a={a} />
          ))}
        </div>

        <section className="mt-9 rounded-2xl border border-opti-line bg-opti-navy p-7">
          <h2 className="text-[18px] font-bold text-opti-ink">
            Put an accelerator to work
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-opti-muted">
            Each accelerator is delivered by the Royal Cyber commercetools
            Center of Excellence as a defined-scope engagement, with managed
            services and optimization to follow. Match the buying signals above
            to an account, and we will scope a pilot.
          </p>
          <a
            href="https://www.royalcyber.com/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#1b1660] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#332a9e]"
          >
            Talk to Royal Cyber
            <span>→</span>
          </a>
        </section>
      </div>
    </div>
  );
}
