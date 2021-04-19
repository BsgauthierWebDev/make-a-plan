import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';
import DemoProject from '../DemoProject/DemoProject';
import ContactUs from '../ContactUs/ContactUs';
import Dashboard from '../Dashboard/Dashboard';
import TestPage from '../TestPage/TestPage';
import DashboardMain from '../DashboardMain/DashboardMain';
import Context from '../../context';
import NavBar from '../NavBar/NavBar';

class App extends Component {
  static contextType = Context
  
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
        <Route
          path = '/user'
          component = {Dashboard}
        />
        <Route
          path = '/demo'
          component = {DemoProject}
        />
        <Route
          path = '/contact'
          component = {ContactUs}
        />
        <Route
          path = '/test'
          component = {TestPage}
        />
      </>
    )
  }

  render() {
    return (
      <div className = 'App'>
        <NavBar />
        {/* <header className = 'App__header'>
          <h1>Make A Plan</h1>
          <nav>
            <Link to = 'demo'>Demo | </Link>
            <Link to = '/log-in'>Log In | </Link>
            <Link to = '/sign-up'>Sign Up | </Link>
            <Link to = '/user'>My Account | </Link>
            <Link to = '/contact'>Contact Us |</Link>
            <Link to = '/test'>Test Page | </Link>
          </nav>
        </header> */}
        <main className = 'App__main'>
          {this.renderMainRoutes()}
        </main>
        <footer>
          <h6>Copyright 2021 bsgauthierwebdev</h6>
          <h6>
            <Link to = '/contact'>Contact us</Link>
            </h6>
          </footer>
      </div>
    )
  }
}

export default App;