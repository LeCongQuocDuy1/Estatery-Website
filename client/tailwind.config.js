/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                "main-50": "#7065f0",
                "main-100": "#695de4",
                "main-200": "#6156d8",
                "main-300": "#5a50cc",
                "main-400": "#554bc0",
                "main-500": "#4e45b4",
                "main-600": "#4941aa",
                "main-700": "#453da0",
                "main-800": "#403894",
                "main-900": "#3b338a",
            },
            colors: {
                "main-50": "#7065f0",
                "main-100": "#695de4",
                "main-200": "#6156d8",
                "main-300": "#5a50cc",
                "main-400": "#554bc0",
                "main-500": "#4e45b4",
                "main-600": "#4941aa",
                "main-700": "#453da0",
                "main-800": "#403894",
                "main-900": "#3b338a",
            },
        },
    },
    plugins: [],
};
