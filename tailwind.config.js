module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        prpl: "#A775FA",
        tier1: "#DD7E6B",
        tier2: "#AFCB77",
        tier3: "#62BD87",
        bgthirdary:  "var(--color-bg-thirdary)",
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        thirdary: "var(--color-bg-thirdary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      fontFamily: {
        sans: ["Rubik", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        "3xl": "5px 5px 10px rgba(0, 0, 0, 0.35)",
      },
      fontSize: {
        xxxxs: "0.4rem",
        xxxs: "0.5rem",
        xxs: "0.6rem",
      },
      spacing: {
        de: "19.25rem",
        deSM: "28rem",
        deMD: "42rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// w-11 h-11 sm:h-16 sm:w-16 md:w-24 md:h-24
// 2.75 -> 19.25
// 4 -> 28
// 6 -> 42
