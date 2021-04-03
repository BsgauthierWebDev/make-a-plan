import React, {Component} from 'react';
import './LogIn.css';

class LogIn extends Component {
    render() {
        return (
            <div className = 'LogIn'>
                <div className = 'LogIn__header'>
                    <h2>Enter your username and password to log into your account</h2>
                </div>
                <form className = 'Login__form'>
                    <label htmlFor = 'Login__form-username'>
                        Username: 
                    </label>
                    <input type = 'text' name = 'username' id = 'username' />
                    <br />
                    <label htmlFor = 'Login__form-password'>
                        Password: 
                    </label>
                    <input type = 'password' name = 'password' id = 'password' />
                    <br />
                    <button type = 'submit'>Sign In</button>
                    <br />
                    <p> <em>Forgot Password</em></p>
                </form>
            </div>
        )
    }
}

export default LogIn;