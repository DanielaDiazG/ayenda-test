import React from "react";
import axios from "axios";
import CircleImage from "../components/CircleImage";
import "./Artists.css";

class Artists extends React.Component {
    state = {
        artists: []
    }

    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        axios.get("https://rubytify.herokuapp.com/api/v1/artists").then(res => {
            this.setState({ artists: res.data.data });
        })
    }

    render() {
        return (
            <div className="artists">
                {this.state.artists.map((value) => {
                    return <CircleImage key={value.id} value={value} type="artist" />
                })}
            </div>
        )
    }
}

export default Artists;