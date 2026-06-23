# commercetools Insights — Theme & Design System

Royal Cyber × commercetools brand. **Light theme, indigo / violet — never green.**
This is the single source of truth for the look of the dashboard. Any future change
(by a person or an agent) must follow it. The colour tokens live in
`tailwind.config.ts`; their NAMES are stable, so change the look by editing the hex
values there rather than touching every file.

---

## 1. Colour tokens (`tailwind.config.ts`)

| Token            | Hex       | Use                                                        |
| ---------------- | --------- | ---------------------------------------------------------- |
| `rc-blue`        | `#1b1660` | Deep commercetools indigo — headings, table headers, active tab (white text) |
| `rc-accent`      | `#5b3df5` | commercetools violet — eyebrow labels, links, focus-card border |
| `lime` / `lime-ink` | `#ffd84d` / `#241a4d` | Bright commercetools yellow highlight + dark indigo text on it (header active nav, logo chip) |
| `opti-navy`      | `#f1eefc` | Light lavender surface                                     |
| `opti-panel`     | `#ffffff` | Cards                                                      |
| `opti-line`      | `#e3def5` | Borders                                                    |
| `opti-ink`       | `#171432` | Primary text                                               |
| `opti-muted`     | `#5f5a7a` | Secondary text                                             |
| `opti-accent`    | `#5b3df5` | Violet links / buttons (white text OK)                     |
| `opti-teal`      | `#0c6e80` | Section numbers, uppercase labels (echoes the brand icon's teal) |
| `opti-warn`      | `#b9741a` | Amber (sparingly)                                          |
| `opti-chip`      | `#efeafe` | Light violet chip background                               |

**Rule:** no green brand colours anywhere. commercetools' identity is a deep indigo
with a violet primary and a yellow highlight (its geometric icon mixes yellow, purple
and teal). If a new element needs a secondary accent, use the teal `#0c6e80`.

## 2. Header (`components/SiteHeader.tsx`)

- Indigo→violet gradient bar: `from-[#15124a] via-[#3b2bb0] to-[#6359ff]`, white text.
- Logo chip and **active** nav item use the yellow pill: `bg-lime text-lime-ink`.
- Inactive nav: `text-white/90 hover:bg-lime/25`. Active state is driven by `usePathname`.

## 3. Buttons / CTAs — deep indigo pill

```
rounded-full bg-[#1b1660] px-5 py-2.5 text-sm font-semibold text-white
transition hover:bg-[#332a9e]   (group-hover on cards)
```
Used for: dashboard card CTAs and the newsletter "Register" buttons.

## 4. Cards — grow on hover

```
group rounded-2xl border border-opti-line bg-opti-navy p-7 shadow-sm
transition duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl
```
The whole card scales up ~2% and lifts with a deeper shadow on hover.

## 5. Badges, RACI & newsletter flags

- Status: To Do = gray, In Progress = amber, Done = green, **Scheduled = teal** `#d3eef2/#0b6e7d`.
  (Status colours are semantic and intentionally kept; they are not brand colours.)
- Type: **Blog/Blog Post = teal** `#d3eef2/#0b6e7d`, Whitepaper = violet, LinkedIn = cyan-teal,
  Milestone/Review = orange, Meeting/Campaign = pink, Accelerator/Integration = violet `#ede7ff/#5b3df5`.
- RACI: **R = teal**, A = green, C = amber, I = gray (kept semantic).
- Newsletter flag chips (light): AI = violet `#efe9fb/#5b2bb5`, Enterprise = green `#e7f6ee/#15703f`,
  Gap = amber `#fdf1db/#9a6212`.
- The RACI/Whitepaper purple `#6a2fb8` is an intentional secondary accent — keep it.

## 6. Pages

- Home (`app/page.tsx`), Weekly Plan (`app/weekly-plan` + `components/WeeklyPlanTabs.tsx`)
  and Newsletter (`app/newsletter/page.tsx`) are all **light**.
- The newsletter / accelerators / projects background is `bg-gradient-to-b from-[#f1eefc] to-white`.
- Body background `#f5f3fc`, text `#171432` (`app/globals.css`).

## 7. Editing rules (important)

- After any change, verify with a clean `next build` before pushing.
- The weekly auto-deploy regenerates ONLY the `data/*.ts` files.
  It must never modify the theme files (tailwind.config.ts, components, page layouts,
  globals.css). Data and theme are decoupled, so the theme persists automatically.

## 8. Behaviours to preserve

- **`/weekly-plan` opens on the current week of the month.**
  `components/WeeklyPlanTabs.tsx` reads each week's start date from its `subtitle`
  (e.g. "Jun 22 – Jun 26, 2026  |  …") and, once mounted in the browser, selects the
  latest week whose start date is on or before today — so Jun 22 lands on **Week 4**.
  It falls back to Week 1 before the plan starts and to the last week after it ends.
  The choice is derived at view time from the subtitle dates, so it keeps working
  after every weekly data regeneration. Do **not** hard-code a default week or remove
  this logic; the weekly deploy agent must never overwrite this component.
