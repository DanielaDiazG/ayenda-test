import React from "react";
import { Link } from 'react-router-dom';
import './RectangleText.css'

const Anchor = (props) => props.internal ? <Link to={props.href}>{props.children}</Link> : <a href={props.href}>{props.children}</a>

const RectangleText = (props) => {
    const { value: { name, url, preview_url } } = props;
    return url || preview_url ? (
        <Anchor internal={!!url} href={url || preview_url}>
            <div className="rectangle">
                <span className="rectangle__name">{name}</span>
            </div>
        </Anchor>) 
        : <div className="rectangle">
            <span className="rectangle__name">No preview song</span>
        </div> 

}

export default RectangleText;