import React from 'react';
import Project from '../Project/Project';
import Context from '../../context';
import ProjectApiService from '../../services/project-api-service';
import './ProjectPageMain.css';

export default class ProjectPageMain extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = Context

    render() {
        const {
            projects = [],
            materials = [],
            steps = []
        } = this.context
        // const {projectId} = this.props.match.params
        const {projectId, itemId, stepId} = this.props.match.params
        const project = projects.find(project => project.id == projectId)
        // const materials = materials.find(item => item.id == itemId)
        // const steps = steps.find(step => step.id == stepId)

        return (
            <section className = 'ProjectPageMain'>
                <Project
                    id = {project.id}
                    name = {project.name}
                    modified = {project.modified}
                    // onDeleteProject = {this.handleDeleteProject}
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
                    <ul>
                        {project.materials.map(material =>
                            <label className = 'liWrap'>
                                <input type = 'checkbox' />
                                {/* Display this inline */}
                                <li key = {material.id}>
                                    {material.item}
                                </li>
                            </label>)}
                    </ul>
                </div>
                <div className = 'ProjectPageMain__steps'>
                    <h4>Steps: </h4>
                    <ol>
                        {project.steps.map(step =>
                            <label className = 'liWrap'>
                                <input type = 'checkbox' />
                                <li key = {step.id}>
                                    {step.step}
                                </li>
                            </label>)}
                    </ol>
                </div>
            </section>
        )
    }
}