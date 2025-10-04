import React from "react"

export default function Die(props){
    
    const styles ={
        backgroundColor : props.isHeld ? "#fbe134" : "#0b0c0c",
        color : props.isHeld ? "#0b0c0c" : "#fbe134",
        borderColor:props.isHeld ? "#0b0c0c" : "#fbe134",
    }
    return(
        <div className="die" style={styles} onClick={props.handleClick}>
            {props.value}
        </div>
    )
}