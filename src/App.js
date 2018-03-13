import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {Header} from './components/Header';
import Message from './pages/MessagePage';


// import './styles/main.css';

const App = () => (
  <div>
    <Header /> 
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={Message}
        />
        </Switch>
        </Router>
  </div>
);

export default App;