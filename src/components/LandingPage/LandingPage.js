import React, {Component} from 'react';

class LandingPage extends Component {
    render() {
        return (
            <>
                <div className = 'LandingPage'>
                    <h1>Welcome to Make a Plan</h1>
                </div>
                <div className = 'LandingPage__intro'>
                    <h2>The project planning site meant to keep you on task and on point</h2>
                </div>
                <div className = 'LandingPage__description'>
                    <h3>Make a Plan keeps you organized for any project you need to complete.</h3>
                    <p>Simply add all the materials you need and the required steps. As you complete a step, cross it off and move on to the next one.</p>
                    <p>We're here as an easy to read, visual task manager designed to get you to the end so your time and work are as efficient as possible.</p>
                </div>
                <div className = 'LandingPage__join'>
                    <p>Sign up today to get more organized</p>
                </div>
            </>
        )
    }
}

export default LandingPage;