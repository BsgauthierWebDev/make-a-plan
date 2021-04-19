import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import {format} from 'date-fns';
import ApiContext from '../../ApiContext';
import config from '../../config';

export default class Project extends React.Component {
    static defaultProps = {
        onDeleteProject: () => {},
        history: {
            push: () => {}
        },
    }
    static contextType = ApiContext;

    handleClickDelete = (e) => {
        e.preventDefault()
        const projectId = this.props.id
        console.log(projectId)

        fetch(`${config.API_ENDPOINT}/api/projects/${projectId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(() => {
                console.log(`Deleting the project.`)
                this.props.history.push('/projects')
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