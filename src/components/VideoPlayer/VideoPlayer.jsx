/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./VideoPlayer.css"
import video from "../../assets/college-video-6XtGR-D3.mp4"

const VideoPlayer = ({ playState, setPlayState }) => {
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} onClick={() => setPlayState(false)}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
