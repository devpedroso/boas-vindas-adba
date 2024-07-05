/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bg-blur": "rgba(255, 255, 255, 0.80);",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-base": "var(--primary)",
      },
      boxShadow: {
        "3xl": "0px 4px 8px 0px rgba(20, 46, 82, 0.2)",
        "4xl": "0px 1px 4px 0px rgba(0, 0, 0, 0.10)",
        "5xl": "0px -1px 4px 0px rgba(0, 0, 0, 0.10)",
      },
      fontFamily: {
        interFont: "var(--font-inter)",
        alegreyaSans: "var(--font-alegreya)",
      },
      fontSize: {
        xsm: "13px",
      },
      extend: {
        backgroundImage: {
          "grade-tmj": "url('/public/assets/GRADE_TMJ.png')",
        },
      },
    },
  },
  plugins: [],
};
