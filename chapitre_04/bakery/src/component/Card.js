import React from "react"


class Card extends React.Component{
    constructor(){
        super()
            this.state={
                image:'public/images/item.png'
            }
    
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/' + this.props.productName + '.png')
        .then(res => res.blob())
        .then(urlB=>URL.createObjectURL(urlB))
        .then(urlImage =>{
            console.log(urlImage)
            this.setState({
                image: urlImage
            })
        })
    }


    render(){
        return(
            <button className="img" onClick={() => this.props.onClick(this.props.productName, this.props.price)}>
            <img src= {this.state.image}></img>
            </button>
        )
    }
}

export default Card

