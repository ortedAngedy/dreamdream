const splitWord = word => {
	// split word into array of letters
	const upperCaseWord = word.toUpperCase()
	const letters = upperCaseWord.split("")

	// map over letters and return span with letter and class
	const splitLetters = letters.map((letter, index) => {
		return (
			<span className=" " key={index}>
				{letter}
			</span>
		)
	})

	// return mapped array
	return splitLetters
}

export { splitWord }
