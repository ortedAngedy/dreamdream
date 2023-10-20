import Image from "next/image"
import Link from "next/link"
import React from "react"
import logo from "/public/assets/logo.svg"
function LogoImage() {
	return (
		<div>
			<Link href={"/"}>
				<Image src={logo} width={100} sizes="responsive" />
			</Link>
		</div>
	)
}

export default LogoImage
