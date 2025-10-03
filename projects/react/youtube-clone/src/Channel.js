import React from "react"
import channeldata from "./channel-data"
export default function Channel(props){
    return(
        <div className="channel">
            <img src={props.img}></img>
            <h3 className="channel-name">{props.name}</h3>
        </div>
    )
}