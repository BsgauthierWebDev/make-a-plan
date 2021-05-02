import React from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';
import Context from '../../context';

export default class NavBar extends React.Component {
    static contextType = Context

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.context.handleLog()
    }

    renderLogoutLink() {
        return (
            <div className = 'Header__loggen-in'>
                <Link
                    onClick = {this.handleLogoutClick}
                    to = '/'>
                        Log Out
                    </Link>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className = 'Header__not-logged-in'>
                <Link
                    to = '/log-in'>
                        Log In
                    </Link>
            </div>
        )
    }
    
    renderSignUpLink() {
        return (
            <div className = 'Header__sign-up'>
                <Link
                    to = '/sign-up'>
                        Sign Up
                    </Link>
            </div>
        )
    }

    renderUserLink() {
        return (
            <div className = 'Header__dashboard-logged-in'>
                <Link
                    to = '/user'>
                        My Account
                    </Link>
            </div>
        )
    }

    renderDemoLink() {
        return (
            <div className = 'Header__dashboard-demo'>
                <Link
                    to = '/user'>
                        Demo
                </Link>
            </div>
        )
    }

    handleNav() {
        var x = document.getElementById('menu');
        if (x.className === 'menu') {
            x.className += 'responsive';
        } else {
            x.className = 'menu';
        }
    }

    render() {
        return (
            <div className = 'NavBar'>
                {/* <div className = 'button-wrapper'>
                    <button className = 'icon' id = 'nav-button' onClick = {e => this.handleNav()}>Nav Menu</button>
                </div> */}
                <ul id = 'menu' className = 'NavManu'>
                    <li className = 'logo'><Link to = {'/'}>Make A Plan</Link></li>
                    {/* <li>
                        {TokenService.hasAuthToken()
                            ? this.renderLogoutLink()
                            : this.renderLoginLink()}
                    </li> */}
                    <li>{this.renderLoginLink()}</li>
                    <li>{this.renderLogoutLink()}</li>
                    <li>{this.renderSignUpLink()}</li>
                    <li>
                        {TokenService.hasAuthToken()
                            ? this.renderUserLink()
                            : this.renderDemoLink()}
                    </li>
                    <li>
                        {TokenService.hasAuthToken()
                            ? null
                            : <Link to = {'/sign-up'}>Create your account</Link>}
                    </li>
                </ul>
            </div>
        )
    }
}