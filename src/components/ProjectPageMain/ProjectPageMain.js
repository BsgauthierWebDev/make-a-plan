import React from 'react';
import Project from '../Project/Project';
import ApiContext from '../../ApiContext';

export default class ProjectPageMain extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = ApiContext

    handleDeleteProject = projectId => {
        this.props.history.push('/my-projects')
    }

    render() {
        const {projects = []} = this.context
        const {projectId} = this.props.match.params
        const project = projects.find(project => project.id == projectId)

        return (
            <section className = 'ProjectPageMain'>
                <Project
                    id = {project.id}
                    name = {project.name}
                    modified = {project.modified}
                    onDeleteProject = {this.handleDeleteProject}
                    history = {this.props.history}
                />
                <div className = 'ProjectPageMain__description'>
                    <h4>Description: </h4>
                    {project.description.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                    )}
                </div>
            </section>
        )
    }
}