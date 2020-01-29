import React from "react";
import './CircleImage.css';
import { Link } from 'react-router-dom';

const CircleImage = (props) => {
    const { value: { id, name, image }, type } = props;
    return (
        <Link to={type === "artist" ? `/artists/${id}/albums` : `/albums/${id}/songs`} >
            <div className={type === "artist" ?"circle circle_opacity":"circle"}>
                <img className="circle__image" src={image} alt={name} />
                <span className={`circle__name ${type === "artist" ? "circle__name--centered" : "circle__name--bottom"}`}>
                    {name}
                </span>
            </div>
        </Link>
    )
}

export default CircleImage;