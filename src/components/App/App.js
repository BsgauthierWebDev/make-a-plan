import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';
import DemoProject from '../DemoProject/DemoProject';
import Dashboard from '../Dashboard/Dashboard';
import ProjectListMain from '../ProjectListMain/ProjectListMain';
import ProjectPageMain from '../ProjectPageMain/ProjectPageMain';
import AddProject from '../AddProject/AddProject';
import Context from '../../context';
import NavBar from '../NavBar/NavBar';
import TokenService from '../../services/token-service';
import config from '../../config';
import './App.css';

class App extends Component {
  state = {
    projects: [],
    materials: [],
    steps: []
  }
  static contextType = Context

  componentDidMount() {
    this.fetchData()
  }
  fetchData = () => {
    const reqConfig = {
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
        }
    }
    Promise.all([
        fetch(`${config.API_ENDPOINT}/projects`, reqConfig),
        fetch(`${config.API_ENDPOINT}/materials`, reqConfig),
        fetch(`${config.API_ENDPOINT}/steps`, reqConfig)
    ])
        .then(([projectsRes, materialsRes, stepsRes]) => {
            if (!projectsRes.ok)
                return projectsRes.json().then(e => Promise.reject(e));
            if (!materialsRes.ok)
                return materialsRes.json().then(e => Promise.reject(e));
            if (!stepsRes.ok)
                return stepsRes.json().then(e => Promise.reject(e));

            return Promise.all([
                projectsRes.json(),
                materialsRes.json(),
                stepsRes.json()
            ]);
        })
        .then(([projects, materials, steps]) => {
          for (let id in projects) {
            let project = projects[id]
            project.materials = []
            for (let id in materials) {
              let material = materials[id]
              if (material.project_id == project.id) {
                project.materials.push(material)
              }
            }
            project.steps = []
            for (let id in steps) {
              let step = steps[id]
              if (step.project_id == project.id) {
                project.steps.push(step)
              }
            }
          }
            this.setState({projects});
        })
        .catch(error => {
            console.error({error});
        });
}

addProject = projectData => {
  fetch(`${config.API_ENDPOINT}/projects`, {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
    },
    body: JSON.stringify(projectData)
  })
    .then(res => res.json())
    .then(resJSON => {
        const newProject = [...this.state.projects, resJSON]
        this.setState({projects: newProject})
    this.props.history.push('/user/projects')
  })
  .catch(err => {
      console.log(err)
  })
}

markMaterialsCompleted = materialsData => {
  fetch(`${config.API_ENDPOINT}/materials/${materialsData.id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
      'authorization': `Bearer ${TokenService.getAuthToken()}`,
    },
    body: JSON.stringify(materialsData)
  })
    .then(res => res.json())
    .then(resJSON => {
      const projects = this.state.projects
      for (let i = 0; i < projects.length; i++) {
        let project = projects[i]
        for (let j = 0; j < project.materials.length; j++) {
          let material = project.materials[j]
          if (material.id == materialsData.id) {
            projects[i].materials[j].completed = materialsData.completed
          }
        }
      }
      this.setState({projects: projects})
    })
    .catch(err => {
      console.log(err)
    })
}

markStepsCompleted = stepsData => {
  fetch(`${config.API_ENDPOINT}/steps/${stepsData.id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
      'authorization': `Bearer ${TokenService.getAuthToken()}`,
    },
    body: JSON.stringify(stepsData)
  })
    .then(res => res.json())
    .then(resJSON => {
      const projects = this.state.projects
      for (let i = 0; i < projects.length; i++) {
        let project = projects[i]
        for (let j = 0; j < project.steps.length; j++) {
          let step = project.steps[j]
          if (step.id == stepsData.id) {
            projects[i].steps[j].completed = stepsData.completed
          }
        }
      }
      this.setState({projects: projects})
    })
    .catch(err => {
      console.log(err)
    })
}

handleDeleteProject = projectId => {
  this.setState({
    projects: this.state.projects.filter(project => project.id !== projectId)
  });
};

renderUserLinks() {
  return (
    <div className = 'Dashboard__user-links'>
      <Link to = '/'>Home | </Link>
      {/* <Link to = '/user'>My Account | </Link> */}
      <Link to = '/user/projects'>My Projects | </Link>
      <Link to = '/user/new-project'>Add a Project </Link>
      <hr />
    </div>
  )
}

  renderMainRoutes() {
    return (
      <>
        {['/user/projects/:projectId'].map(path => (
          <Route
            exact
            key = {path}
            path = {path}
            component = {ProjectPageMain}
          />
        ))}
        <Route 
          exact path = '/' 
          component = {LandingPage} 
        />
        <Route
          path = '/log-in'
          component = {LogIn}
        />
        <Route 
          path = '/sign-up'
          component = {SignUp}
        />
        <Route
          exact path = '/user'
          component = {Dashboard}
        />
        <Route
          exact path = '/user/projects'
          component = {ProjectListMain}
        />
        <Route
          path = '/user/new-project'
          component = {AddProject}
        />
        <Route
          path = '/demo'
          component = {DemoProject}
        />
      </>
    )
  }

  render() {
    const value = {
      projects: this.state.projects,
      materials: this.state.materials,
      steps: this.state.steps,
      fetchData: this.fetchData,
      addProject: this.addProject,
      deleteProject: this.handleDeleteProject,
      markMaterialsCompleted: this.markMaterialsCompleted,
      markStepsCompleted: this.markStepsCompleted
    }

    return (
      <Context.Provider value = {value}>
      <div className = 'App'>
        <div className = 'App__navigation'>
          <NavBar />
        </div>
        <div className = 'App__display-area'>
          <div className = 'App__dashboard-links'>
            {TokenService.hasAuthToken()
              ? this.renderUserLinks()
              : ''}
          </div>
          <main className = 'App__main'>
            {this.renderMainRoutes()}
          </main>
        </div>
        <footer>
          <div className = 'footer'>
          <h6>Copyright 2021 bsgauthierwebdev</h6>
          </div>
          </footer>
      </div>
      </Context.Provider>
    )
  }
}

export default App;