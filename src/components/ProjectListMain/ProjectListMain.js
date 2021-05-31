import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Project from '../Project/Project';
import ButtonIcon from '../Button/Button';
import Context from '../../context';
import './ProjectListMain.css';

export default class ProjectListMain extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = Context

    render() {
        const {projects = []} = this.context

        return (
            <section className = 'ProjectListMain'>
                <div className = 'ProjectListMain__intro'>
                    <h2>Welcome to your account.</h2> 
                </div>
                <div className = 'ProjectListMain__button-container'>
                    <ButtonIcon
                        tag = {Link}
                        to = '/user/new-project'
                        type = 'button'
                        className = 'ProjectListMain__add-project-button'
                    >
                        <FontAwesomeIcon icon = 'plus' />
                        <br />
                        New
                    </ButtonIcon>
                </div>
                <div className = 'ProjectListMain__projects'>
                    <ul>
                        {projects.map(project =>
                            <li key = {project.id}>
                                <Project
                                    id = {project.id}
                                    name = {project.name}
                                    modified = {project.modified}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        )
    }
}