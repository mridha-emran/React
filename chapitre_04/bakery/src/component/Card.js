import React from "react"
import '../style/global.css'


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
        .then(result=>URL.createObjectURL(result))
        .then(resimg =>{
            
            this.setState({
                image: resimg
            })
        })
    }


    render(){
        return(
            <button className="img" onClick={() => this.props.onClick(this.props.productName, this.props.price)}>
            <img src= {this.state.image} alt="product"></img>
            </button>
        )
    }
}

export default Card

