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
                xs:"300px"
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
    plugins: [],
} satisfies Config