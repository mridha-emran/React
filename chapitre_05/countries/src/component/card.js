import React from "react";

class Card extends React.Component {

  render() {
    return (
      <section>
       <div>
          <p> <img src={this.props.flag} alt="flag"/></p>
          <p>Name = {this.props.name}</p>
          <p>Capital = {this.props.capital}</p>
          <p>Population =  {this.props.population}</p>
          <p>Region = {this.props.region}</p>
        </div>
      </section>
    );
  }
}

export default Card;