import React from 'react';
import Project from '../Project/Project';
import Context from '../../context';
import './ProjectPageMain.css';

export default class ProjectPageMain extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = Context

    state = {
        isChecked: false
    }

    toggleCheckboxChange = () => {
        this.setState(({isChecked}) => (
            {
                isChecked: !isChecked
            }
        ));
    }

    render() {
        const {
            projects = []
        } = this.context
        const {projectId} = this.props.match.params
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
                                <input
                                    type = 'checkbox'
                                    // checked = {isChecked}
                                    onChange = {this.toggleCheckboxChange}
                                />
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
                                    <input
                                        type = 'checkbox'
                                        // checked = {isChecked}
                                        onChange = {this.toggleCheckboxChange}
                                    />
                                    {step.step}
                                </li>
                            </label>)}
                    </ol>
                </div>
            </section>
        )
    }
}