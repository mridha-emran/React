import React from 'react';
import './App.css';
import Button from './component/Button';
import Card from './component/card';
class App extends React.Component{
  constructor(){
    super()
     this.state={
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",

    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.getCountry = this.getCountry.bind(this)
  }
  componentDidMount(){
    fetch("https://restcountries.eu/rest/v2/name/france")
    .then(response=>response.json())
    .then(result => { 
      this.setState=({
        name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
      })
    })
    .catch(err => console.error("err in componentDidMoun", err))
  }

  getCountry(country){
    fetch("https://restcountries.eu/rest/v2/name/"+ country)
    .then(Response => Response.json())
      .then(result => {
      console.log(result)

          this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        })
      })

  }
  render(){
    return(
      <div>
         <Button onClick={() => this.getCountry("france")}>France</Button>
         <Button onClick={() => this.getCountry("brazil")}>Brazil</Button>
         <Button onClick={() => this.getCountry("croatia")}>Croatia</Button>
         <Card name={this.state.name} capital={this.state.capital} flag={this.state.flag}
          population={this.state.population} region={this.state.region} />
      </div>
    )
      
  }
}



export default App;
