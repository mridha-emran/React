import {useState,useEffectEffect, useEffect } from 'react';
import Login from './Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home(){
    const[pokemon, setPokemon]= useState("")
     useEffect(() =>{
        fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then((response) => {
            return response.json();
          })
          .then((response) => {
            setPokemon(response.results);
          });  

     },[])

    return(
        <div className="container">

                  <h1>Home</h1>        
        </div>
        

        
    )
}
export default Home;