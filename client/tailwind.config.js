/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontSize: {
                title: "30px",
                desc: "16px",
            },
            backgroundColor: {
                background: "#f7f7fd",
                overlay: "rgba(0, 0, 0, 0.6)",
                overlay2: "rgba(0, 0, 0, 0.3)",
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
                primary: "#2f2a6c",
                main: "#000929",
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
            boxShadow: {
                main: "0 0 3px 0.6px rgba(0, 0, 0, 0.2)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
