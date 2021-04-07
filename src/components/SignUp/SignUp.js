import React, {Component} from 'react';

class SignUp extends Component {
    render() {
        return (
            <div className = 'SignUp'>
                <h2>Create Your Account</h2>
                <div className = 'SignUp__details'>
                    <form className = 'SignUp__info'>
                        <label htmlFor = 'SignUp__info-email'>
                            Email Address
                        </label>
                        <input type = 'text' name = 'email' id = 'email' />
                        <br />
                        <label htmlFor = 'SignUp__info-username'>
                            Username: 
                        </label>
                        <input type = 'text' name = 'username' id = 'username' />
                        <br />
                        <label htmlFor = 'SignUp__info-password'>
                            Password: 
                        </label>
                        <input type = 'password' name = 'password' id = 'password' />
                        <br />
                        <label htmlFor = 'SignUp__info-repeat-password'>
                            Repeat Password: 
                        </label>
                        <input type = 'password' name = 'repeat-password' id = 'repeat-password' />
                        <br />
                        <button type = 'submit'>Sign Up!</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp;