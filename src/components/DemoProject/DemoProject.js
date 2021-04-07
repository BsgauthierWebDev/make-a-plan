import React, {Component} from 'react';

class DemoProject extends Component {
    render() {
        return (
            <div className = 'DemoProject'>
                <div className = 'DemoProject__title'>
                    <h2><em>Project Name Here</em></h2>
                </div>
                <div className = 'DemoProject__description'>
                    <h3>Project Details</h3>
                    <p><em>Optional description of project</em></p>
                </div>
                <div className = 'DemoProject__materials'>
                    <h3>Required Materials:</h3>
                    <ul>
                        <li>Unorganize list of materials</li>
                        <li>Required to complete the project</li>
                        <li>With checkboxes to mark off acquired items</li>
                    </ul>
                </div>
                <div className = 'DemoProject__instructions'>
                    <h3>Instructions:</h3>
                    <ul>
                        <li>Unorganized list of steps</li>
                        <li>Required to complete the project</li>
                        <li>With checkboxes to mark off completed steps</li>
                    </ul>
                </div>
                <div className = 'DemoProject__edit'>
                    <p><em>Edit project details</em></p>
                </div>
            </div>
        )
    }
}

export default DemoProject;