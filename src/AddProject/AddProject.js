import React, {Component} from 'react';

class AddProject extends Component {
    render() {
        return (
            <div className = 'AddProject'>
                <h2>Add your project details below</h2>
                <form className = 'AddProject__input'>
                    <label htmlFor = 'AddProject__name'>
                        Project Name: 
                    </label>
                    <input type = 'text' name = 'name' id = 'name' required />
                    <br />
                    <label htmlFor = 'AddProject__description'>
                        Project Description (optional): 
                    </label>
                    <textarea rows = '5' name = 'description' id = 'description' />
                    <br />
                    <label htmlFor = 'AddProject__materials'>
                        Materials & Items Needed: 
                    </label>
                    <textarea rows = '15' name = 'materials' id = 'materials' required />
                    <br />
                    <label htmlFor = 'AddProject__instructions'>
                        Instructions: 
                    </label>
                    <textarea rows = '20' name = 'instructions' id = 'instructions' required />
                    <br />
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddProject;