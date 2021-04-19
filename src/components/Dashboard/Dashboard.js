import React from 'react';
import {Route, Link} from 'react-router-dom';
import config from '../../config';
import Project from '../Project/Project';
import ApiContext from '../../ApiContext';
import TokenService from '../../services/token-service';
import ProjectApiService from '../../services/project-api-service';
import LandingPage from '../LandingPage/LandingPage';
import AddProject from '../AddProject/AddProject';
import DemoProject from '../DemoProject/DemoProject';
import ProjectListMain from '../ProjectListMain/ProjectListMain';
import TestPage from '../TestPage/TestPage';
import DashboardMain from '../DashboardMain/DashboardMain';
import DashboardNav from '../DashboardNav/DashboardNav';
import Store from '../../Store';

import ContactUs from '../ContactUs/ContactUs';
import context from '../../context';
import DashboardProject from '../DashboardProject/DashboardProject';

export default class Dashboard extends React.Component {
    static contextType = context

    //set state with API call or demo data if no auth token
    // componentDidMount() {
    //     const projectCall = TokenService.hasAuthToken() ? ProjectApiService.getProjects() : Store.projects
    //     const materialCall = TokenService.hasAuthToken() ? ProjectApiService.getMaterials() : Store.materials
    //     const stepCall = TokenService.hasAuthToken() ? ProjectApiService.getSteps() : Store.steps
    //         Promise.all([projectCall, materialCall, stepCall])
    //             .then(([projects, materials, steps]) => {
    //                 this.context.setProjectList(projects)
    //                 this.context.setMaterialList(materials)
    //                 this.context.setStepsList(steps)
    //             })

    //         .catch(error => {
    //             console.error({error});
    //         })
    // }

    componentDidMount() {
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
                this.setState({projects, materials, steps});
            })
            .catch(error => {
                console.error({error});
            });
    }

    openNav() {
        document.getElementById('DashboardNav').style.width = '250px';
    }

    renderNavRoutes() {
        return (
            <>
                {['/user', '/user/projects/:projectId', '/user/add-project'].map(path => (
                    <Route
                        exact
                            key = {path}
                            path = {path}
                            component = {DashboardNav}
                    />
                ))}
            </>
        )
    }

    renderMainRoutes() {
        return (
          <>
            {['/user/projects/:projectId'].map(path => (
                <Route
                    key = {path}
                    path = {path}
                    component = {DashboardProject}
                />
            ))}
            <Route 
              exact path = '/' 
              component = {LandingPage} 
            />
            <Route
                exact path = '/user'
                component = {DashboardMain}
            />
            <Route
              path = '/user/projects'
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
            <Route
                path = '/user/test-page'
                component = {TestPage}
            />
          </>
        )
      }

      render() {
          return (
              <div className = 'Dashboard'>
                  <div className = 'Dashboard__nav'>
                      <Link to = '/'>Home | </Link>
                      <Link to = '/user'>My Account | </Link>
                      <Link to = '/user/projects'>My Projects | </Link>
                      <Link to = '/user/new-project'>Add a Project | </Link>
                      <Link to = '/user/test-page'>User Test</Link>
                      {this.renderNavRoutes()}
                  </div>
                  {/* <div className = 'Dashboard__main'>
                      <button
                        className = 'Dashboard__link'
                        id = 'menu'
                        onClick = {e => this.openNav()}
                    >
                        Menu
                    </button>
                  </div> */}
                  <div className = 'Dashboard__render'>
                      {this.renderMainRoutes()}
                  </div>
              </div>
          )
      }

}