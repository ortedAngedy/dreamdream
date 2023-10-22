import { split } from "postcss/lib/list"
import React from "react"
import chess from "/public/assets/chess.png"
import lamp from "/public/assets/lamp.png"
import Image from "next/image"
import sprinkle from "/public/assets/sprinkle.svg"
import round from "/public/assets/round.svg"
import underline from "/public/assets/underline.svg"
import ShowReel from "./ShowReel"
import Works from "./Works"
import { splitWord } from "/utils/splitWord"

const Hero = () => {
	return (
		<section className="md:px-8 flex mt-12   flex-col gap-8 md:mt-8 ">
			<div className="">
				<Image
					className="absolute lg:block hidden  right-0 -top-[15%] z-10"
					alt="Chess ArtWork"
					src={chess}
					size="responsive"
				/>
				<div className="   relative w-fit flex-col gap-0 justify-center items-center  md:items-start md:justify-start">
					{/* Chess Image*/}

					<h3 className="md:text-5xl text-xl absolute right-0 -top-4 ">THE</h3>
					<h1 className="  h1-text text-black">{splitWord("SMALL")}</h1>
					<h1 className="  h1-text">{splitWord("TEAM")}</h1>
				</div>
			</div>
			<div className="h1-header   justify-end">
				<Image
					className="absolute lg:block hidden  -left-[3%] top-[20%] z-10
					"
					alt="Chess ArtWork"
					src={lamp}
					size="responsive"
				/>
				<div className="flex text-right w-full md:w-fit relative  flex-col gap-0  items-start justify-end">
					<h1 className="  h1-text w-fit text-black">{splitWord("LEARN")}</h1>
					<h3 className="md:text-5xl text-xl absolute left-0 sm:left-1/2 md:left-0 -top-4 ">
						TO
					</h3>
					<h1 className="w-fit h1-text">{splitWord("CODE")}</h1>
					<p className="lg:w-[600px] w-full sm:text-justify px-6 lg:p-0 h-fit md:text-2xl  text-sm mt-8 lg:text-start ">
						We are Dream Dream, a team passionate about learning and{" "}
						programming. Biweekly, we create online products that make the
						internet better for everyone.
					</p>
				</div>
			</div>

			<ShowReel />

			<Works />
		</section>
	)
}

export default Hero
