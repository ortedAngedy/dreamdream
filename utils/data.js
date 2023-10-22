// Generate random 6 team members data  in a array of objects with the following properties: Name, role, id, role, image
import profileImg from "/public/images/pruthvi.png"

import sample1 from "/public/sampleProjectImages/sample1.png"
import sample2 from "/public/sampleProjectImages/sample2.png"
import sample3 from "/public/sampleProjectImages/sample3.png"
import sample4 from "/public/sampleProjectImages/sample4.png"
import sample5 from "/public/sampleProjectImages/sample5.png"
import sample6 from "/public/sampleProjectImages/sample6.png"
import sample7 from "/public/sampleProjectImages/sample7.png"
import sample8 from "/public/sampleProjectImages/sample8.png"
import sample9 from "/public/sampleProjectImages/sample9.png"

// Team avatar
import nick from "/public/team/nick.svg"
import ovrcode from "/public/team/ovrcode.svg"
import orted from "/public/team/orted.svg"
import aaisha from "/public/team/aaisha.svg"
import reno from "/public/team/reno.svg"
import moses from "/public/team/moses.svg"

const teamMembers = [
	{
		name: "Nick",
		avatar: nick,
		role: " Full-stack Developer",
		glowColor: "6CFFAF",
		id: 1,
		description:
			" Nick from Italy, a Java developer with over a year of experience, explores front-end development. He's passionate about coding's creative potential to create from scratch. ",
		flexDirection: "flex-row",
	},
	{
		name: "Orted",
		avatar: orted,
		glowColor: "8DBBFE",
		role: "Developer / Cybersecurity",
		id: 2,
		description:
			" Orted, 25, a ReactJS practitioner transitioning to Next.js. Computer science student with a cybersecurity emphasis, intrigued by the limitless possibilities of IoT. Eager to explore and learn, always open for discussions and connections ",
		flexDirection: "flex-row-reverse",
	},
	{
		name: "Kisakye Moses",
		avatar: moses,
		glowColor: "A395FF",
		role: "Fullstack Developer",
		id: 3,
		description:
			"A developer in Kampala, Uganda, studying computer development while working on SaaS software. Your skills include React, Tailwind, and JavaScript. Impressive!",
		flexDirection: "flex-row",
	},
	{
		name: "Aashaya",
		avatar: aaisha,
		glowColor: "6CFFAF",
		role: " Front-end Developer",
		id: 4,
		description:
			"Aashaya, 23, from the US, with expertise in MERN, Nest, and Kafka. Self-taught, holds a BSc. in CS, and eager to gain collaborative experience.",
		flexDirection: "flex-row",
	},
	{
		name: "Dave",
		avatar: reno,
		glowColor: "ACC3FF",
		role: "Senior Developer",
		id: 5,
		description:
			"Dave, 37, from Western Australia. A Next.js and Supabase beginner, working on theproject buildrankers.com. He's an MBA and a senior product manager in fintech, aiming to learn app development from scratch.",
		flexDirection: "flex-row-reverse",
	},
	{
		name: "Pruthviraj",
		avatar: ovrcode,
		glowColor: "FEF645",
		role: "Junior Developer",
		id: 6,
		description:
			"A creative designer and developer. JS, React, Next.js, and Node.js. To become a leading professional in their field.",
		flexDirection: "flex-row",
	},
]

