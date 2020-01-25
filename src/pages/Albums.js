import React from "react";
import axios from "axios";
import CircleImage from "../components/CircleImage";
import "./Albums.css";

class Albums extends React.Component {
    state = {
        albums: []
    }

    componentDidMount() {
        const { match: { params: { id }}} = this.props;
        axios.get(`https://rubytify.herokuapp.com/api/v1/artists/${id}/albums`).then(res => {
            this.setState({ albums: res.data.data });
        })
    }

    render() {
        return (
            <div className="albums">
                {this.state.albums.map((value) => {
                    return <CircleImage key={value.id} value={value} />
                })}
            </div>
        )
    }
}

export default Albums;