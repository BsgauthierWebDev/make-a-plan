import React from 'react';
import Project from '../Project/Project';
import Steps from '../Steps/Steps';
import Context from '../../context';
import ProjectApiService from '../../services/project-api-service';

export default class ProjectPageMain extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = Context

    // handleDeleteProject = projectId => {
    //     this.props.history.push('/projects')
    // }

    // handleDeleteProject = e => {
    //     e.preventDefault()
    //     const {projectId} = this.props.match.params
    //     ProjectApiService.deleteProject({id: projectId})
    //         .then(res => {
    //             this.context.deleteProject(projectId)
    //             this.props.history.goBack()
    //         })
    //         .catch(error => {
    //             console.error('delete project', {error})
    //         })
    // }

    render() {
        const {
            projects = [],
            materials = [],
            steps = []
        } = this.context
        const {projectId} = this.props.match.params
        // const {projectId, itemId, stepId} = this.props.match.params
        const project = projects.find(project => project.id == projectId)
        // const materials = materials.find(item => item.id == itemId)
        // const steps = steps.find(step => step.id == stepId)

        return (
            <section className = 'ProjectPageMain'>
                <Project
                    id = {project.id}
                    name = {project.name}
                    modified = {project.modified}
                    item = {materials.item}
                    step = {steps.step}
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
                    {/* {materials.item.split(/\n \r|\n/).map((para, i) =>
                    <p key = {i}>{para}</p>
                    )} */}
                </div>
                <div className = 'ProjectPageMain__steps'>
                    <h4>Steps: </h4>
                        <ul>
                            {steps.map(step =>
                                <li key = {step.id}>
                                    <Steps
                                        id = {step.id}
                                        name = {step.name}
                                        modified = {step.modified}
                                        completed = {step.completed}
                                    />
                                </li>
                            )}
                        </ul>
                    {/* {steps.step.split(/\n \r|\n/).map((para, i) =>
                    <p key = {i}>{para}</p>
                    )} */}
                </div>
            </section>
        )
    }
}