import React from 'react';
import {Route} from 'react-router-dom';
import TokenService from '../../services/token-service';
import DashboardNav from '../DashboardNav/DashboardNav';
import Context from '../../context';

export default class Dashboard extends React.Component {
    static contextType = Context

    openNav() {
        document.getElementById('DashboardNav').style.width = '250px';
    }

    renderNavRoutes() {
        return (
            <>
                {['/user', '/user/projects/:projectId', '/user/add-project'].map(path => (
                    <Route
                        exact
                            key = {path}
                            path = {path}
                            component = {DashboardNav}
                    />
                ))}
            </>
        )
    }

    render() {
    const {users} = this.context
    const {username} = this.props

    return (
    <div className = 'Dashboard'>
        <div className = 'Dashboard__main-intro'>
        <h1>
            {TokenService.hasAuthToken()
                ? `Hello ${username}, welcome to your account`
                : 'Demo Dashboard'}
        </h1>
        </div>
    </div>
    )
    }

}