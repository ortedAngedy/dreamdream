"use client"
import React, { useState } from "react"
import video from "/public/video.mp4"
import sampeImage from "/public/sample.png"
import Image from "next/image"
import YouTubePlayer from "./YouTube"
const ShowReel = () => {
	const [isVideoPlaying, setIsVideoPlaying] = useState(false)
	return (
		<>
			<div className="relative group   w-fit mx-auto">
				<button
					onClick={() => setIsVideoPlaying(true)}
					className="bg-black group-hover:scale-125 transition-all cursor-pointer duration-200 absolute top-[50%] left-[50%] mx-auto  translate-x-[-50%] 
				  translate-y-[-50%] flex justify-center items-center p-10 rounded-full w-10 h-10 z-20">
					Play
				</button>
				<div className="clipped-border -rotate-2 mx-auto h-[220px] w-[400px] flex items-center justify-center bg-green-500">
					<Image src={sampeImage} className="object-cover" />
				</div>
			</div>
			{isVideoPlaying && (
				<div className="e">
					<YouTubePlayer videoId="oE_DjReDoLM" />
				</div>
			)}
		</>
	)
}

export default ShowReel
