import React from 'react';
import {Link} from 'react-router-dom';
import Project from '../Project/Project';
import Context from '../../context'
import TokenService from '../../services/token-service';
import ProjectApiService from '../../services/project-api-service';
import {getProjectsForUser} from '../../helpers';

export default class ProjectListMain extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = Context

    render() {
        const {user_id} = this.props.match.params
        const {projects = []} = this.context
        // const projectsForUser = getProjectsForUser(projects, user_id)

        return (
            <section className = 'ProjectListMain'>
                <div className = 'ProjectListMain__button-container'>
                    <Link to = '/user/new-project'>
                        <button
                            type = 'button'
                            className = 'ProjectListMain__add-project-button'
                        >
                            Add Project
                        </button>
                    </Link>
                </div>
                <div className = 'ProjectListMain__projects'>
                    <ul>
                        {projects.map(project =>
                            <li key = {project.id}>
                                <Project
                                    id = {project.id}
                                    name = {project.name}
                                    modified = {project.modified}
                                />
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <h1>Test</h1>
                </div>
            </section>
        )
    }
}