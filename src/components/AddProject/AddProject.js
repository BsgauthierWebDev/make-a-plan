import React from 'react';
import ProjectError from '../../ProjectError';
import ValidationError from '../../ValidationError';
import Context from '../../context';
import moment from 'moment';
import ProjectApiService from '../../services/project-api-service';
import TokenService from '../../services/token-service';
import config from '../../config';

export default class AddProjects extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                touched: false
            },
            modified: '',
            description: {
                value: '',
                touched: false
            },
            materials: {
                value: '',
                touched: false
            },
            steps: {
                value: '',
                touched: false
            }
        };
    }

    static defaultProps = {
        history: {
            push: () => {}
        },
    }

    static contextType = Context
    //collect required data before project submit
    // updateValue = (value, key) => {
    //     this.setState({[key]: {value: value}})
    // }

    updateName(name, modified) {
        this.setState({name: {value: name, touched: true}});
        this.updateModified(modified);
    }

    updateModified(modified) {
        this.setState({modified: modified});
    }

    updateDescription(description, modified) {
        this.setState({description: {value: description, touched: true}});
        this.updateModified(modified);
    }
    
    updateMaterials(materials, modified) {
        this.setState({materials: {value: materials, touched: true}});
        this.updateModified(modified);
    }

    updateSteps(steps, modified) {
        this.setState({steps: {value: steps, touched: true}});
        this.updateModified(modified);
    }

    handleSubmit(e) {
        e.preventDefault();
        const project = {
            name: this.state.name.value,
            // created: this.state.created.value,
            modified: this.state.modified,
            description: this.state.description.value,
            materials: this.state.materials.value,
            steps: this.state.steps.value
        }
        console.log(project.modified)
        fetch(`${config.API_ENDPOINT}/projects`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(project)
        })
            .then(res => res.json())
            .then(resJSON => {
                console.log(resJSON)
                const newProject = [...this.state.projects, resJSON]
                console.log(newProject)
                this.setState({projects: newProject})
                console.log(this.state)
            // this.context.addProject(project)
            this.props.history.push('/user/projects')
        })
        .catch(err => {
            console.log(err)
        })
    }

    timeStamp() {
        moment().toDate()
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return `Name is required.`;
        }
        else if (name.length < 3) {
            return `Name must be at least 3 characters.`
        }
    }
    
    validateMaterials() {
        const materials = this.state.name.value.trim();
        if (materials.length === 0) {
            return `Materials are required.`;
        }
        else if (materials.length < 3) {
            return `Materials must be at least 3 characters.`
        }
    }

    validateSteps() {
        const steps = this.state.steps.value.trim();
        if (steps.length === 0) {
            return `Steps are required.`;
        }
        else if (steps.length < 3) {
            return `Steps must be at least 3 characters.`
        }
    }

    handleClickCancel = () => {
        this.props.history.push('/user/projects')
    };

    render() {
        const nameError = this.validateName();
        const materialsError = this.validateMaterials();
        const stepsError = this.validateSteps();
        const modified = moment().toDate();

        return (
            <>
                <form className = 'AddProject' onSubmit = {e => this.handleSubmit(e)}>
                    <ProjectError>
                        <h1>Add Your Project Details Here</h1>
                        <div className = 'AddProject__input'>* fields are required</div>
                        <div className = 'AddProject__name'>
                            <label htmlFor = 'nameInput'>* Name: </label>
                            <br />
                            <input
                                type = 'text'
                                className = 'AddProject__name-input'
                                name = 'name'
                                id = 'name'
                                placeholder = 'project name'
                                onChange = {e => this.updateName(e.target.value, modified)}
                                required />
                                {this.state.name.touched && (
                                    <ValidationError message = {nameError} />
                                )}
                        </div>
                        <div className = 'AddProject__description'>
                            <label htmlFor = 'descriptionInput'>Description: </label>
                            <br />
                            <textarea
                                name = 'AddProject__description-input'
                                rows = '5'
                                placeholder = 'add a description of your project here (optional)'
                                onChange = {e => this.updateDescription(e.target.value, modified)}/>
                        </div>
                        <div className = 'AddProject__materials'>
                            <label htmlFor = 'materialsInput'>* Materials: </label>
                            <br />
                            <input 
                                type = 'text'
                                className = 'AddProject__materials-input'
                                name = 'materials'
                                id = 'materials'
                                placeholder = 'project materials'
                                onChange = {e => this.updateMaterials(e.target.value, modified)}
                                required />
                                {'  '}
                            <button
                                type = 'button'
                                className = 'newInput'
                                >
                                    Add
                                </button>
                                {this.state.materials.touched && (
                                    <ValidationError message = {materialsError} />
                                )}
                        </div>
                        <div className = 'AddProject__steps'>
                            <label htmlFor = 'stepsInput'>* Steps</label>
                            <br />
                            <input
                                type = 'text'
                                className = 'AddProject__steps-input'
                                name = 'steps'
                                id = 'steps'
                                placeholder = 'project steps'
                                onChange = {e => this.updateSteps(e.target.value, modified)}
                                required />
                                {'  '}
                            <button
                                type = 'button'
                                className = 'newInput'
                                >
                                    Add
                                </button>
                                {this.state.steps.touched && (
                                    <ValidationError message = {stepsError} />
                                )}
                        </div>
                        <div>
                            <button type = 'submit' className = 'AddProject__button'>
                                Save
                            </button>
                            {'    '}
                            <button type = 'cancel' className = 'AddProject__cancel' onClick = {this.handleClickCancel}>
                                Cancel
                            </button>
                        </div>
                    </ProjectError>
                </form>
            </>
        )
    }
}