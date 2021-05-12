import React from 'react';
import Context from '../../context';
import moment from 'moment';

export default class MaterialsInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modified: '',
            materials: {
                value: '',
                touched: false
            },
            materialsInputs: ['materialsInput-0'],
        };
    }

    static contextType = Context;

    updateMaterials(materials, modified) {
        this.setState({materials: {value: materials, touched: true}});
        this.updateModified(modified);
    }

    timeStamp() {
        moment().toDate()
    }

    render() {
        const modified = moment().toDate();

        return (
            <div className = 'MaterialsInput'>
                <input 
                    type = 'text'
                    className = 'AddProject__materials-input'
                    name = 'materials'
                    id = {this.props.itemNumber}
                    placeholder = 'project materials'
                    onChange = {this.props.onChange}
                    required />
                {'  '}            
            </div>
        )
    }
}