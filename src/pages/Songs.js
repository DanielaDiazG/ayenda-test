import React from "react";
import axios from "axios";
import RectangleText from "../components/RectangleText";

class Songs extends React.Component {
    state = {
        songs: []
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props
        axios.get(`https://rubytify.herokuapp.com/api/v1/albums/${id}/songs`).then((resp) => {
            this.setState({ songs: resp.data.data })
        })
    }

    render() {
        return (
            <div>
                {this.state.songs.map((value)=>{
                    return <RectangleText key={value.id} value={value}/>
                })}
            </div>
        )
    }
}

export default Songs