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
        console.log("imprime daniela tu puedes")
    }

    render() {
        return (
            <div className="artists">
                {this.state.artists.map((value) => {
                    return <CircleImage key={value.id} value={value} type="artist" />
                })}
                <form action={`/genres/${state.genres[1]}/random_songs`}>
                    <input type="submit" value="Cancion Aleatoria" />
                </form>
            </div>
        )
    }
}

export default Artists;