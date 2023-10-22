"use client"
import Image from "next/image"
import logo from "/public/assets/logo.svg"
import { usePathname } from "next/navigation"
import Link from "next/link"
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
	const pathname = usePathname()
	console.log(pathname)
	return (
		<footer
			style={{}}
			className={`w-full py-8 flex justify-between gap-8 items-center
         px-8 md:px-16  text-[#9C9C9C]
		 ${pathname === "/about" ? "bg-white" : "bg-black"}
		 `}>
			<div className="flex gap-8 items-center">
				<Link href={"/"}>
					<Image
						className={` filter invert
					${pathname === "/about" ? "" : "filter invert-0"}
					`}
						src={logo}
						width={100}
						sizes="responsive"
						priority
					/>
				</Link>
				<ul className="flex md:flex-row flex-col text-sm md:gap-4 ">
					{socials.map(social => (
						<li className="hover:text-white cursor-pointer transition-all duration-200 ease-linear">
							{social.name}
						</li>
					))}
				</ul>
			</div>

			<p className="text-sm">All rights are not reserved yet!</p>
		</footer>
	)
}

export default Footer
