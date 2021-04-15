import React, {Component} from 'react';
import Context from '../../context';
import SimpleFileUpload from 'react-simple-file-upload';
import ProjectApiService from '../../services/project-api-service';
import TokenService from '../../services/token-service';
import ProjectError from '../../ProjectError';
import ValidationError from '../../ValidationError';
import moment from 'moment';
import './AddProject.css';

class AddProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: {
                value: '',
                touched: false,
                error: null
            },
            description: {
                value: '',
                touched: false,
                error: null
            },
            materials: {
                value: '',
                touched: false,
                error: null
            },
            steps: {
                value: '',
                touched: false,
                error: null
            },
            user_id: {
                value: '',
                touched: false,
                error: null
            },
            modified:'',
            formTouched: false
        }
    }

    static defaultProps = {
        history: {
            push: () => {}
        },
    }

    static contextType = Context
    // collect required data before submit
    updateValue = (value, key) => {
        this.setState({[key]: {value: value}})
    }

    updateName(name, modified) {
        this.setState({name: {value: name, touched: true}});
        this.updateModified(modified)
    }

    updateModified(modified) {
        this.setState({modified: modified});
    }

    updateDescription(description, modified) {
        this.setState({description: {value: description, touched: true}});
        this.updateModified(modified)
    }

    updateMaterials(materials, modified) {
        this.setState({description: {value: materials, touched: true}});
        this.updateModified(modified)
    }

    updateSteps(steps, modified) {
        this.setState({description: {value: steps, touched: true}});
        this.updateModified(modified)
    }

    updateUserId(user_id, modified) {
        this.setState({description: {value: user_id, touched: true}});
        this.updateModified(modified)
    }

    handleProjectSubmit(e) {
        ProjectApiService.postProject({
            name: this.state.name.value,
            description: this.state.description.value,
            materials: this.state.materials.value,
            steps: this.state.steps.value,
            user_id: this.state.user_id.value,
            date_created: this.state.date_created.value,
        })
            .then(resProject => {
            this.context.addProject(resProject)
            this.props.history.push('/projects')
            })
            .catch(error => {
                console.error('add project', {error})
            })
    }

    handleProjectInfo = e => {
        e.preventDefault()
        this.setState({formTouched: true})
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
            return `Name must be at least three characters.`
        }
    }
    
    validateMaterials() {
        const materials = this.state.materials.value.trim();
        if (materials.length === 0) {
            return `Please add the materials needed to complete this project.`;
        }
        else if (materials.length < 3) {
            return `Materials must be at least three characters.`
        }
    }

    validateSteps() {
        const steps = this.state.steps.value.trim();
        if (steps.length === 0) {
            return `Please add the steps necessary to complete this project.`;
        }
        else if (steps.length < 3) {
            return `Steps must be at least three characters.`
        }
    }

    handleClickCancel = () => {
        this.props.history.push('/projects')
    };


    render() {
        const nameError = this.validateName();
        const materialsError = this.validateMaterials();
        const stepsError = this.validateSteps();
        const modified = moment().toDate();

        return (
            <>
                <form className = 'AddProject' onSubmit = {e => this.handleProjectInfo(e)}>
                    <ProjectError>
                        <h2>Add your project here!</h2>
                        <div className = 'AddProject__input'>* fields are required</div>
                        <div className = 'AddProject__name'>
                            <label htmlFor = 'nameInput'>*Name: </label>
                            <br />
                            <input
                                type = 'text'
                                className = 'AddProject__input-name'
                                name = 'name'
                                id = 'name'
                                placeholder = '<em>project name</em>'
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
                                name = 'AddProject__input-description'
                                rows = '5'
                                placeholder = '<em>add a description of your project</em>'
                                onChange = {e => this.updateDescription(e.target.value, modified)} />
                        </div>
                        <div className = 'AddProject__materials'>
                            <label htmlFor = 'materialsInput'>*Materials: </label>
                            <br />
                            <textarea
                                name = 'AddProject__input-materials'
                                rows = '10'
                                placeholder = '<em>add the materials necessary for your project here</em>'
                                onChange = {e => this.updateMaterials(e.target.value, modified)}
                                required />
                                {this.state.materials.touched && (
                                    <ValidationError message = {materialsError} />
                                )}
                        </div>
                        <div className = 'AddProject__steps'>
                            {/* <label htmlFor = 'stepsInput'>*Steps: </label>
                            <br />
                            <textarea
                                name = 'AddProject__input-steps'
                                rows = '15'
                                placeholder = '<em>add the steps necessary to complete your project here</em>'
                                onChange = {e => this.updateSteps(e.target.value, modified)}
                                required />
                                {this.state.steps.touched && (
                                    <ValidationError message = {stepsError} />
                                )} */}
                            <ul>
                                {steps.map(step =>
                                    <li key = {step.id}>
                                        <Step
                                            id = {step.id}
                                            name = {project.name}
                                            modified = {project.modified}
                                        />
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className = 'AddProject__button'>
                            <button type = 'submit' className = 'AddProject__input-button'>
                                Save
                            </button>
                        </div>
                        <div className = 'AddProject__cancel'>
                            <button type = 'button' className = 'AddProject__cancel' onClick = {this.handleClickCancel}>
                                Cancel
                            </button>
                        </div>
                    </ProjectError>
                    <div className = 'AddProject__auth'>
                        {!TokenService.hasAuthToken()
                            ? <p>* You must be logged in to add a project</p>
                            : this.state.formTouched ?
                            <SimpleFileUpload apiKey = '' onSuccess = {this.handleProjectSubmit} />
                            :<p> * Please fill out the required information first</p> }
                    </div>
                </form>
            </>
        )
    }
}

export default AddProject;