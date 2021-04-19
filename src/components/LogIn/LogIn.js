import React, {Component} from 'react';
import Context from '../../context';
//import ValidationError from '../ValidationError';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import './LogIn.css';

export default class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null
        }
    }

    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    static contextType = Context

    handleLoginSuccess = () => {
        const {history} = this.props
        history.push('/user')
        TokenService.hasAuthToken()
    }

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        this.setState({error: null})
        const {username, password} = e.target

        AuthApiService.postLogin({
            username: username.value,
            password: password.value
        })
            .then(res => {
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.handleLoginSuccess()
            })
            .catch(res => {
                this.setState({error: res.error})
            })
    }

    render() {
        const {error} = this.state
        return(
            <div className = 'LogIn'>
                <div className = 'LogIn__area'>
                    <h1>Log In</h1>
                    <form className = 'LogIn__form' onSubmit = {this.handleSubmitJwtAuth}>
                        <div role = 'alert'>
                            {error && <p className = 'red'>{error}</p>}
                        </div>
                        <div>
                            <label htmlFor = 'username'>Username: </label>
                            <input placeholder = 'username' type = 'text' name = 'username' id = 'username'
                                autoComplete = 'username'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor = 'password'>Password: </label>
                            <input type = 'password' name = 'password' id = 'password'
                                placeholder = 'password' autoComplete = 'current-password'
                                required
                            />
                        </div>
                        <button type = 'submit'>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}