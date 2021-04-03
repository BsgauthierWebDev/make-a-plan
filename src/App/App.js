import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';


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
        <Route 
          path = '/sign-up'
          component = {SignUp}
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
            <Link to = '/log-in'>Log In | </Link>
            <Link to = '/sign-up'>Sign Up</Link>
          </nav>
        </header>
        <main className = 'App__main'>
          {this.renderMainRoutes()}
        </main>
        <footer><h6>Copyright 2021 bsgauthierwebdev</h6></footer>
      </div>
    )
  }
}

export default App;