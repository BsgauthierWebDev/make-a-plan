import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ProjectListMain extends Component {
    render() {
        return (
            <div className = 'ProjectListMain'>
                <ul>
                    <li>Unorganized list of all projects</li>
                    <li>In a user's account</li>
                    <li>In descending order by date</li>
                    <li>Like this <Link to = '/demo'>sample</Link></li>
                </ul>
            </div>
        )
    }
}

export default ProjectListMain;