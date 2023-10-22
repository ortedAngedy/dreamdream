"use client"
import React, { useEffect, useState } from "react"
import { projectData } from "/utils/data"
import Image from "next/image"
import Marquee from "react-fast-marquee"
import ArchivesGrid from "/components/ArchivesGrid"
const Projects = () => {
	const [hoveredImage, setHoveredImage] = useState("")
	const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
	const [prevMouseX, setPrevMouseX] = useState(null)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

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
		<section className="min-h-screen pb-20 w-full pt-32 px-0 bg-[#FF001F]">
			<div className="transition-all flex flex-col gap-4 duration-500 ease-linear">
				{projectData.map(project => {
					return (
						<div
							key={project.id}
							onMouseOver={e => handleMouseOver(project.image, e)}
							className="relative group  -rotate-2">
							<Marquee
								speed={windowWidth > 768 ? 290 : 200}
								className=""
								direction={project.id % 2 === 0 ? "right" : "left"}>
								<h1
									className={`lg:text-[320px] md:text-[280px] text-[100px]    glDisplay  font-bold  transition-all duration-300 ease-linear w-full mb-0 group-hover:text-white text-black`}>
									{project.name}

									<div className=""></div>
								</h1>
							</Marquee>

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
								className={`absolute md:inline-block hidden z-50  transition-all lg:w-[420px] md:w-[320px] border-[4px] border-white lg:h-[510px] 
								md:h-[390px] object-cover duration-500 ease-linear top-0`}
								src={project.image}
							/>
							<div className="bg-[#ffff41] scale-105 -rotate-[2deg] py-2 items-center justify-center absolute hidden group-hover:flex transition-all duration-500 ease-linear  top-1/2 z-30 group-hover:visible text-black">
								<Marquee
									direction={project.id % 2 === 0 ? "left" : "right"}
									className="text-sm">
									{new Array(10)
										.fill("Visit Case Study • Web Design ")
										.join(" ")}
								</Marquee>
							</div>
						</div>
					)
				})}
			</div>

			{/* Other Archives Section*/}
			<div className="min-hs">
				<ArchivesGrid />
			</div>
		</section>
	)
}

export default Projects
