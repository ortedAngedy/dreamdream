/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				main: "#670AFF",
				secondary: "#FF001F",
				white: "#FFFFFF",
				black: "#000000",
				grey: "#9C9C9C",
			},
			maxWidth: {
				macOs: "108rem",
			},
			fontFamily: {
				glDisplay: ["var(--font-glDisplay)"],
				body: ["var(--font-agrandir)"],
			},
		},
	},

	plugins: [],
}
