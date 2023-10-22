import localFont from "next/font/local"

const glDisplay = localFont({
	src: "../public/assets/fonts/GLDDisplay-Black.ttf",
	formats: ["woff2"],
})

export default function FontLoader({ children }) {
	return <div className={`${glDisplay.variable}  `}>Hello{children}</div>
}
