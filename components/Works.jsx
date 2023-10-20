"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import AnimatedCursor from "react-animated-cursor"
import { splitWord } from "/utils/splitWord"

import image1 from "/public/assets/projects/1.jpeg"
import image2 from "/public/assets/projects/2.jpeg"
import image3 from "/public/assets/projects/3.jpeg"
import image4 from "/public/assets/projects/4.jpeg"
import workImage from "/public/assets/ruler&pencil.png"
import BigButton from "/utils/BigButton"
import CTA from "./CTA"

const worksList = [
	{
		id: 1,
		projectName: "Project Derulo",
		imgSrc: image1,
		date: "oct-1",
	},
	{
		id: 2,
		projectName: "Project Selena",
		imgSrc: image2,
		date: "sept-1",
	},
	{
		id: 3,
		projectName: "Project Puth",
		imgSrc: image3,
		date: "nov-1",
	},
	{
		id: 4,
		projectName: "Project Swift",
		imgSrc: image4,
		date: "dec-1",
	},
]

const Works = () => {
	const [hoveredImage, setHoveredImage] = useState("")
	const [isHovered, setIsHovered] = useState(false)
	const [moveX, setMoveX] = useState(null)

	const handleMouseOver = imgSrc => {
		setHoveredImage(imgSrc)
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setHoveredImage("")
		setIsHovered(false)
	}

	useEffect(() => {
		// get realtime cursro co-ordinates
		const width = window.innerWidth
		console.log(width)
		const handleMouseMove = e => {
			// convert client to 100%
			const clientX = e.clientX
			const mediumDeviceClientX = e.clientX / 2

			setMoveX(e.clientX)
		}
		window.addEventListener("mousemove", handleMouseMove)
		return () => {
			window.removeEventListener("mousemove", handleMouseMove)
		}
	}, [])

	return (
		<div className="mt-24  flex flex-col">
			<div className="relative flex justify-between  w-full mb-12 h-40">
				<h2
					style={{
						transform: `translateX(-10%) rotate(-8deg)`,
					}}
					className="title-2  -rotate-2">
					{splitWord("WORKS")}
				</h2>
				<Image
					className=" hidden lg:inline-block object-cover -right-24 -top-36  min-w-fit min-h-fit w-[504px] h-[504px] -rotate-2"
					src={workImage}
					alt="ruler and pencil"
				/>
			</div>

			<ul className=" relative text-2xl flex flex-col gap-3 mt-52 pb-24  ">
				{worksList.map((list, indx) => (
					<li
						onMouseLeave={handleMouseLeave}
						onMouseOver={() => handleMouseOver(list.imgSrc)}
						className={`list group first-of-type:border-t border-black p-8  cursor-pointer transition-all duration-1000 
						border-b
						ease-in-out`}
						key={indx}>
						<Image
							style={{
								display: hoveredImage === list.imgSrc ? "block" : "none",
								transition: "all 1s ease",
								transform: `translateX(${moveX}px) rotate(8deg)`,
							}}
							className="project-image"
							src={hoveredImage === list.imgSrc ? list.imgSrc : ""}
							alt={list.projectName}
						/>

						<div
							onMouseOver={() => handleMouseOver(list.imgSrc)}
							className={`w-full flex items-center justify-between ${
								isHovered ? "hover:text-black" : "text-white"
							}`}>
							<p>{list.projectName}</p>
							<p>{list.date}</p>
						</div>
					</li>
				))}
			</ul>

			{/**Button for More Works */}
			<button className="underline underline-offset-2 mt-10 flex justify-end w-full text-2xl">
				Other Archived Projects
			</button>
			<AnimatedCursor
				color="0,0,0"
				innerSize={80}
				outerSize={0}
				outerAlpha={0.2}
				innerAlph={0}
				innerScale={1.2}
				outerScale={5}
				blendMode="screen"
				innerStyle={
					{
						// Smooth transition when the element is entering the viewport
					}
				}
				clickables={[
					"a",
					"button",
					"li ",
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					"label[for]",
					"select",
					"textarea",
					"button",
					".link",
				]}
			/>

			<CTA />
		</div>
	)
}

export default Works
