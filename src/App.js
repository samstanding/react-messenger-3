import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {Header} from './components/Header';
import Message from './pages/messagePage';
import getMessages  from './pages/showPage';

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
        <Route 
          path="/show"
          component={getMessages}
          />
        </Switch>
        </Router>
  </div>
);

export default App;