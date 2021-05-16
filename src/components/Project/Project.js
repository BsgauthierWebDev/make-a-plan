import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import {format} from 'date-fns';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Context from '../../context';
import config from '../../config';
import TokenService from '../../services/token-service';
import ButtonIcon from '../Button/Button';

export default class Project extends React.Component {
    static defaultProps = {
        onDeleteProject: () => {},
        history: {
            push: () => {}
        },
    }
    static contextType = Context;

    handleClickDelete = (e) => {
        e.preventDefault()
        const projectId = this.props.id

        fetch(`${config.API_ENDPOINT}/projects/${projectId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(() => {
                console.log(`Deleting the project.`)
                this.props.history.push('/user/projects')
                this.context.deleteProject(projectId)
            })
            .catch(error => {
                console.error({error})
            })
    }

    render() {
        const {name, id, modified} = this.props
        if (!this.props.id) {
            return <Redirect to = '/user/projects' />
        }
        return (
            <div className = 'Project'>
                <h2 className = 'Project__title'>
                    <Link to = {`/user/projects/${id}`}>
                        {name}
                    </Link>
                </h2>
                <div>
                <ButtonIcon
                    className = 'Project__delete'
                    type = 'button'
                    onClick = {this.handleClickDelete}
                >
                    <FontAwesomeIcon icon = 'trash-alt' />
                    <br />
                    Delete                    
                </ButtonIcon>
                </div>
                <div className = 'Project__dates'>
                    <div className = 'Project__dates-modified'>
                        Modified
                        {' '}
                        <span className = 'Date'>
                            {format(new Date(modified), 'MMM dd yyyy')}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}