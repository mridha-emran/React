import {useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserContext} from "../App";
function Home(){
    const[pokemon, setPokemon]= useState("")
    const ContextState = useContext(UserContext);
     useEffect(() =>{
        fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then((response) => {
            return response.json();
          })
          .then((response) => {
            setPokemon(response);
          });  

     },[])
    
     const handleOnClick = () => {
     

      const randomNumber = Math.floor(Math.random() * 100) + 1

      fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        .then((response) => {
           return response.json();
          })
       .then((response) => {
          setPokemon(response);
      });

  }
    if(!pokemon){
      return null
    }
   
    return(
        <div className="container">
                  
                  {ContextState.isLogged ? 
                      <>
                      <h1>pokeapi</h1>
                      <p>Name: {pokemon.name}</p>
                      <p>Height: {pokemon.height}</p>
                      <p>Weight: {pokemon.weight}</p>
                      <p>Type: {pokemon.types[0].type.name}</p></>
                      :<p>login please</p> }
                      <button className="btn btn-primary" onClick={handleOnClick} >Get A Pokemon</button>
                      
                    
                       
        </div>
        

        
    )
    
}
export default Home;