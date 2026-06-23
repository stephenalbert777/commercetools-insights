import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Royal Cyber × commercetools brand palette (light theme).
        // Token NAMES are kept stable so existing className usages keep working;
        // only the hex values were remapped from the old green theme to the
        // commercetools indigo / violet identity (with a yellow highlight).
        rc: {
          blue: "#1b1660", // deep commercetools indigo — headings, table headers, active tab (white text)
          accent: "#5b3df5", // commercetools violet — eyebrow text, focus border, links (AA on white)
        },
        lime: {
          DEFAULT: "#ffd84d", // bright commercetools yellow highlight / CTA chip
          ink: "#241a4d", // deep indigo text that sits on yellow
        },
        opti: {
          navy: "#f1eefc", // light lavender surface (was light mint)
          panel: "#ffffff", // cards
          line: "#e3def5", // light lavender borders
          ink: "#171432", // near-black indigo — primary text
          muted: "#5f5a7a", // muted indigo-gray — secondary text
          accent: "#5b3df5", // commercetools violet — buttons (white text) & links
          teal: "#0c6e80", // teal accent (echoes the brand icon) — section numbers / labels
          warn: "#b9741a", // amber (unchanged role)
          chip: "#efeafe", // light violet chip background
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
