import { splitWord } from "/utils/splitWord"
import React from "react"

const notFound = () => {
	return (
		<section className=" w-full h-screen  bg-main flex flex-col items-center justify-center">
			<div className="flex flex-col glDisplay items-center justify-center">
				<h1 className="h1-text mx-auto text-center">
					<span className="text-black">{splitWord("OOPS!")} </span>
					<br /> {splitWord("DREAM")}
				</h1>
				<h1 className="md:text-[13rem] text-[6rem] text-black">Not found</h1>
			</div>
			<button className="text-sm mt-12 bg-white text-black p-4">
				Return to Main Page
			</button>
		</section>
	)
}

export default notFound
