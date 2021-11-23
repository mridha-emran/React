import React from 'react'

class List extends React.Component {
    render() {
        if (this.props.items.length === 0) {
            return (
                <div className="mt-2">
                    <span className="h1" style={{ fontSize: 30 }}>
                        No items are available
                    </span>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>List</h3>
                    <ul>
                        {this.props.items.map((items, index) => {
                            return (
                                <li key={index}>
                                    {`name : ${items.name}`}
                                    <br />
                                    {`price : ${items.price} €`}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
    }
}

export default List
