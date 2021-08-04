import React from "react";
import Movice from "../movice.json";


class Movie extends React.Component {

    render() {

      const currentMovie = Movice.find(elem => {
            return (parseInt(this.props.match.params.id) === elem.id)})
        
        return (
             <div>
                <p><img src = {currentMovie.image} alt="movice"/></p>
                <p>Id : {Movice.id}</p>
                <p>Title : {currentMovie.title}</p>
                <p>Director : {currentMovie.director}</p>
                <p>Stars : {currentMovie.stars}</p>
                <p>Description : {currentMovie.description}</p>
            </div >

        );
    }
}

export default Movie;