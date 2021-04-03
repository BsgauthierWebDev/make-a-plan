import React, {Component} from 'react';

class ContactUs extends Component {
    render() {
        return (
            <div className = 'ContactUs'>
                <form className = 'ContactUs__info'>
                    <label htmlFor = 'ContactUs__info-name'>
                        Name: 
                    </label>
                    <input type = 'text' name = 'name' id = 'name' required />
                    <br />
                    <label htmlFor = 'ContactUs__info-email'>
                        Email: 
                    </label>
                    <input type = 'text' name = 'email' id = 'email' required />
                    <br />
                    <label htmlFor = 'ContactUs__info-message'>
                        Message: 
                    </label>
                    <textarea rows = '15' name = 'message' id = 'message' required />
                    <br />
                    <button type = 'submit'>Contact Us</button>
                    <br />
                    <button type = 'button'>Cancel</button>
                </form>
            </div>
        )
    }
}

export default ContactUs;