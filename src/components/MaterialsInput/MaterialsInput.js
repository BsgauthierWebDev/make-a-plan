import React from 'react';
import Context from '../../context';

export default class MaterialsInput extends React.Component {
    static contextType = Context;

    render() {
        return (
            <div className = 'MaterialsInput'>
                <input 
                    type = 'text'
                    className = 'AddProject__materials-input'
                    name = 'materials'
                    id = 'materials'
                    placeholder = 'project materials'
                    onChange = {e => this.updateMaterials(e.target.value)}
                    required />
                {'  '}            
            </div>
        )
    }
}