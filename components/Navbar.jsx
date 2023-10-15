"use client"
import Image from "next/image"
import React, { useState } from "react"
import logo from "@/public/assets/logo.svg"
import activeDot from "@/public/assets/active-dot.svg"
import Link from "next/link"

const menuItems = [
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Join",
		href: "/join",
	},
	{
		name: "Works",
		href: "/works",
	},
	{
		name: "Contact",
		href: "/contact",
	},
]

const Navbar = () => {
	const [active, setActive] = useState(false)
	return (
		<div className="max-w-macOs z-20 w-full flex px-4 md:px-8 justify-between items-center py-6 fixed">
			<Link href={"/"}>
				<Image src={logo} width={100} sizes="responsive" />
			</Link>
			<ul className="flex justify-between items-center gap-6 font-normal ">
				{menuItems.map((item, idx) => (
					<li className="relative" key={idx}>
						<Link href={item.href}>{item.name}</Link>
						<Image
							style={{
								display: active ? "inline-block" : "none",
							}}
							className={`absolute -bottom-3 translate-x-[50%] left-[20%]   bg-main`}
							src={activeDot}
							width={10}
							sizes="responsive"
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Navbar
