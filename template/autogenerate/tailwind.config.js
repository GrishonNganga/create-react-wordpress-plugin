/** @type {import('tailwindcss').Config} */
module.exports = {
    important: "#{{projectName}}",
    prefix: "{{tailwindPrefix}}",
    content: ["./src/**/**/*.{html,js,jsx,php}"],
    theme: {
        extend: {},
    },
    corePlugins: {
        preflight: false,
    }
}