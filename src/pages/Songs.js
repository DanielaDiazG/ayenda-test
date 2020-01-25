import React from "react"
import axios from "axios"

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
            <h1>hola</h1>
        )
    }
}

export default Songs