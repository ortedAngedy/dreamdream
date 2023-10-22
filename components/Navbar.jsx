"use client"
import Image from "next/image"
import React, { useState } from "react"
import logo from "/public/assets/logo.svg"
import activeDot from "/public/assets/active-dot.svg"
import { usePathname } from "next/navigation"
import Link from "next/link"
import LogoImage from "/utils/LogoImage"
import { useRouter } from "next/navigation"

const menuItems = [
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Works",
		href: "/projects",
	},
	{
		name: "Contact",
		href: "/contact",
	},
]

const Navbar = () => {
	const pathname = usePathname()

	const [isActive, setIsActive] = useState(false)

	return (
		<nav className=" z-20 w-full  flex px-4 md:px-8 justify-between items-center md:py-3 fixed">
			<Link href={"/"}>
				<Image
					className={` filter invert
					${pathname === "/contact" ? "" : "filter invert-0"}
					`}
					src={logo}
					width={100}
					sizes="responsive"
					priority
				/>
			</Link>
			<ul className="flex justify-between  items-center gap-3 text-sm md:text-xl  md:gap-6 font-normal ">
				{menuItems.map((item, idx) => (
					<li
						className={`relative ${
							pathname === "/contact" ? "text-black " : ""
						}`}
						key={item.name}>
						<Link href={item.href}>{item.name}</Link>
						<div
							className={` absolute w-1 h-1 ${
								pathname === "/contact" ? "bg-black" : "bg-white"
							} -bottom-2 left-1/2 -translate-x-1/2  ${
								pathname == item.href ? "flex" : "hidden"
							}`}
						/>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
