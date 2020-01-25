import React from "react";
import './CircleImage.css';
import { Link } from 'react-router-dom';

const CircleImage = (props) => {
    const { value: { id, name, image }, centered } = props;
    return (
        <Link to={`/artists/${id}/albums`} >
            <div className="circle">
                <img className="circle__image" src={image} alt={name} />
                <span className={`circle__name ${centered ? "circle__name--centered" : "circle__name--bottom"}`}>
                    {name}
                </span>
            </div>
        </Link>
    )
}

export default CircleImage;