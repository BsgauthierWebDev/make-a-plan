import React from 'react';
import {NavLink} from 'react-router-dom';
import Context from '../../context';

export default class DashboardNav extends React.Component {
    static contextType = Context

    closeNav() {
        document.getElementById('DashboardNav').style.width = '0';
    }

    render() {
        const {projects = []} = this.context
        
        return (
            <div className = 'DashboardNav' id = 'DashboardNav'>
                <div className = 'closeContainer'>
                    <button className = 'closeButton' onClick = {e => this.closeNav()}>
                        <label className = 'close' htmlFor = 'close'>Close</label>
                    </button>
                </div>
                <ul className = 'DashboardNav__list'>
                    {projects.map(project =>
                        <li key = {project.id}>
                            <NavLink
                                className = 'DashboardNav__project-link'
                                to = {`/user/projects/${project.id}`}
                            >
                                {project.name}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}