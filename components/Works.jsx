"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import { splitWord } from "/utils/splitWord"
import { projectData } from "/utils/data"

import workImage from "/public/assets/ruler&pencil.png"
import CTA from "./CTA"
import Link from "next/link"

const Works = () => {
	const [hoveredImage, setHoveredImage] = useState("")
	const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
	const [prevMouseX, setPrevMouseX] = useState(null)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [aciveText, setActiveText] = useState(true)

	// Basically all the text are active but I hover on one particular project it becomes active and the rest becomes inactive

	const handleMouseOver = (imgSrc, e) => {
		setHoveredImage(imgSrc)

		// Set the initial x position to match the current mouse position
		const imageX = e.clientX - window.innerWidth / 2 // Adjust for image size
		setImagePosition({ x: imageX, y: 0 })
	}

	useEffect(() => {
		const updateImagePosition = e => {
			if (prevMouseX === null) {
				setPrevMouseX(e.clientX)
			}

			const mouseX = e.clientX - 20
			const direction = mouseX - prevMouseX // Positive for right, negative for left

			// Calculate rotation based on direction
			const rotation = direction * 0.1 // You can adjust the multiplier for the rotation speed
			setWindowWidth(window.innerWidth)
			setPrevMouseX(mouseX)
			setImagePosition({ x: mouseX, y: 0, rotation })
		}

		window.addEventListener("mousemove", updateImagePosition)

		return () => {
			window.removeEventListener("mousemove", updateImagePosition)
		}
	}, [prevMouseX])

	return (
		<div className="mt-24  flex flex-col">
			<div className="relative flex justify-between  w-full ">
				<h2
					style={{
						transform: `translateX(-10%)  rotate(-8deg)`,
					}}
					className="title-2 mb-16 -rotate-2">
					{splitWord("WORKS")}
				</h2>
				<Image
					className=" hidden lg:inline-block object-cover -right-24 -top-36  min-w-fit min-h-fit w-[504px] h-[504px] -rotate-2"
					src={workImage}
					alt="ruler and pencil"
				/>
			</div>

			<ul className=" relative text-2xl flex flex-col gap-3  pb-24  ">
				{projectData.map(project => {
					return (
						<li
							key={project.id}
							onMouseEnter={() => setActiveText(false)}
							onMouseOver={e => handleMouseOver(project.image, e)}
							onMouseLeave={() => setActiveText(true)}
							className={`relative group  border-t border-black  last-of-type:border-b p-10
							${aciveText ? "text-white" : "text-black hover:text-white"}
							`}>
							<div className="w-full flex justify-between  items-center">
								<p
									className={`text-5xl    transition-all duration-300 ease-linear  w-fit mb-0 `}>
									{project.name}
								</p>
								<p className="text-sm w-fit ">{project.date}</p>
							</div>

							<Image
								style={{
									transform: ` translateX(${imagePosition.x}px) rotate(${imagePosition.rotation}deg)`,
									display:
										hoveredImage === project.image &&
										// Device Condtions
										window.innerWidth > 768
											? "block"
											: "none",
									transition: "all  ease",
								}}
								className={`absolute md:inline-block hidden z-50 w-[300px] h-[390px]   transition-all  border-[4px] border-white
								object-cover duration-500 ease-linear top-0`}
								src={project.image}
							/>
						</li>
					)
				})}
			</ul>

			{/**Button for More Works */}
			<button className="underline underline-offset-2 mt-10 flex justify-end w-full text-2xl">
				<Link prefetch={false} href="/projects">
					Other Archived Projects
				</Link>
			</button>

			<CTA />
		</div>
	)
}

export default Works
