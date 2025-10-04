import React from "react"
import { FaHome } from "react-icons/fa"
import { MdExplore } from "react-icons/md"
import { MdOutlineVideoLibrary } from "react-icons/md"
import { AiOutlinePlaySquare } from "react-icons/ai"
import { RiHistoryFill } from "react-icons/ri"
import { BsClock } from "react-icons/bs"
import { BiLike } from "react-icons/bi"
export default function Navigation(){
    return(
        <div className="navigation">
            <div className="home nav">
                <div className="icon"><FaHome /></div>
                <h3>Home</h3>
            </div>
            <div className="explore nav">
                 <div className="icon"><MdExplore /></div>
                
                <h3>Explore</h3>
            </div>
            <div className="library nav">
                 <div className="icon"><MdOutlineVideoLibrary /></div>
                
                <h3>Library</h3>
            </div>
            <div className="history nav">
                 <div className="icon"><RiHistoryFill /></div>
                
                <h3>History</h3>
            </div>
            <div className="your-videos nav">
                 <div className="icon"><AiOutlinePlaySquare /></div>
                
                <h3>Your Videos</h3>
            </div>
            <div className="watch-later nav">
                 <div className="icon"><BsClock /></div>
                
                <h3>Watch Later</h3>
            </div>
            <div className="liked-videos nav">
                 <div className="icon"><BiLike /></div>
                
                <h3>Liked Videos</h3>
            </div>
            <div className="line"></div>
        </div>
    )
}