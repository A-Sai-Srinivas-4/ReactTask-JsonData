import {Route, Switch} from 'react-router-dom'

import Resources from '../Resources'
import Home from './../Home'
import Projects from '../Projects'
import EmployeeDetails from './../EmployeeDetails'
import ProjectDetails from '../ProjectDetails'
//import NotFound from './../NotFound'

import './index.css'
import NotFound from '../../components/NotFound'

const Apppp = () => (
  <div className="app-container">
    <div className="responsive-container">
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Resources" component={Resources} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/lovaraju/:id" component={EmployeeDetails} />
          <Route exact path="/project_details/:projectname/:projectdetails" component={ProjectDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default Apppp