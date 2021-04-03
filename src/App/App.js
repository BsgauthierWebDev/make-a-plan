import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import LogIn from '../LogIn/LogIn';


class App extends Component {
  
  renderMainRoutes() {
    return (
      <>
        <Route 
          exact path = '/' 
          component = {LandingPage} 
        />
        <Route
          path = '/log-in'
          component = {LogIn}
        />
      </>
    )
  }

  render() {
    return (
      <div className = 'App'>
        <header className = 'App__header'>
          <h1>Make A Plan</h1>
          <nav>
            <Link to = '/'>Home | </Link>
            <Link to = '/log-in'>Log In</Link>
          </nav>
        </header>
        <main className = 'App__main'>
          <div className = 'App__intro'>
            <h1>Welcome to Make A Plan!</h1>
            <h2>The project planning site meant to keep you on task
              and on point
            </h2>
          </div>
          <div className = 'App__description'>
          <h3>Make a Plan keeps you organized for any project you need to complete.</h3>
            <p>Simply add all the materials you need and the required steps. As you complete 
              a step, cross it off and move on to the next one.</p>
            <p>We're here as an easy to read, visual task manager designed to get you to the 
              end so your time and work are as efficient as possible.</p>
          </div>
          <div className = 'App__join'>
            Sign up to get more organized
          </div>
          <button type = 'button'>Sign Up</button>
        </main>
        <footer><h6>Copyright 2021 bsgauthierwebdev</h6></footer>
      </div>
    )
  }
}

export default App;