import React from 'react';
import MaterialsInput from '../MaterialsInput/MaterialsInput';
import StepsInput from '../StepsInput/StepsInput';
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
            },
            materialsInputs: ['materialsInput-0'],
            stepsInputs: ['stepsInput-0']
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
            modified: this.state.modified,
            description: this.state.description.value,
            materials: this.state.materialsInputs.map(name => this.state.materials[name]),
            steps: this.state.stepsInputs.map(name => this.state.steps[name])
        }
        this.context.addProject(project)
        this.props.history.push('/user/projects')
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

    appendMaterialInput() {
        var newMaterialInput = `materialsInput-${this.state.materialsInputs.length}`;
        this.setState(prevState => ({materialsInputs: prevState.materialsInputs.concat([newMaterialInput])}));
    }

    appendStepInput() {
        var newStepInput = `stepsInput-${this.state.stepsInputs.length}`;
        this.setState(prevState => ({stepsInputs: prevState.stepsInputs.concat([newStepInput])}));
    }

    setMaterialState(e) {
        var id = e.target.id;
        var value = e.target.value;
        this.state.materials[id] = value;
        this.setState({materials: this.state.materials});
    }

    setStepsState(e) {
        var id = e.target.id;
        var value = e.target.value;
        this.state.steps[id] = value;
        this.setState({steps: this.state.steps});
    }

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
                            {this.state.materialsInputs.map(input => 
                                <MaterialsInput 
                                    key = {input}
                                    itemNumber = {input}
                                    onChange = {this.setMaterialState.bind(this)} 
                                />)}
                            <button
                                type = 'button'
                                className = 'newInput'
                                onClick = {() => this.appendMaterialInput()}
                                >
                                    Add Materials
                                </button>
                                {this.state.materials.touched
                                 && (
                                    <ValidationError message = {materialsError} />
                                )
                                }
                        </div>
                        <div className = 'AddProject__steps'>
                            <label htmlFor = 'stepsInput'>* Steps</label>
                            <br />
                            {this.state.stepsInputs.map(input => 
                                <StepsInput 
                                    key = {input} 
                                    itemNumber = {input}
                                    onChange = {this.setStepsState.bind(this)}
                                />)}
                            <button
                                type = 'button'
                                className = 'newInput'
                                onClick = {() => this.appendStepInput()}
                                >
                                    Add Steps
                                </button>
                                {this.state.steps.touched 
                                && (
                                    <ValidationError message = {stepsError} />
                                )
                                }
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