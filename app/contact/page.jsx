import React from "react"
import { splitWord } from "../../utils/splitWord"
import Marquee from "react-fast-marquee"
import Link from "next/link"
const ContactPage = () => {
	const email = "hey.yourise@gmail.com"
	const handleEmail = () => {
		window.open(`mailto:${email}`)
	}
	return (
		<section className="bg-[#F6C627] w-full px-0  flex justify-center items-center flex-col text-black">
			<h1 className="h1-text text-center w-fit">{splitWord("Work")}</h1>
			<h1 className="h1-text text-center w-fit text-white">
				{splitWord("With Us")}
			</h1>
			<p
				className="text-xl mt-8
            ">
				or you can call us 8880194494
			</p>
			<div className="bg-[#FF001F] scale-105 -rotate-6 py-2 flex items-center justify-center w-full p-0 absolute  transition-all duration-500 ease-linear text-2xl  top-1/2 z-30 group-hover:visible text-black">
				<Marquee className="lg:text-2xl  md:text-xl text-sm  ">
					<Link
						href={`mailto:${email}`}>{`click here to email   ${email} • ${new Array(
						4
					)
						.fill(`click here to email  • ${email} • `)
						.join("")}click here to email  ${email} • `}</Link>
				</Marquee>
			</div>
		</section>
	)
}

export default ContactPage
