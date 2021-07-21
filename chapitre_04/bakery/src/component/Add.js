import React from "react";

class Add extends React.Component {
    constructor() {
        super();
        this.state = {
          productName: "",
          price: 1,
        };
      }

      updateProductName = (e) => {
        this.setState({ productName: e.target.value });
      };
    
      updatePrice = (e) => {
        this.setState({ price: e.target.value });
      };

  render() {
    return (
      <div>
         <div>
        <input type="text" onChange={this.updateProductName} /> <br />
        <input
          type="range"
          min="1"
          max="10"
          onChange={this.updatePrice}
          value={this.state.price}
        />
        <p>{this.state.price}€</p>
        <button onclick>Add</button>
      </div>
        
      </div>
    );
  }

}

export default Add;