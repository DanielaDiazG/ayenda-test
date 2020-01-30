import React from "react";

class MusicPlayer extends React.Component{
    render(){
        const { location = {} } = this.props;
        const { state = {} } = location;
        const { song } = state;
        return(
            <div>
                {song ? 
                    (<audio controls>
                        <source src={song}></source>
                    </audio>) : <span>No tiene cancion</span>}
            </div>
        )
    }
}

export default MusicPlayer;