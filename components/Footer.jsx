"use client"
import LogoImage from "../utils/LogoImage"
import { useRouter } from "next/navigation"
const socials = [
	{
		name: "Instagram",
		href: "https://www.instagram.com/dreamdream.agency/",
	},
	{
		name: "Twitter",
		href: "https://twitter.com/dreamdream_agcy",
	},
	{
		name: "Github",
		href: "#",
	},
]

const Footer = () => {
	const router = useRouter()
	const footerColor = router.asPath === "/about" ? "yellow" : "black"

	return (
		<footer
			style={{
				backgroundColor: footerColor,
			}}
			className="w-full py-8 flex justify-between gap-8 items-center
         px-8 md:px-16  text-[#9C9C9C]">
			<div className="flex gap-8 items-center">
				<LogoImage />
				<ul className="flex gap-4 ">
					{socials.map(social => (
						<li>{social.name}</li>
					))}
				</ul>
			</div>

			<p>All rights are not reserved yet!</p>
		</footer>
	)
}

export default Footer
