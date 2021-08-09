import {BrowserRouter,Switch,Route,Link} from "react-router-dom"
import Login from "./component/Login";
import Home from "./component/Home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  
      <BrowserRouter>
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
             

           
      </BrowserRouter>

     
    
  );
}

export default App;
