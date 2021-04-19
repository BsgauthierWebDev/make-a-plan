import React from 'react';
import Context from '../../context';
import Project from '../Project/Project';
import {findProject} from '../../helpers';
import ProjectApiService from '../../services/project-api-service';
import TokenService from '../../services/token-service';

export default class DashboardProject extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        },
        history: {
            goBack: () => { }
        },
    }

    static contextType = Context

    handleProjectDelete = e => {
        e.preventDefault()
        const {projectId} = this.props.match.params
        ProjectApiService.deleteProject({id: projectId})
            .then(res => {
                this.context.deleteProject(projectId)
                this.props.history.goBack()
            })
            .catch(error => {
                console.error('delete project', {error})
            })
    }

    render() {
        const {
            projects = [],
            materials = [],
            steps = []
        } = this.context
        const {projectId} = this.props.match.params
        const project = findProject(projects, projectId) || {content: ''}

        return (
            <div className = 'DashboardProject'>
                <button
                    className = 'back-button' 
                    onClick = {() => this.props.history.goBack()}>
                        Back
                </button>
                <div className = 'DashboardProject__name'>
                    <Project
                        id = {project.id}
                        name = {project.name}
                        modified = {project.modified}
                        onDeleteProject = {this.handleProjectDelete}
                        history = {this.props.history}
                    />
                </div>
                <div className = 'DashboardProject__description'>
                    <h3>Description</h3>
                    {project.description.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                    )}
                </div>
                <div className = 'DashboardProject__materials'>
                    <h3>Materials: </h3>
                </div>
                <div className = 'DashboardProject__steps'>
                    <h3>Steps: </h3>
                </div>
                {TokenService.hasAuthToken()
                    ? <button className = 'delete-button' onClick = {this.handleProjectDelete}>
                        Delete
                        </button>
                    : null}
            </div>
        )
    }
}