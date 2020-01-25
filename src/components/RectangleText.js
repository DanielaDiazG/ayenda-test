import React from "react";
import './RectangleText.css'

const RectangleText =(props)=>{
    const{value:{name}}=props;
    return(
        <div className="rectangle">
            <span className="rectangleName">{name}</span>
        </div>
    )
}

export default RectangleText;