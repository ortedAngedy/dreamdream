import React from "react"
import { archiveGridData } from "../utils/data"
import Link from "next/link"
import Image from "next/image"
const ArchivesGrid = () => {
	return (
		<div
			className="w-full px-0 min-h-screen items-center justify-center flex flex-col mt-20
			">
			<h3 className="glDisplay text-7xl">Archives</h3>

			<div className="grid grid-cols-2 mt-20 px-0  place-items-stretch min-h-screen aspect-square w-full gap-0 md:grid-cols-4">
				{archiveGridData.map((item, index) => (
					<div
						className="md:h-[400px] md:w-[400px] group relative"
						key={item.id}>
						<Image src={item.image} className="object-cover aspect-square" />
					</div>
				))}
			</div>
		</div>
	)
}

export default ArchivesGrid
