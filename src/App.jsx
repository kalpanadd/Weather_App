import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './COMPONENTS/Home/Home';
import Application from './COMPONENTS/Application/Application';


function App() {
  return (
    < Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/weather' component={Application} />

      </Switch>
    </Router>
  )
}

export default App;
