import {Route, Switch} from 'react-router-dom'
import Home from './../Home'
import EmployeeDetails from './../EmployeeDetails'

import NotFound from './../NotFound'


import './index.css'

const App = () => (
        <Switch>
    
          <Route exact path='/' component={Home} />
          <Route exact path="/lovaraju/:id" component={EmployeeDetails} />
          <Route component={NotFound} />
        </Switch>

)

export default App