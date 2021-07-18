import React from 'react'

class Counter extends React.Component {


    constructor() {
        super()

        this.state = {
            
            count:0,
            count2:0


        } 
       this.addFunction = this.addFunction.bind(this)  
       this.subtractFunction = this.subtractFunction.bind(this)
    }
   

    addFunction = () => {
        if (this.state.count<100){
            this.setState({ count: this.state.count + 1 });

        }
        if (this.state.count === this.state.count2) {
            this.setState({ count2:this.state.count2 + 1 })
          }
          else if(this.state.count2 < 100){
            this.setState({ count2: this.state.count2 + 1 })

          }
    }
    subtractFunction = () => {
    if(this.state.count>0) {
    
        this.setState({
          count:this.state.count-1
        
        });
      } 
      else  if (this.state.count2 > 0 && this.state.count2 >= this.state.count) {
        this.setState({ count2:this.state.count2-1 })
        if (this.state.count2 === this.state.count) {
          this.setState({ count:  this.state.count -1})
        }
    }
    }

    render() {
      
        return (
            <div className="box">
                <h2>{this.state.count}</h2>
                <button className="buttonincrement" onClick={this.addFunction}>+</button>
                <button className="buttondecrement" onClick={this.subtractFunction}>-</button>
            </div>
        )
    }

}

export default Counter


 