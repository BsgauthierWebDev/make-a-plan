import React from 'react';
import Context from '../../context';

export default class StepsInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modified: '',
            steps: {
                value: '',
                touched: false
            },
            stepsInputs: ['stepsInput-0']
        };
    }
    static contextType = Context;

    render() {
        return (
            <div className = 'StepsInput'>
                <input
                    type = 'text'
                    className = 'AddProject__steps-input'
                    name = 'steps'
                    id = {this.props.itemNumber}
                    placeholder = 'project steps'
                    onChange = {this.props.onChange}
                    required />
            </div>
        )
    }
}