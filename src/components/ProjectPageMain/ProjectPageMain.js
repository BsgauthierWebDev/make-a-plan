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
            projects = []
        } = this.context
        const {projectId, itemId, stepId} = this.props.match.params
        const project = projects.find(project => project.id == projectId)

        return (
            <section className = 'ProjectPageMain'>
                <Project
                    id = {project.id}
                    name = {project.name}
                    modified = {project.modified}
                    history = {this.props.history}
                />
                <div className = 'ProjectPageMain__description'>
                    <h3>Project Details: </h3>
                    {project.description.split(/\n \r|\n/).map((para, i) =>
                        <p key = {i}>{para}</p>
                    )}
                </div>
                <div className = 'ProjectPageMain__materials'>
                    <h3>Required Materials: </h3>
                    <ul>
                        {project.materials.map(material =>
                            <label className = 'liWrap'>
                                <li key = {material.id}>
                                    {material.item}
                                </li>
                            </label>)}
                    </ul>
                </div>
                <div className = 'ProjectPageMain__steps'>
                    <h3>Instructions: </h3>
                    <ol>
                        {project.steps.map(step =>
                            <label className = 'liWrap'>
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