/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "light-primary": "#2A5B2B",
                "light-secondary": "#DCEFDD",
                "light-background": "#FFFFFF",
                "light-background-secondary": "#F8F8F8",
                "light-accent": "#000000",
                "light-text": "#030703",
            },
        },
    },
    plugins: [],
};
