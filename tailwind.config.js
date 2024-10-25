/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        apricot: {
          DEFAULT: "var(--apricot)",
        },
        sunny: {
          DEFAULT: "var(--sunny)",
        },
        emerald: {
          DEFAULT: "var(--emerald)",
        },
        mint: {
          DEFAULT: "var(--mint)",
        },
        soft: {
          DEFAULT: "var(--soft)",
        },
        turquoise: {
          DEFAULT: "var(--turquoise)",
        },
        lavender: {
          DEFAULT: "var(--lavender)",
        },
        crimson: {
          DEFAULT: "var(--crimson)",
        },
      },
    },
  },
  plugins: [],
};
