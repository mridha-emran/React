
import React, { Component } from 'react';
import Card from './Card';

class PopularBattle extends Component {
    favoriteId = [];
    state = {
        movies: [],
        currentBattle: 0
        
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

      onClick = (id) => {
        this.setState({
            currentBattle:this.state.currentBattle + 2
        })
        this.favoriteId.push(id)
        localStorage.setItem("favorites", JSON.stringify(this.favoriteId))
    }


    render() {
        console.log(this.state.movies[this.state.currentBattle])
       
          if(this.state.movies.length===0)
          {return null} 
          if(this.state.currentBattle===this.state.movies.length){
            return (<p className="jumbotron display-1 text-center">you have seen all movies</p>)
          }
        return (
            
                <div className="container">
                    <div className="row">
                        <div className="col-6"onClick={() => { this.onClick(this.state.movies[this.state.currentBattle].id) }}>
                        <Card
                                poster_path={this.state.movies[this.state.currentBattle].poster_path}
                                title={this.state.movies[this.state.currentBattle].title}
                                release_date={this.state.movies[this.state.currentBattle].release_date}
                                overview={this.state.movies[this.state.currentBattle].overview}
                            />
                        </div>
                        <div className="col-6" onClick={() => { this.onClick(this.state.movies[this.state.currentBattle + 1].id) }}>
                        <Card
                                poster_path={this.state.movies[this.state.currentBattle+1].poster_path}
                                title={this.state.movies[this.state.currentBattle].title+1}
                                release_date={this.state.movies[this.state.currentBattle+1].release_date}
                                overview={this.state.movies[this.state.currentBattle+1].overview}
                            />
                        </div>
                    </div>
                </div>
        )
    }

    
}

export default PopularBattle;