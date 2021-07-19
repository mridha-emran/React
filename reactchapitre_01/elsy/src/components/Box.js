import React from "react"



class Box extends React.Component{
    render(){
        const slider=()=>{
            if(this.props.unit !=="L"){
              return(<input  type ="range" min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.props.onChangeSlide}></input>)
      
            }
          }
        return(
            <div className="box col-sm-3 col-6">
            <span className="material-icons" style={
                    { fontSize: 100, color: this.props.color }}>
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
                {slider()}
            </div>
        )

        
    }
}

export default Box;