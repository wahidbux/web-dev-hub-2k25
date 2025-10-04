import React from "react"


export default function Video(props){
    return(
        <div className="video">
            <img className="thumbnail" src={props.img}></img>
            <h4 className="duration">{props.duration}</h4>
            <div className="bottom">
                <img className="left" src={props.channel}></img>
                <div className="right">
                    <h3 className="title">{props.title}</h3>
                    <h4 className="name">{props.name}</h4>
                    <div className="stats">
                        <h4>{props.views} views &#8226; {props.ago} ago</h4>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}