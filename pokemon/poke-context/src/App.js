import {BrowserRouter,Switch,Route,Link} from "react-router-dom"
import Login from "./component/Login";
import Home from "./component/Home";
import './App.css';
import{createContext,useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

export const UserContext = createContext(false);

function App() {
    const[isLogged,setisLogged]=useState(false)
      const setAuth=()=> {
        setisLogged(true?false:true)
    }
    const value ={
        isLogged: isLogged,
        setAuth :setAuth
    }
  return (
  
      <BrowserRouter>
        <UserContext.Provider value= {value}>
          < nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">             
                    <p> <Link to="/">Home</Link> </p>
                    <p> <Link to="/Login">Login</Link></p>
                </div>
            </nav>
             <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Login" exact component={Login} />
             </Switch>
        </UserContext.Provider>
             

           
      </BrowserRouter>

     
    
  );
}

export default App;
