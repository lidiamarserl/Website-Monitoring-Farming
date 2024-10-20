/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./index.html",
    "./src/Pages/Dashboard/*.{js,ts,jsx,tsx}",
    "./src/Pages/Anomaly/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen: {md: {max: "1050px"}, sm:{max: "550px"}},
    extend: {
        colors: {
            black: {900: "#000000"},
            blue_gray: {200: "#bcb7c0", 300: "#9197b3", 900: "292d32"},
            deep_orange: {100: "#ffc4c4"},
            gray: {50: "#fafbff", 200: "#eeeeee", 600: "#757575", "200_01": "#f0f0f0"},
            green: {900: "#056526"},
            indigo: {"50_7f":"#e1ecf87f"},
            red: {a700: "df0303"}
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            sans: ['"Source Sans Pro"', 'sans-serif'],
        },
    }
},
  plugins: [
        require('flowbite/plugin')
    ],
}