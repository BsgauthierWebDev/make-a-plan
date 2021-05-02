import React from 'react';
import {Route} from 'react-router-dom';
// import config from '../../config';
// import Project from '../Project/Project';
import TokenService from '../../services/token-service';
// import ProjectApiService from '../../services/project-api-service';
// import LandingPage from '../LandingPage/LandingPage';
// import AddProject from '../AddProject/AddProject';
// import DemoProject from '../DemoProject/DemoProject';
// import ProjectListMain from '../ProjectListMain/ProjectListMain';
// import TestPage from '../TestPage/TestPage';
// import DashboardMain from '../DashboardMain/DashboardMain';
import DashboardNav from '../DashboardNav/DashboardNav';
// import Store from '../../Store';
import Context from '../../context';

// import ContactUs from '../ContactUs/ContactUs';
// import context from '../../context';

export default class Dashboard extends React.Component {
    static contextType = Context

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

    // renderMainRoutes() {
    //     return (
    //       <>
    //         {['/user/projects/:projectId'].map(path => (
    //             <Route
    //                 key = {path}
    //                 path = {path}
    //                 component = {DashboardProject}
    //             />
    //         ))}
    //         <Route 
    //           exact path = '/' 
    //           component = {LandingPage} 
    //         />
    //         {/* <Route
    //             exact path = '/user'
    //             component = {Dashboard}
    //         /> */}
    //         <Route
    //           path = '/user/projects'
    //           component = {ProjectListMain}
    //         />
    //         <Route
    //           path = '/user/new-project'
    //           component = {AddProject}
    //         />
    //         <Route
    //           path = '/demo'
    //           component = {DemoProject}
    //         />
    //         <Route
    //             path = '/user/test-page'
    //             component = {TestPage}
    //         />
    //       </>
    //     )
    //   }

      render() {
        const {users} = this.context
        const {username} = this.props

        // const value = {
        //     projects: this.state.projects
        // }

          return (
            //   <Context.Provider value = {value}>
              <div className = 'Dashboard'>
                  {/* <div className = 'Dashboard__nav'>
                      <Link to = '/'>Home | </Link>
                      <Link to = '/user'>My Account | </Link>
                      <Link to = '/user/projects'>My Projects | </Link>
                      <Link to = '/user/new-project'>Add a Project | </Link>
                      <Link to = '/user/test-page'>User Test</Link>
                  </div> */}
                  <div className = 'Dashboard__main-intro'>
                  <h1>
                        {TokenService.hasAuthToken()
                            ? `Hello ${username}, welcome to your account`
                            : 'Demo Dashboard'}
                    </h1>
                  </div>
                  {/* <div className = 'Dashboard__main-routes'>
                    {this.renderMainRoutes()}
                  </div> */}
                  {/* <div className = 'Dashboard__main'>
                      <button
                        className = 'Dashboard__link'
                        id = 'menu'
                        onClick = {e => this.openNav()}
                    >
                        Menu
                    </button>
                  </div> */}
                  {/* <div className = 'Dashboard__render'>
                      {this.renderMainRoutes()}
                  </div> */}
              </div>
            //   </Context.Provider>
          )
      }

}