import React from "react"


class Card extends React.Component{
    render(){
        return(
            
            <div >
                 {/* <div className="m-4 row ">
                 <div className="card" style={{ width: "25rem", height: "60rem" }}> */}

                <img  src={"https://image.tmdb.org/t/p/w300" +this.props.poster_path} alt="" />
                {/* <div className="card-body"> */}
                <p>Title: {this.props.title}</p>
                <span className="">vote_average: {this.props.vote_average}</span>
                <span className="m-4">vote_count: {this.props.vote_count}</span>
                <p className="mt-2">Release date : {this.props.release_date}</p>
                {/* <p>Description : {this.props.overview}</p> */}

                 {/* </div>
                 </div>
                 </div> */}
            </div>

        )
    }
}

export default Card