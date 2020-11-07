import React from 'react';
import {Route, Switch} from 'react-router';
import LandingPage from '../../Routes/LandingPage';
import NonRoute from '../../Routes/NonRoute';
import Header from '../Header/Header';

export default class App extends React.Component {
  render() {
    return (
      <div class='wrapper flex-col'>
        <Header/>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route component={NonRoute}/>
        </Switch>
      </div>
    );
  }
}