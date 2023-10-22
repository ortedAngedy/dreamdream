"use client"
import ctaStudy from "/public/assets/workwithUs.png"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
const CTA = () => {
	const pathname = usePathname()
	return (
		<section className="w-full flex pb-24 gap-6 flex-col sm:flex-row text-center md:text-left justify-center items-center">
			<Image
				sizes="fit"
				src={ctaStudy}
				alt="CTA image-1 "
				className="animate-float"
			/>
			<div className="flex flex-col gap-5">
				<h1 className="glDisplay text-[7rem]  lg:text-[245px]">
					<span
						className={`${
							pathname === "/about" ? "text-white" : "text-black"
						} `}>
						WORK
					</span>{" "}
					<br /> WITH <br className="lg:block hidden" /> US
				</h1>
				<p
					className="mt-2 text-xl
				">
					Want to work together? <br />
					Email us…{" "}
					<span className=" hover:black smooth-transition hover:text-black cursor-pointer underline underline-offset-8">
						<Link href="mailto: hey.yourise@gmail.com">
							hello@dreamdream.agency
						</Link>
					</span>
				</p>
			</div>
		</section>
	)
}

export default CTA
