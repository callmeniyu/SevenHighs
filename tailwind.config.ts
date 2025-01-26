import type { Config } from "tailwindcss"

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    mode: "jit",
    theme: {
        extend: {
            screens: {
                xs: "300px",
            },
            typography: {
                DEFAULT: {
                  css: {
                    color: '#333',
                    h1: { color: '#1a202c' },
                    h2: { color: '#2d3748' },
                    h3: { color: '#4a5568' },
                    strong: { color: '#2d3748' },
                    blockquote: {
                      color: '#718096',
                      fontStyle: 'italic',
                      borderLeftColor: '#cbd5e0',
                    },
                    'ul > li::marker': {
                      color: '#4a5568',
                    },
                  },
                },
              },
            colors: {
                primary: {
                    DEFAULT: "#486D66",
                    dark: "#36544E",
                },
                secondary: {
                    DEFAULT: "#DED5BA",
                    light: "#EAE5D7",
                    dark: "#A59D84",
                },
                desc: {
                    DEFAULT: "#575252",
                },
            },
            fontFamily: {
                "gt-walsheim": ["var(--font-GT-Walsheim)"],
                poppins: ["var(--font-poppins)"],
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"), // Add this line
    ],
} satisfies Config
