import { splitWord } from "/utils/splitWord"
import Image from "next/image"
import React from "react"
import teamOne from "/public/images/team-pic1.png"
import rect from "/public/images/rect.svg"
import circle from "/public/images/circle.svg"
import AboutCard from "/components/AboutCard"
import { teamMembers } from "/utils/data"
import CTA from "/components/CTA"
const About = () => {
	return (
		<section className="min-h-screen px-6 md:px-8 bg-black pt-26 overflow-hidden">
			<div className="translate-x-1/3">
				<p className="glDisplay text-3xl pb-0">THE</p>
				<h1 className="  h1-text">
					{splitWord("DREAM")} <br /> {splitWord("TEAM")}
				</h1>
			</div>
			<div className="flex relative justify-start gap-8 items-center">
				<Image
					src={teamOne}
					alt="Team Image One"
					className="aspect-square h-[912px]"
				/>
				<p className="text-[28px] mb-10 leading-10 mt-4 w-1/4 text-justify">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iusto
					ea rem ex dolor quae nihil tenetur! Asperiores ut, voluptate fuga
					dicta atque reiciendis maxime iusto tenetur sapiente amet nulla.
				</p>
				<Image
					src={rect}
					alt="Team Image One"
					className="absolute right-32 bottom-56"
				/>
			</div>
			<div className="w-full relative">
				<Image
					src={circle}
					alt="Team Image One"
					className="absolute bottom-[100px] left-[60px] "
				/>
			</div>

			<div className="flex flex-col gap-32">
				{teamMembers.map((member, idx) => (
					<AboutCard
						name={member.name}
						role={member.role}
						description={member.description}
						profile={member.image}
						flexDirection={idx % 2 === 0 ? "flex-row-reverse" : "flex-row"}
					/>
				))}
			</div>

			<CTA />
		</section>
	)
}

export default About
