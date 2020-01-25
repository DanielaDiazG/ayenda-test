import React from "react";
import axios from "axios";
import RectangleText from "../components/RectangleText";
import './Text.css'

class Genres extends React.Component {
    state = {
        genres: []
    }

    componentDidMount() {
        axios.get(`https://rubytify.herokuapp.com/api/v1/genres`).then((resp) => {
            this.setState({ genres: resp.data.data })
        })
    }

    render() {
        console.log(this.state.genres)
        return (
            <div className="text">
                {this.state.genres.map((value) => {
                    const genre = {
                        name: value,
                        url: `/genres/${value}/random_songs`
                    }
                    return <RectangleText key={value} value={genre} />
                })}
            </div>
        )
    }
}

export default Genres