import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './component/Home'
import Movie from './component/Movie';


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      
        <div>

          <h1>Movies</h1>

        </div>
        <Switch>
          <Route path = '/' exact component = {Home}></Route> 
          <Route path = '/:id' exact component = {Movie}></Route>

        </Switch>

      </BrowserRouter>
    )
  }
}


export default App;
