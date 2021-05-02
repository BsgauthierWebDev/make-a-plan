import React, {Component} from 'react';

const Context = React.createContext({
    projects: [],
    materials: [],
    steps: [],
    isLoggedIn: false,
    setProjectList: () => [],
    addProject: () => {},
    deleteProject: () => [],
    handleLog: () => []
})

export default Context

export class ProjectListProvider extends Component {
    state = {
        projects: [],
        materials: [],
        steps: []
    };

    setProjectList = projects => {
        this.setState({projects})
    }

    setMaterialsList = materials => {
        this.setState({materials})
    }

    setStepsList = steps => {
        this.setState({steps})
    }

    deleteProject = projectId => {
        const updatedProjects = this.state.projects.filter(project => project.id !=projectId)
        this.setState({
            projects: updatedProjects
        },)
    }

    addProject = project => {
        this.setState({
            projects: [...this.state.projects, project]
        },)
    }
    
    handleLog = e => {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        const value = {
            projects: this.state.projects,
            isLoggedIn: this.state.isLoggedIn,
            setProjectList: this.setProjectList,
            setMaterialsList: this.setMaterialsList,
            setStepsList: this.setStepsList,
            addProject: this.addProject,
            deleteProject: this.deleteProject,
            handleLog: this.handleLog
        }

        return (
            <Context.Provider value = {value}>
                {this.props.children}
            </Context.Provider>
        )
    }
}