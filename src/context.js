import React, {Component} from 'react';

const Context = React.createContext({
    projects: [],
    isLoggedIn: false,
    addProject: () => {}
})

export default Context

export class ProjectListProvider extends Component {
    state = {
        projects: [],
    };

    setProjectList = projects => {
        this.setState({projects})
    }

    // deleteProject = projectId => {
    //     const newProject = this.state.projects.filter(project => project.id !=projectId)
    //     this.setState({
    //         projects: newList
    //     },)
    // }

    // addProject = project => {
    //     this.setState({
    //         projects: [...this.state.projects, project]
    //     },)
    // }
    
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
            addProject: this.addProject,
            handleLog: this.handleLog
        }

        return (
            <Context.Provider value = {value}>
                {this.props.children}
            </Context.Provider>
        )
    }
}