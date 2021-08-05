import React from "react"


class Card extends React.Component{
    render(){
        return(
            
            <div>
                <img src={"https://image.tmdb.org/t/p/w300" +this.props.poster_path} alt="" />
                <p>Title: {this.props.title}</p>
                <p>Release date : {this.props.release_date}</p>
                <p>Description : {this.props.overview}</p>
            </div>

        )
    }
}

export default Card