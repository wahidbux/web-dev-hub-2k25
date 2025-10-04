import React from "react";
import logo from "./Logo.png";
export default function Header() {
  return (
    <div className="header">
      <img src={logo}></img>
      <h3 className="desc">Create your meme!</h3>
    </div>
  );
}
