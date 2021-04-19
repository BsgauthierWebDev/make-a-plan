import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Context from '../../context';
import TokenService from '../../services/token-service';

export default class DashboardMain extends Component {
    static contextType = Context
    render() {
        const {projects = []} = this.context || {content: ''}
        return (
            <div className = 'DashboardMain'>
                <div className = 'DashboardMain__header'>
                    <h1>
                        {TokenService.hasAuthToken()
                            ? 'Your Dashboard'
                            : 'Demo Dashboard'}
                    </h1>
                    <p>Welcome to <span className = 'logo'>Make A Plan</span>!</p>
                </div>
                <div className = 'projectListMain'>
                    {projects.map(project =>
                        <div className = 'project-link-main' key = {project.id}>
                            <Link
                                to = {`/user/project/${project.id}`}
                            >
                               {project.name}
                            </Link>
                </div>
                )}
            </div>
        </div>
        )
    }
}