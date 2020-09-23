import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Medication from './components/pages/Medication';
import AddStats from './components/pages/AddStats';
import Chart from './components/pages/Chart';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={Login} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/medication' component={Medication} />
          <Route path='/add-stats' component={AddStats} />
          <Route path='/chart' component={Chart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;