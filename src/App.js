import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {Header} from './components/Header';
import Message from './pages/MessagePage';
import ShowPage  from './pages/ShowPage';

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
          component={ShowPage}
          />
        </Switch>
        </Router>
  </div>
);

export default App;