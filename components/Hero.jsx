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
		<section className="md:px-8 flex flex-col gap-8 mt-8 ">
			<div className="h1-header">
				<Image
					className="absolute lg:block hidden  right-0 -top-[15%] z-10"
					alt="Chess ArtWork"
					src={chess}
					size="responsive"
				/>
				<div className="flex   relative w-fit flex-col gap-0  items-start justify-start">
					{/* Chess Image*/}

					<h3 className=" text-5xl absolute right-0 top-0">THE</h3>
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
				<div className="flex text-right  w-fit  relative  flex-col gap-0  items-start justify-end">
					<h3 className=" text-5xl absolute left-2 -top-6">TO</h3>
					<h1 className="  h1-text text-black">{splitWord("LEARN")}</h1>
					<h1 className="  h1-text">{splitWord("GREAT")}</h1>
					<p className="w-[600px] text-2xl  mt-8 text-start ">
						We are Dream Dream, a team passionate{" "}
						<span className="relative">
							<Image
								alt="vector"
								className="absolute -top-[100%] left-10 w-12 "
								src={sprinkle}
								sizes="responsive"
							/>
							about
						</span>{" "}
						<span className="relative">
							<Image
								alt="vector"
								className=" absolute"
								src={round}
								sizes="responsive"
							/>
							learning{" "}
						</span>
						and <span className="relative">programming</span>. Biweekly, we
						create online products that make the internet better for everyone.
					</p>
				</div>
			</div>
			{/*ShowReel Video Player */}
			<ShowReel />
			{/*WOrks */}
			<Works />
		</section>
	)
}

export default Hero