const projectData = [
	{
		id: 1,
		name: "Project Epsilon",
		description:
			"Project Epsilon is an innovative e-commerce platform that revolutionizes the online shopping experience.",
		team: "John Doe, Jane Doe, Peter Smith",
		techStack: "React, Node.js, PostgreSQL",
		link: "https://projectepsilon.com",
		fullImage: "https://projectepsilon.com/images/full-image.jpg",
		brandSlogan: "Redefining Online Shopping",
		date: "March 31",
		moreDescription:
			"Project Epsilon offers a seamless and personalized shopping experience with advanced features like AI-powered product recommendations, real-time inventory tracking, and secure payment gateways.",
		image: sample1,
	},
	{
		id: 2,
		name: "Project Sigma",
		description:
			"Project Sigma is a cutting-edge social media platform that connects people and fosters meaningful interactions.",
		team: "Alice Jones, Bob Smith, Mary Green",
		techStack: "React, GraphQL, MongoDB",
		link: "https://projectsigma.com",
		fullImage: "https://projectsigma.com/images/full-image.jpg",
		brandSlogan: "Connecting People, Sharing Moments",
		date: "March 31",
		moreDescription:
			"Project Sigma provides a safe and engaging space for users to share their thoughts, experiences, and creativity, while promoting authentic connections and meaningful conversations.",
		image: sample2,
	},
	{
		id: 3,
		name: "Project Delta",
		description:
			"Project Sigma is a cutting-edge social media platform that connects people and fosters meaningful interactions.",
		team: "Alice Jones, Bob Smith, Mary Green",
		techStack: "React, GraphQL, MongoDB",
		link: "https://projectsigma.com",
		fullImage: "https://projectsigma.com/images/full-image.jpg",
		brandSlogan: "Connecting People, Sharing Moments",
		date: "March 31",
		moreDescription:
			"Project Sigma provides a safe and engaging space for users to share their thoughts, experiences, and creativity, while promoting authentic connections and meaningful conversations.",
		image: sample3,
	},
	{
		id: 3,
		name: "Project BRavo",
		description:
			"Project Sigma is a cutting-edge social media platform that connects people and fosters meaningful interactions.",
		team: "Alice Jones, Bob Smith, Mary Green",
		techStack: "React, GraphQL, MongoDB",
		link: "https://projectsigma.com",
		fullImage: "https://projectsigma.com/images/full-image.jpg",
		brandSlogan: "Connecting People, Sharing Moments",
		date: "March 31",
		moreDescription:
			"Project Sigma provides a safe and engaging space for users to share their thoughts, experiences, and creativity, while promoting authentic connections and meaningful conversations.",
		image: sample4,
	},
	{
		id: 3,
		name: "Project  Giga",
		description:
			"Project Sigma is a cutting-edge social media platform that connects people and fosters meaningful interactions.",
		team: "Alice Jones, Bob Smith, Mary Green",
		techStack: "React, GraphQL, MongoDB",
		link: "https://projectsigma.com",
		fullImage: "https://projectsigma.com/images/full-image.jpg",
		brandSlogan: "Connecting People, Sharing Moments",
		date: "March 31",
		moreDescription:
			"Project Sigma provides a safe and engaging space for users to share their thoughts, experiences, and creativity, while promoting authentic connections and meaningful conversations.",
		image: sample5,
	},
]

const sampleProjectImages = [sample1, sample2, sample3]
const sampleProjectImages2 = [sample4, sample5]
const sampleProjectImages3 = [sample6, sample7, sample8, sample9]

const worksList = [
	{
		id: 1,
		projectName: "Project Derulo",

		date: "oct-1",
	},
	{
		id: 2,
		projectName: "Project Selena",

		date: "sept-1",
	},
	{
		id: 3,
		projectName: "Project Puth",

		date: "nov-1",
	},
	{
		id: 4,
		projectName: "Project Swift",

		date: "dec-1",
	},
]

// 1st ArchiveGrid
const archiveGridData = [
	{
		id: 1,
		name: "Project Epsilon",
		link: "/project-epsilon",
		image: sample1,
	},
	{
		id: 2,
		name: "Project Sigma",
		link: "/project-sigma",
		image: sample1,
	},
	{
		id: 3,
		name: "Project Delta",
		link: "/project-delta",
		image: sample8,
	},
	{
		id: 4,
		name: "Project Bravo",
		link: "/project-bravo",
		image: sample3,
	},
	{
		id: 5,
		name: "Project Giga",
		link: "/project-giga",
		image: sample4,
	},
	{
		id: 6,
		name: "Project Epsilon",
		link: "/project-epsilon",
		image: sample5,
	},
	{
		id: 4,
		name: "Project Bravo",
		link: "/project-bravo",
		image: sample3,
	},
	{
		id: 5,
		name: "Project Giga",
		link: "/project-giga",
		image: sample4,
	},
	{
		id: 6,
		name: "Project Epsilon",
		link: "/project-epsilon",
		image: sample5,
	},
	{
		id: 7,
		name: "Project Sigma",
		link: "/project-sigma",
		image: sample6,
	},
	{
		id: 8,
		name: "Project Delta",
		link: "/project-delta",
		image: sample5,
	},
	{
		id: 9,
		name: "Project Bravo",
		link: "/project-bravo",
		image: sample9,
	},
	{
		id: 10,
		name: "Project Giga",
		link: "/project-giga",
		image: sample2,
	},
]

export {
	teamMembers,
	projectData,
	worksList,
	archiveGridData,
	sampleProjectImages,
	sampleProjectImages2,
	sampleProjectImages3,
}
