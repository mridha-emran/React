import React, { Component } from 'react'
import Card from './Card'

export class Favorites extends Component {
    constructor() {
        super()

        this.state = {
            movies: [],
            favIds: this.getStorage(),
        }
    }

    getStorage = () => {
        const idsFavorites = JSON.parse(localStorage.getItem('favorites')) || []
        return idsFavorites
    }

    getMovie = (id) => {
        fetch(
            `http://api.themoviedb.org/3/movie/${id}?api_key=20e0cad7b9b54645e2cd9dc394f11db8`
        )
            .then((response) => response.json())
            .then((movie) => {
                this.setState({
                    movies: [...this.state.movies, movie],
                })
            })
    }

    componentDidMount() {
        this.state.favIds.map((elem) => this.getMovie(elem))
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Favorites</h1>

                <div className="row mt-4">
                    {this.state.movies.map((elem) => {
                        const movieLink = 'https://image.tmdb.org/t/p/w300/'
                        return (
                            <div className="col-4">
                                <Card
                                    poster_path={movieLink + elem.poster_path}
                                    title={elem.title}
                                    vote_average={elem.vote_average}
                                    vote_count={elem.vote_count}
                                    release_date={elem.release_date}
                                />
                                <p className="col-6">{elem.overview}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Favorites
