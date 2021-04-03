import React, {Component} from 'react';

class LandingPage extends Component {
    render() {
        return (
            <>
                <div className = 'header'>
                    <h1>Welcome to Make a Plan</h1>
                </div>
                <div className = 'header-intro'>
                    <h2>The project planning site meant to keep you on task and on point</h2>
                </div>
                <div className = 'header-description'>
                    <h3>Make a Plan keeps you organized for any project you need to complete.</h3>
                    <p>Simply add all the materials you need and the required steps. As you complete a step, cross it off and move on to the next one.</p>
                    <p>We're here as an easy to read, visual task manager designed to get you to the end so your time and work are as efficient as possible.</p>
                </div>
                <div className = 'header-join'>
                    <p>Sign up to get more organized</p>
                </div>
                <div className = 'header-create_account'>
                    <form className = 'signup-form'>
                    <div>
                        <label htmlFor = 'signup-form__email'>
                        Email: 
                        </label>
                        <input type = 'text' name = 'email' id = 'email' />
                    </div>
                    <div>
                        <label htmlFor = 'signup-form__username'>
                        Username: 
                        </label>
                        <input type = 'text' name = 'username' id = 'username' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' />
                        </div>
                    <div>
                        <label htmlFor = 'signup-form__repeat-password'>
                        Repeat Password: 
                        </label>
                        <input type = 'password' name = 'repeat-password' id = 'repeat-password' />
                    </div>
                    <button type = 'submit'>Sign Up!</button>
                    </form>
                </div>
            </>
        )
    }
}

export default LandingPage;