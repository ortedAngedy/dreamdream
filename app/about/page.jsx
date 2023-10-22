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
		<section className=" bg-black ">
			<div className="lg:translate-x-1/3 ">
				<p className="glDisplay text-3xl pb-0">THE</p>
				<h1 className="  h1-text">
					{splitWord("DREAM")} <br /> {splitWord("TEAM")}
				</h1>
			</div>
			<div className="flex relative justify-start md:flex-row flex-col mt-16 md:mt-0 gap-4 lg:gap-8 items-center">
				<Image src={teamOne} alt="Team Image One" className="aspect-square" />
				<p className="text-[28px] z-30 mb-10 leading-10 mt-4 lg:w-1/4 text-justify">
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
						key={idx}
						name={member.name}
						role={member.role}
						description={member.description}
						profile={member.avatar}
						flexDirection={
							member.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
						}
					/>
				))}
			</div>

			<CTA />
		</section>
	)
}

export default About
