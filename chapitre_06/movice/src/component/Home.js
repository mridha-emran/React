import React from "react"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends React.Component{
    render(){
        return(
            <div className="container">
                

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <li className="nav-link"><Link to="/">Home</Link></li>
              <li className="nav-link"><Link to="/weekly">Weekly</Link></li>
              <li className="nav-link"><Link to="/weeklyBattle">WeeklyBattle</Link></li>
              <li className="nav-link"><Link to="/popularBattle">PopularBattle</Link></li>
              <li className="nav-link"><Link to="/favorites">Favorites</Link></li>
            </div>
          </nav>
            </div>
        )
    }
}
export default Home;