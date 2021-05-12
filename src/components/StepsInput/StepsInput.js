import React from 'react';
import Context from '../../context';
import moment from 'moment';

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

    updateSteps(steps, modified) {
        this.setState({steps: {value: steps, touched: true}});
        this.updateModified(modified);
    }

    updateModified(modified) {
        this.setState({modified: modified});
    }

    timeStamp() {
        moment().toDate()
    }

    render() {
        const modified = moment().toDate();

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