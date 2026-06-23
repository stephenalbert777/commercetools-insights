"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Dashboard" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/weekly-plan", label: "Weekly Plan" },
  { href: "/accelerators", label: "Accelerators" },
  { href: "/projects", label: "Projects" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-r from-[#15124a] via-[#3b2bb0] to-[#6359ff] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
            <svg width="22" height="22" viewBox="0 0 64 64" aria-hidden="true">
              <circle cx="26" cy="26" r="13" fill="#6359ff" opacity="0.95" />
              <circle cx="40" cy="27" r="12" fill="#ffd84d" opacity="0.92" />
              <circle cx="32" cy="39" r="12" fill="#2fd4c8" opacity="0.88" />
            </svg>
          </div>
          <div>
            <div className="text-base font-bold leading-tight">
              Royal Cyber — commercetools Insights
            </div>
            <div className="text-xs text-white/80">
              Agent-powered trends, content &amp; weekly planning
            </div>
          </div>
        </Link>
        <nav className="flex flex-wrap items-center gap-1.5 text-sm font-semibold">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-1.5 transition ${
                  active
                    ? "bg-lime text-lime-ink shadow-sm"
                    : "text-white/90 hover:bg-lime/25 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
