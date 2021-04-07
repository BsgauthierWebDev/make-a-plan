import React, {Component} from 'react';
import Context from '../../context';
import AuthApiService from '../../services.auth-api-service';
import './SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: {
                value: '',
                touched: false
            },
            username: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            },
            error: null,
        }
    }

    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    static contextType = Context

    updateValue = (value, key) => {
        this.setState({usernameError: null})
        this.setState({[key]: {value: value, touched: true}})
    }

    handleRegistrationSuccess = user => {
        const {history} = this.props
        history.push('/sign-in')
    }

    handleSubmit = e => {
        e.preventDefault() 
        const {email, username, password} = e.target
        this.setState ({error: null})
        AuthApiService.postUser({
            email: email.value,
            username: username.value,
            password: password.value
        })
            .then(user => {
                email.value = ''
                username.value = ''
                password.value = ''
                this.handleRegistrationSuccess()
                this.history.push('/sign-in')
            })
            .catch(res => {
                this.setState({error: res.error})
            })
    }

    render() {
        const {error} = this.state
        return(
            <div className = 'SignUp'>
                <div className = 'SignUp__area'>
                    <header>
                        <h1>Create Your Account</h1>
                    </header>
                    <form className = 'SignUp__form' onSubmit = {this.handleSubmit}>
                        <div role = 'alert'>
                            {error && <p className = 'red'>{error}</p>}
                        </div>
                        <div className = 'SignUp__form-email'>
                            <label htmlFor = 'email'>Email Address: </label>
                            <input 
                                placeHolder = 'Your Email' 
                                type = 'text' 
                                name = 'email' 
                                id = 'email'
                                required
                            />
                        </div>
                        <div className = 'SignUp__form-username'>
                            <label htmlFor = 'username'>Username: </label>
                            <input 
                                placeholder = 'Username'
                                type = 'text' 
                                name = 'username' 
                                id = 'username'
                                required
                            />
                        </div>
                        <div className = 'SignUp__form-password'>
                            <label htmlFor = 'password'>Password: </label>
                            <input
                                type = 'password'
                                name = 'password'
                                id = 'password'
                                onChange = {e => this.updateValue(e.target.value, e.target.id)}
                                minLength = '8' maxLength = '32'
                                required
                            />
                        </div>
                        <button type = 'submit'>Sign Up</button>
                    </form>
                    <ul className = 'passwordReqs'>
                        *password must contain:
                        <li>8-32 characters</li>
                        <li>At least one capital letter</li>
                        <li>At least one number</li>
                        <li>No spaces</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SignUp;