import React from 'react';
import ValidationError from '../../ValidationError';
import Context from '../../context';
import moment from 'moment';

export default class AddSteps extends React.Component {
    static contextType = Context;
    constructor(props) {
        super(props);
        this.state = {
            step: {
                value: '',
                touched: false
            },
            modified: '',
            completed: {
                value = false
            }
        };
    }

    updateStep(step, modified) {
        this.setState({step: {value: step, touched: true}});
        this.updateModified(modified);
    }

    updateModified(modified) {
        this.setState({modified: modified});
    }

    updateCompleted(completed, modified) {
        this.setState({completed: {value: completed}});
        this.updateModified(modified);
    }

    handleSubmit(e) {
        e.preventDefault();
        const steps = {
            step: this.state.step.value,
            modified: this.state.modified,
            completed: this.state.completed.value
        }
        console.log(step.modified)
        fetch(`${config.API_ENDPOINT}/steps`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(steps)
        })
            .then(res => res.json())
            .then(resJSON => {
                console.log(resJSON)
                const newSteps = [...this.state.steps, resJSON]
                console.log(newSteps)
                this.setState({steps: newSteps})
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

    validateStep() {
        const step = this.state.step.value.trim();
        if (step.length === 0) {
            return `Input is required.`;
        }
        else if (step.length < 3) {
            return `Input must be at least three characters.`
        }
    }

    handleClickCancel = () => {
        this.props.history.push('/user/projects')
    };

    render() {
        const stepErrpr = this.validateStep();
        const modified = moment().toDate();

        return (
            <>
            <form className = 'AddSteps' onSubmit = {e => this.handleSubmit(e)}>
                
            </form>
            </>
        )
    }
}