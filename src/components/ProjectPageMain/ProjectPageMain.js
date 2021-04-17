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
        const {
            projects = [],
            materials = [],
            steps = []
        } = this.context
        const {projectId, itemId, stepId} = this.props.match.params
        const project = projects.find(project => project.id == projectId)
        const materials = materials.find(item => item.id == itemId)
        const steps = steps.find(step => step.id == stepId)

        return (
            <section className = 'ProjectPageMain'>
                <Project
                    id = {project.id}
                    name = {project.name}
                    modified = {project.modified}
                    item = {materials.item}
                    step = {steps.step}
                    onDeleteProject = {this.handleDeleteProject}
                    history = {this.props.history}
                />
                <div className = 'ProjectPageMain__description'>
                    <h4>Description: </h4>
                    {project.description.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                    )}
                </div>
                <div className = 'ProjectPageMain__materials'>
                    <h4>Materials: </h4>
                    {materials.item.split(/\n \r|\n/).map((para, i) =>
                    <p key = {i}>{para}</p>
                    )}
                </div>
                <div className = 'ProjectPageMain__steps'>
                    <h4>Steps: </h4>
                    {steps.step.split(/\n \r|\n/).map((para, i) =>
                    <p key = {i}>{para}</p>
                    )}
                </div>
            </section>
        )
    }
}