  
import React, { Component } from 'react'
import Card from './Card'

export class Favorites extends Component {

    constructor() {
        super()

        this.state = {
            movies: [],
            favIds: this.getStorage()
        }
       
    }

    getStorage =()=> {
        const idsFavorites = JSON.parse(localStorage.getItem("favorites")) || []
        return idsFavorites
    }



    getMovie=(id)=> {
        fetch( `http://api.themoviedb.org/3/movie/${id}?api_key=20e0cad7b9b54645e2cd9dc394f11db8`)

        
            .then(response => response.json())
            .then(movie => {
                
                this.setState({
                    movies: [...this.state.movies, movie]
                })
            })
    }


    componentDidMount() {
        this.state.favIds.map((elem) => this.getMovie(elem))
    }

    render() {
            
        return (
            <div>
                <h1>Favorites</h1>
                <ul>
                    {this.state.movies.map((elem) => {
                        const movieLink = "https://image.tmdb.org/t/p/w300/"
                        return <li>
                            <Card
                                poster_path={movieLink + elem.poster_path}
                                title={elem.title}
                                release_date={elem.release_date}
                                overview={elem.overview}
                            />
                        </li>
                    })}
                </ul>

            </div>
        )
    }
}

export default Favorites