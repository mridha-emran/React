import React from 'react'
import './App.css'
import Button from './component/Button'
import Card from './component/card'
import './component/style/global.css'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            capital: '',
            flag: '',
            population: '',
            region: '',
        }
        // this.componentDidMount = this.componentDidMount.bind(this)
        this.getCountry = this.getCountry.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:8000/france')
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    name: result.data[0].name,
                    capital: result.data[0].capital,
                    flag: result.data[0].flag,
                    population: result.data[0].population,
                    region: result.data[0].region,
                })
            })
            .catch((err) => console.error('err in componentDidMoun', err))
    }

    getCountry(country) {
        console.log(country)
        fetch('https://restcountries.eu/rest/v2/name/' + country)
            .then((response) => response.json())
            .then((result) => {
                console.log(result[0])
                this.setState({
                    name: result[0].name,
                    capital: result[0].capital,
                    flag: result[0].flag,
                    population: result[0].population,
                    region: result[0].region,
                })
            })
    }

    render() {
        console.log(this.state.name)
        return (
            <div>
                <div className="divButton">
                    <Button onClick={() => this.getCountry('france')}>
                        France
                    </Button>
                    <Button onClick={() => this.getCountry('brazil')}>
                        Brazil
                    </Button>
                    <Button onClick={() => this.getCountry('croatia')}>
                        Croatia
                    </Button>
                </div>
                <div className="information">
                    <Card
                        name={this.state.name}
                        capital={this.state.capital}
                        flag={this.state.flag}
                        population={this.state.population}
                        region={this.state.region}
                    />
                </div>
            </div>
        )
    }
}

export default App
