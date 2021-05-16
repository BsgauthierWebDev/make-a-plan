import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import {format} from 'date-fns';
import Context from '../../context';
import config from '../../config';
import TokenService from '../../services/token-service';

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
                <button
                    className = 'Project__delete'
                    type = 'button'
                    onClick = {this.handleClickDelete}
                >
                    Delete
                </button>
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