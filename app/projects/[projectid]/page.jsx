"use client"
import React from "react"
import { useRouter } from "next/navigation"

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
		moreDescription:
			"Project Epsilon offers a seamless and personalized shopping experience with advanced features like AI-powered product recommendations, real-time inventory tracking, and secure payment gateways.",
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
		moreDescription:
			"Project Sigma provides a safe and engaging space for users to share their thoughts, experiences, and creativity, while promoting authentic connections and meaningful conversations.",
	},
]

const ProjectPage = () => {
	const router = useRouter()
	const projectId = router.query.projectId // Get project ID from URL

	const selectedProject = projectData.find(project => project.id === projectId)

	return (
		<div>
			<div>
				<h1>{selectedProject.name}</h1>
				<p>{selectedProject.description}</p>
				<p>Project team: {selectedProject.team}</p>
				<p>Tech stack: {selectedProject.techStack}</p>
				<a href={selectedProject.link}>Project link</a>
			</div>

			<div>
				<img src={selectedProject.fullImage} alt={selectedProject.name} />
			</div>

			<div>
				<h2>{selectedProject.brandSlogan}</h2>
				<p>{selectedProject.moreDescription}</p>
			</div>

			<div>{/* Display image showcase grid */}</div>

			<div>{/* Display more image grids */}</div>
		</div>
	)
}

export default ProjectPage
