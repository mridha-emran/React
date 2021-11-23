import React from 'react'

class Button extends React.Component {
    render() {
        if (this.props.isSelected === this.props.children) {
            ;<div>
                <button
                    style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                    }}
                    className="btn btn-outline-primary"
                    onClick={this.props.onClick}
                >
                    {this.props.children}
                </button>
            </div>
        } else {
            return (
                <div>
                    <button
                        className="btn btn-outline-primary"
                        onClick={this.props.onClick}
                    >
                        {this.props.children}
                    </button>
                </div>
            )
        }
    }
}

export default Button
