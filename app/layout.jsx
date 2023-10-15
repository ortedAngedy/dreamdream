import Navbar from "@/components/Navbar"
import "./globals.css"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
const inter = Inter({ subsets: ["latin"] })
const glDisplay = localFont({
	src: "../public/assets/fonts/GLDDisplay-Black.ttf",
	variable: "--font-glDisplay",
})

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
			<body className={`${agrandir.className} max-w-[108rem]  `}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
