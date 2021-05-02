import React from 'react';
import {Redirect} from 'react-router-dom';
import Context from '../../context';
import config from '../../config';
import { isThisISOWeek } from 'date-fns';

export default class Steps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {completed: false}
    }

    static defaultProps = {
        onDeleteSteps: () => {},
        history: {
            push: () => {}
        },
    }

    static contextType = Context;

    handleClickDelete = (e) => {
        e.preventDefault()
        const stepId = this.props.id
        console.log(stepId)

        fetch(`${config.API_ENDPOINT}/steps/${stepId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(() => {
                console.log(`Deleting the step`)
                this.context.deleteStep(stepId)
            })
            .catch(error => {
                console.error({error})
            })
    }

    handleCompleted = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const {step, id} = this.props
        if (!this.props.id) {
            return <Redirect to = '/user/projects' />
        }

        return (
            <div className = 'Steps'>
                <h2>Project Steps and Instructions</h2>
                <div className = 'Steps__list'>
                    <ol>
                        {steps.map(step =>
                            <input
                                name = 'completed'
                                type = 'checkbox'
                                checked = {this.state.completed}
                                onChange = {this.handleCompleted}>
                                    <li key = {step.id}>
                                        <Project
                                            id = {project.id}
                                            name = {project.name}
                                            modified = {project.modified}
                                        />
                                    </li>
                                </input>
                            )}
                    </ol>
                </div>
            </div>
        )
    }
}