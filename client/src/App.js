import React from 'react'
import Nav from './components/Nav'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './app.css'

const App = () => {
  return (
    <div>
      <Nav/>
      <Router>
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Router>
    </div>
  )
}

export default App
