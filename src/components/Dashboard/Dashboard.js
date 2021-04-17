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

import ContactUs from '../ContactUs/ContactUs';
import context from '../../context';

export default class Dashboard extends React.Component {
    static contextType = context

    //set state with API call or demo data if no auth token
    // componentDidMount() {
    //     const projectCall = TokenService.hasAuthToken() ? ProjectApiService.getProjects() : Store.projects
    //         Promise.all([projectCall])
    //             .then(([projects]) => {
    //                 this.context.setProjectList(projects)
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

    renderMainRoutes() {
        return (
          <>
            <Route 
              exact path = '/' 
              component = {LandingPage} 
            />
            <Route
              path = '/user/my-projects'
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
              path = '/user/contact'
              component = {ContactUs}
            />
          </>
        )
      }

      render() {
          return (
              <div className = 'Dashboard'>
                  <div className = 'Dashboard__nav'>
                      <Link to = '/'>Home | </Link>
                      <Link to = '/user/my-projects'>My Projects | </Link>
                      <Link to = '/user/new-project'>Add a Project | </Link>
                      <Link to = '/user/contact'>Contact Us</Link>
                  </div>
                  <div className = 'Dashboard__main'>
                      {this.renderMainRoutes()}
                  </div>
              </div>
          )
      }

}