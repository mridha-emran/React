import React from "react"
import Card from "./Card";

class Poplar extends React.Component{
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
  componentDidMount(){
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=20e0cad7b9b54645e2cd9dc394f11db8")
	.then(res => res.json())
	.then(movie => {
		this.setState({
            movies: movie.results
        })
    
	})
	.catch(error => console.error(error));


  }
    render(){
        return(
            <div>
                <h1>Poplar</h1>

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
export default Poplar;