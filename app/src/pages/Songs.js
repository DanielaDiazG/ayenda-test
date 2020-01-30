import React from "react";
import axios from "axios";
import RectangleText from "../components/RectangleText";
import './Text.css'

class Songs extends React.Component {
    state = {
        songs: []
    }

    componentDidMount() {
        console.log(this.state.songs)
        const { match: { params: { id, genre_name } } } = this.props

        if (id) {
            const url = `https://rubytify.herokuapp.com/api/v1/albums/${id}/songs`;

            axios.get(url).then((resp) => {
                const data = resp.data.data;
                this.setState({ songs: data })
            })
        } else {
            const url = `https://rubytify.herokuapp.com/api/v1/genres/${genre_name}/random_song`;

            for (let i = 0; i < 3; i++) {
                axios.get(url).then((resp) => {
                    const data = resp.data.data;
                    this.setState({ songs: [...this.state.songs, data]})
                })
            }
        }
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