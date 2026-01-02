const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        path.join(__dirname, "../layout/*.liquid"),
        path.join(__dirname, "../templates/*.liquid"),
        path.join(__dirname, "../sections/*.liquid"),
        path.join(__dirname, "../snippets/*.liquid"),
        path.join(__dirname, "../config/*.json"),
        path.join(__dirname, "../locales/*.json")
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#f0aa42",
                "primary-hover": "#e09935",
                "background-light": "#f8f7f6",
                "background-dark": "#221b10",
                "text-main": "#1b160d",
                "text-sub": "#4a4036",
                "accent-blue": "#d0e8f2",
                "accent-pink": "#f2d0d9",
                "accent-green": "#d0f2d9",
            },
            fontFamily: { "display": ["Plus Jakarta Sans", "sans-serif"] },
            borderRadius: { "DEFAULT": "1rem", "lg": "1.5rem", "xl": "2rem", "2xl": "2.5rem", "full": "9999px" },
            boxShadow: { "playful": "4px 4px 0px rgba(27, 22, 13, 0.1)", "playful-hover": "6px 6px 0px rgba(27, 22, 13, 0.15)" },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
