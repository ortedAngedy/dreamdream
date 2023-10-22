"use client"
import React from "react"
import YouTube from "react-youtube"

const YouTubePlayer = ({ videoId }) => {
	// Set up event handlers
	const onReady = event => {
		// Access the player instance
		const player = event.target

		// For example, you can automatically play the video
		player.playVideo()
		// Add a event listener to turn the video into fullscreen

		const opts = {
			height: "390",
			width: "640",

			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 0,
				iv_load_policy: 3,
				controls: 0,
				loop: 1,
				modestbranding: 1,
				fs: 1,
			},
		}

		const onError = error => {
			console.error("There's Error On Playing Video at the moment", error)
			alert("There's Error On Playing Video at the moment")
		}

		return (
			<YouTube
				videoId={videoId}
				opts={opts}
				onReady={onReady}
				onError={onError}
			/>
		)
	}
}
export default YouTubePlayer
