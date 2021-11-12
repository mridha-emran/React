import React from "react"
import Card from "./Card";
import moment from "moment";


class Weekly extends React.Component{

    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
  componentDidMount(){
    let TODAY = moment().format("YYYY-MM-DD");
    let LAST_WEEK = moment().subtract(7, "days").format("YYYY-MM-DD");
   
    fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=20e0cad7b9b54645e2cd9dc394f11db8`)
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
            <div className="container">
                <h1 className="text-center">weekly</h1>

                <div className="row mt-4">
                    {this.state.movies.map((elem) => {
                    const movieLink = "https://image.tmdb.org/t/p/w300/"
                        return <div className="col-3">
                            
                            <Card
                                poster_path={movieLink + elem.poster_path}
                                title={elem.title}
                                vote_average={elem.vote_average}
                                vote_count={elem.vote_count}
                                release_date={elem.release_date}
                              
                            />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
export default Weekly;