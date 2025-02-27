import React from "react";
import './App.css';
import Box from "./components/Box";
import './styles/global.css'
import "bootstrap/dist/css/bootstrap.min.css"

const tempMin=-20
const tempMax = 40
const heartMin = 80
const heartMax =180
const stepsMin = 0
const stepsMax =50000



class App extends React.Component {

  constructor(){
    super()
    this.state={
      water : 0,
      heart : 120,
      temperature : -10,
      steps  : 3000
    }
    this.onHeartChange=this.onHeartChange.bind(this)
    this.onStepsChange=this.onStepsChange.bind(this)
    this.onTemperatureChange=this.onTemperatureChange.bind(this)
    this.calculateWater=this.calculateWater.bind(this)
  }

  onHeartChange(e){
   this.setState(
      {
        heart:e.target.value
      }
      )
      this.calculateWater()
    
  }
  onStepsChange(e){
    this.setState(
      {
        steps:e.target.value
      }
    )
    this.calculateWater()
  }
  onTemperatureChange(e){
    this.setState(
      {
        temperature:e.target.value
      }
    )
    this.calculateWater()
  }

  calculateWater(){
    let addTemp =0;
    let addHeart =0;
    let addSteps = 0;
    if (this.state.temperature > 20) {
       addTemp= 0.02 * (this.state.temperature - 20)  
    }

    if (this.state.heart > 120) {
      addHeart = 0.0008 * (this.state.heart - 120)
    }

    if (this.state.steps > 10000) {
      addSteps = 0.00002 * (this.state.steps - 10000)  
    }

    let total = addTemp + addHeart + addSteps;
    this.setState({ water: (1.5 + total )})
  
}
  
  render() {
   
    return (
      <div className="container-fluid">

        <div className="row">

          {/* <p> Heart: {heartMin}</p>
          <p> Temperature: {tempMin}</p>
          <p> Steps: {stepsMin}</p> */}

          <Box icon="local_drink" color="#3A85FF"  value={this.state.water} unit="L" > </Box>
          <Box icon="directions_walk" color="black" min={stepsMin} max={stepsMax} value={this.state.steps} unit="steps" onChangeSlide={this.onStepsChange}/>
          <Box icon="favorite" color="red" min={heartMin} max={heartMax} value={this.state.heart} unit="bpm" onChangeSlide={this.onHeartChange} />
          <Box icon="wb_sunny" color="yellow" min={tempMin} max={tempMax} value={this.state.temperature} unit="°c" onChangeSlide={this.onTemperatureChange} />
        
        </div>
      </div>
    );
  }
}

export default App;


