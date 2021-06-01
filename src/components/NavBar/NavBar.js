import React from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';
import Context from '../../context';
import './NavBar.css';

export default class NavBar extends React.Component {
    static contextType = Context

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.context.handleLog()
      }

    renderLogoutLink() {
        return (
            <div className = 'Header__logged-in'>
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
                    to = '/user/projects'>
                        My Account
                    </Link>
            </div>
        )
    }

    renderDemoLink() {
        return (
            <div className = 'Header__dashboard-demo'>
                <Link
                    to = '/demo'>
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
                <div className = 'NavBar__left'>
                <Link to = {'/'}>Make A Plan Home</Link>
                {TokenService.hasAuthToken()
                            ? this.renderUserLink()
                            : this.renderDemoLink()}
                </div>
                <div className = 'NavBar__right'>
                    {this.renderLoginLink()}
                    {this.renderSignUpLink()}
                </div>
            </div>
        )
    }
}