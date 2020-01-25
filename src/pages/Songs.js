import React from "react";
import axios from "axios";
import RectangleText from "../components/RectangleText";
import './Text.css'

class Songs extends React.Component {
    state = {
        songs: []
    }

    componentDidMount() {
        const { match: { params: {id, genre_name } } } = this.props
        const url = id ? `https://rubytify.herokuapp.com/api/v1/albums/${id}/songs` 
        : `https://rubytify.herokuapp.com/api/v1/genres/${genre_name}/random_song`;

        axios.get(url).then((resp) => {
            const data = resp.data.data;
            this.setState({ songs: Array.isArray(data) ? data : [data]})
        })
    }

    render() {
        return (
            <div className="text">
                {this.state.songs.map((value) => {
                    return <RectangleText key={value.id} value={value} />
                })}
            </div>
        )
    }
}

export default Songs