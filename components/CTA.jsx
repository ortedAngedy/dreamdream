"use client"
import ctaStudy from "/public/assets/workwithUs.png"
import Image from "next/image"
import { useEffect, useRef } from "react"

const CTA = () => {
	return (
		<section className="w-full flex gap-6 flex-col md:flex-row text-center md:text-left justify-center items-center">
			<Image
				sizes="contain"
				src={ctaStudy}
				alt="CTA image-1 "
				className="animate-float"
			/>
			<div className="flex flex-col gap-5">
				<h1 className="glDisplay text-[7rem]  lg:text-[245px]">
					<span className="text-black">WORK</span> <br /> WITH{" "}
					<br className="lg:block hidden" /> US
				</h1>
				<p
					className="mt-2 text-xl
				">
					Want to work together? <br />
					Email us…{" "}
					<span className=" underline underline-offset-8">
						hello@dreamdream.agency
					</span>
				</p>
			</div>
		</section>
	)
}

export default CTA
