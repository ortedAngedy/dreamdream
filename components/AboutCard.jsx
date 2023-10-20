import React from "react"
import profileImg from "/public/images/pruthvi.png"
import Image from "next/image"

const AboutCard = ({
	profile = profileImg,
	alt = "Dream Team Member",
	name = "Dream Team Member",
	role = "Either a Web Developer or a Designer",
	description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias tenetur unde minus, cum iste quod reiciendis pariatur non dignissimos?",
	flexDirection = "flex-row",
}) => {
	return (
		<div
			className={`${flexDirection} 
        w-full flex items-center justify-evenly gap-8 mx-auto px-20 flex-row
        `}>
			<div>
				<Image
					src={profile}
					alt={alt}
					className="aspect-square flex-1 "
					priority
				/>
			</div>

			<div className=" flex flex-col justify-center">
				<div>
					<h3 className="md:text-[3.5rem]">{name}</h3>
					<p className="md:text-[2rem] text-[#9c9c9c]">{role}</p>
				</div>
				<p className="mt-6 md:text-[1.6rem] text-justify md:w-[500px]">
					{description}
				</p>
			</div>
		</div>
	)
}

export default AboutCard
