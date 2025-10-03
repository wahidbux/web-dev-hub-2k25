import React from "react"
// import data from "./data"
import Navbar from "./Navbar"
import Video from "./Video"
import videoData from "./video-data"
// import Video from "./Video"
// import Channel from "./Channel"
// import Categories from "./Categories"
import "./styles.css"
import Navigation from "./Navigation"
import channeldata from "./channel-data"
import Channel from "./Channel"

export default function App(){
    const videos = videoData.map(function(video){
        return(
            <Video 
                key ={video.id}
                {...video}
            />
        )
    })
    const channels =channeldata.map(function(channel){
        return(
            <Channel 
                key={channel.id}
                {...channel}
            />
        )
    })
    return(
        <div>
            <Navbar />
            <div className="page">
                <div className="sidebar">
                    <Navigation />
                    <div className="channels">
                        <h3 className="sub-title">SUBCRIPTIONS</h3>
                        {channels}</div>
                </div>
                
                <section className="video-grid">{videos}</section>
            </div>
            
            
        </div>
    )
}