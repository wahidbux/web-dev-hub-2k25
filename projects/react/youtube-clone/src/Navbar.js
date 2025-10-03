import React from "react"
import { FaBars } from "react-icons/fa"
import {BsSearch} from "react-icons/bs"
import {FaMicrophone} from "react-icons/fa"
import {AiOutlineBell} from "react-icons/ai"
import {AiOutlineVideoCameraAdd} from "react-icons/ai"
import yt from './ytt.webp';
import "./styles.css"
export default function Navbar(){
    return(
        <div className="navbar">
            <div className="bars">
                <FaBars />
            </div>
            <img className="logo" src={yt} />
            <div className="inputing">
                <input type="text" placeholder="Search"></input>
                <div className="search"><BsSearch /></div>
                <div className="mic"><FaMicrophone /></div>
                </div>
                <div className="icons-right">
                    <AiOutlineVideoCameraAdd/>
                    <AiOutlineBell />
                </div>
            
            <div className="user"><h3>T</h3></div>
        </div>
    )
}