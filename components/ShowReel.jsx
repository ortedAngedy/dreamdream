"use client"
import React, { useState } from "react"
import video from "/public/video.mp4"
import sample6 from "/public/sampleProjectImages/sample6.png"
import Image from "next/image"
import YouTubePlayer from "./YouTube"
const ShowReel = () => {
	const [isVideoPlaying, setIsVideoPlaying] = useState(false)
	return (
		<>
			<div className="relative group  space-y-6  w-full mx-auto">
				<button
					className="bg-black group-hover:scale-125 transition-all cursor-pointer duration-200 absolute top-[50%] left-[50%] mx-auto  translate-x-[-50%] 
				  translate-y-[-50%] flex justify-center items-center p-10 rounded-full w-10 h-10 z-20">
					Play
				</button>
				<div className="clipped-border w-fit mx-auto -rotate-2 flex items-center justify-center ">
					<Image src={sample6} className="object-cover" />
				</div>
			</div>
			{isVideoPlaying && (
				<div className="w-full mx-auto">
					<YouTubePlayer videoId="oE_DjReDoLM" />
				</div>
			)}
		</>
	)
}

export default ShowReel
