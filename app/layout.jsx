import "./globals.css"

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import localFont from "next/font/local"
import AnimatedCursor from "react-animated-cursor"

const agrandir = localFont({
	src: [
		{
			path: "../public/assets/fonts/Agrandir-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/assets/fonts/Agrandir-Bold.otf",
			weight: "700",
			style: "bold",
		},
	],
	variable: "--font-agrandir",
})

export const metadata = {
	title: "DreamDream",
	description: "Official website of DreamDream Team",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<AnimatedCursor
				color="255, 255, 255 " // but change to white in /about page
				innerSize={40}
				outerSize={50}
				outerAlpha={0.2}
				innerAlph={0}
				innerScale={1.2}
				outerScale={5}
				trailingSpeed={3}
				blendMode="exclusion"
				clickables={[
					"a",
					"button",
					"li ",
					"ul",
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					"label[for]",
					"select",
					"textarea",
					"button",
					".link",
				]}
			/>
			<body className={`${agrandir.className}   `}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
