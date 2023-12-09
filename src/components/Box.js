import React from "react";

//props.on comes from the <Box /> element in App.js
export default function Box(props){
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
//we use props to adopt the properties of toggle in the App.js
    return(
        <div 
        style={styles} 
        className="box"
        onClick={props.toggle}></div>
    )
}