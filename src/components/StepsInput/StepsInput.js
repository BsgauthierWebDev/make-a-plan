import React from 'react';
import Context from '../../context';

export default class StepsInput extends React.Component {
    static contextType = Context;

    render() {
        return (
            <div className = 'StepsInput'>
                <input
                    type = 'text'
                    className = 'AddProject__steps-input'
                    name = 'steps'
                    id = 'steps'
                    placeholder = 'project steps'
                    onChange = {e => this.updateSteps(e.target.value)}
                    required />
            </div>
        )
    }
}