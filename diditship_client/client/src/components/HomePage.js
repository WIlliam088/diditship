import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('submit form here')
        console.log('state', this.state)
    }

    render() {
        return (
            <div>
                <h2>Login </h2>
                <form action="/login" method="post">
                    <input name="username" onChange={this.handleChange} />
                    <input name="password" type="password" onChange={this.handleChange} />

                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default HomePage