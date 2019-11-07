import React from 'react';
import './App.css';
import Login from './components/loginComponent';
import Dashboard from './components/dashboardcomponent';
import Tableexample from './components/tablecomponent';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
function App() {
  return (
    <div>
        {/* <Login/>
        <Dashboard/> */}
        <BrowserRouter>
          <Switch>
          <Route path="/login" component={Login} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/table" component={Tableexample} />
              {/* 
              <Route exact path="/signup" component={signup} />
              <Route exact path="/remember" component={remember} />
  <Route component={DefaultContainer} /> */}
          </Switch>
        </BrowserRouter>
     
          {/* <Route exact path="/Login" component={Login} /> */}
         
     
     
    </div>
  );
}

export default App;
