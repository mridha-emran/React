import React from "react";

class Card extends React.Component {

  render() {
    return (
      <section>
       <div>
          <p>Name = {this.props.name}</p>
          <p>Capital = {this.props.capital}</p>
          <p>Flag = {this.props.flag}</p>
          <p>Population =  {this.props.population}</p>
          <p>Region = {this.props.region}</p>
        </div>
      </section>
    );
  }
}

export default Card;