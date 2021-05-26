import React from 'react';
import Project from '../Project/Project';
import Context from '../../context';
import './ProjectPageMain.css';

export default class ProjectPageMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            materialsChecked: {},
            stepsChecked: {}
        }
    }
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = Context

    toggleMaterialsChecked = (e) => {
        console.log(e);
        let id = e.target.getAttribute('data-key');
        let isChecked = e.target.checked;
        let materialsChecked = this.state.materialsChecked
        materialsChecked[id] = isChecked
        console.log(materialsChecked);
        this.setState({materialsChecked: materialsChecked}) ;
        this.updateMaterialsCompleted(id, isChecked);
    }

    updateMaterialsCompleted = (id, isChecked) => {
        const materials = {
            id: id,
            completed: isChecked
        }
        this.context.markMaterialsCompleted(materials)
    }

    toggleStepsChecked = (e) => {
        console.log(e);
        let id = e.target.getAttribute('data-key');
        let isChecked = e.target.checked;
        let stepsChecked = this.state.stepsChecked
        stepsChecked[id] = isChecked
        console.log(stepsChecked);
        this.setState({stepsChecked: stepsChecked}) ;
        this.updateStepsCompleted(id, isChecked);
    }

    updateStepsCompleted = (id, isChecked) => {
        const steps = {
            id: id,
            completed: isChecked
        }
        this.context.markStepsCompleted(steps)
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
                                    data-key = {material.id}
                                    checked = {material.completed !== '' && material.completed !== false}
                                    onChange = {this.toggleMaterialsChecked}
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
                                        data-key = {step.id}
                                        checked = {step.completed !== '' && step.completed !== false}
                                        onChange = {this.toggleStepsChecked}
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