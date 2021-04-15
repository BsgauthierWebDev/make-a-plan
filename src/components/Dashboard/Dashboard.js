import React from 'react';
import {Route, Link} from 'react-router-dom';
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
    componentDidMount() {
        const projectCall = TokenService.hasAuthToken() ? ProjectApiService.getProjects() : Store.projects
            Promise.all([projectCall])
                .then(([projects]) => {
                    this.context.setProjectList(projects)
                })

            .catch(error => {
                console.error({error});
            })
    }

    renderMainRoutes() {
        return (
          <>
            <Route 
              exact path = '/' 
              component = {LandingPage} 
            />
            <Route
              path = '/my-projects'
              component = {ProjectListMain}
            />
            <Route
              path = '/new-project'
              component = {AddProject}
            />
            <Route
              path = '/demo'
              component = {DemoProject}
            />
            <Route
              path = '/contact'
              component = {ContactUs}
            />
          </>
        )
      }

      render() {
          return (
              <div className = 'Dashboard'>
                  <div className = 'Dashboard__main'>
                      {this.renderMainRoutes()}
                  </div>
              </div>
          )
      }

}