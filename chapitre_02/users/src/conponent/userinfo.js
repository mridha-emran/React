import React from 'react'

class userinfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
            </div>
        )
    }
}

export default userinfo
