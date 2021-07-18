import React from "react"
import './App.css';
import Counter from "./components/Counter";

class App extends React.Component {

  constructor() {
    super()
    this.state = {

      count: 0,
      count2: 0,
    }
   
  }

  render() {
    return (

      <div>

        <h1>Counter</h1>
        
        <Counter />
        <Counter />
        

      </div>
    );
  }
}

export default App;


