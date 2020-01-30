import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import './RectangleText.css'

const Anchor = (props) => {
    const handleClick = () => {
        props.history.push({
            pathname: '/player',
            state: { song: props.href }
        })
    }

    return props.internal ? <Link to={props.href}>{props.children}</Link> : <span onClick={handleClick}>{props.children}</span>
}

const AnchorRouter = withRouter(Anchor);

const RectangleText = (props) => {
    const { value: { name, url, preview_url } } = props;
    return url || preview_url ? (
        <AnchorRouter internal={!!url} href={url || preview_url}>
            <div className="rectangle">
                <span className="rectangle__name">{name}</span>
            </div>
        </AnchorRouter>) 
        : <div className="rectangle">
            <span className="rectangle__name">No preview song of {name}</span>
        </div> 

}

export default RectangleText;