import React from 'react'
import { Link } from 'react-router-dom'
import Movice from '../movice.json'

class Home extends React.Component {
    render() {
        return (
            <ul>
                {Movice.map((elem) => {
                    return (
                        <li>
                            <Link to={'/' + elem.id}> {elem.title} </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
export default Home
