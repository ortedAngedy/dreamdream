import Image from "next/image"
import Link from "next/link"
import React from "react"
import logo from "/public/assets/logo.svg"
import { usePathname } from "next/navigation"
function LogoImage() {
	const pathname = usePathname()
	console.log(pathname)
	return (
		<div>
			<Link href={"/"}>
				<Image
					className={` 
					${pathname === "/contact" ? "filter invert-0" : ""}
					`}
					src={logo}
					width={100}
					sizes="responsive"
					priority
				/>
			</Link>
		</div>
	)
}

export default LogoImage
