import React, {Component} from 'react';
import { ProjectListProvider } from './context';

class ProjectError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>Sorry, we could not add this.</h2>
            );
        }
        return this.props.children;
    }
}

export default ProjectError;