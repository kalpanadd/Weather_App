import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './COMPONENTS/Home/Home';
import Application from './COMPONENTS/Application/Application';


function App() {
  return (
    < Router>
      <Switch>
        <div className='app'>
          <Route exact path='/' component={Home} />
          <Route exact path='/weather' component={Application} />
        </div>
      </Switch>
    </Router>
  )
}

export default App;
