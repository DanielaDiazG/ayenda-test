import React from "react";
import axios from "axios";
import CircleImage from "../components/CircleImage";
import "./Artists.css";

class Artists extends React.Component {
    state = {
        artists: [],
        genres: []
    }

    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        axios.get("https://rubytify.herokuapp.com/api/v1/artists").then(res => {
            this.setState({ artists: res.data.data });
        })
        axios.get(`https://rubytify.herokuapp.com/api/v1/genres`).then((resp) => {
            this.setState({ genres: resp.data.data })
        })
    }

    handleRandomSong = () => {
        const numGenres = this.state.genres.length;
        const randomNumber = Math.floor(Math.random() * numGenres)
        axios.get(`https://rubytify.herokuapp.com/api/v1/genres/${this.state.genres[randomNumber]}/random_song`).then((resp) => {
            if (resp.data.data) {
                this.props.history.push({
                    pathname: `/genres/${this.state.genres[randomNumber]}/random_songs`
                })
            }
        })
    }

    render() {
        return (
            <div className="artists">
                {this.state.artists.map((value) => {
                    return <CircleImage key={value.id} value={value} type="artist" />
                })}
                <button onClick={this.handleRandomSong}>Cancion Aleatoria</button>
            </div>
        )
    }
}

export default Artists;