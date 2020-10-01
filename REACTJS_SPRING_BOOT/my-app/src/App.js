import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import UserComponent from './components/UserComponent';
import CreateUserForm from './components/CreateUserForm';
 import UserDetailForm from './components/UserDetailForm';

function App() {
  return (
    <div>
      <Router>
    <div className="App">
      <Switch>
      <Route  path = "/detail/:userId" component= {UserDetailForm}></Route>
      <Route  path = "/create" component= {CreateUserForm}></Route>
        <Route exact path = "/users" component= {UserComponent}></Route>
        <Route  path = "/" component= {UserComponent}></Route>
      </Switch>
      
    </div>
    </Router>
    </div>
  );
}

export default App;
