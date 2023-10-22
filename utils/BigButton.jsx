import React from "react"

function BigButton({ children }) {
	return (
		<button className="w-full h-fit px-6 glDisplay py-12 rounded-full border">
			{children}
		</button>
	)
}

export default BigButton
