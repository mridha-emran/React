import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './component/Home'
import WeeklyBattle from './component/weekly-battle'
import Weekly from './component/Weekly'
import Poplar from './component/Poplar'
import PoplarBattle from './component/Poplar-battle'
import Favorites from './component/Favorites'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Home />
                <Switch>
                    <Route path="/" exact component={Poplar} />
                    <Route path="/weekly" exact component={Weekly} />
                    <Route
                        path="/weeklyBattle"
                        exact
                        component={WeeklyBattle}
                    />
                    <Route
                        path="/popularBattle"
                        exact
                        component={PoplarBattle}
                    />
                    <Route path="/favorites" exact component={Favorites} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
