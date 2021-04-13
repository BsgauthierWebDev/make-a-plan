import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Project from '../Project/Project';
import ApiContext from '../../ApiContext';
import {getProjectsForUser} from '../../projects-helpers';

export default class ProjectListMain extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = ApiContext

    render() {
        const {user_id} = this.props.match.params
        const {projects = []} = this.context
        const projectsForUser = getProjectsForUser(projects, user_id)

        return (
            <section className = 'ProjectListMain'>
                <div className = 'ProjectListMain__button-container'>
                    <Link to = '/add-project'>
                        <button
                            type = 'button'
                            className = 'ProjectListMain__add-project-button'
                        >
                            Add Project
                        </button>
                    </Link>
                </div>
                <ul>
                    {projectsForUser.map(project =>
                        <li key = {project.id}>
                            <Project
                                id = {project.id}
                                name = {project.name}
                                modifled = {project.modified}
                            />
                        </li>
                    )}
                </ul>
            </section>
        )
    }
}