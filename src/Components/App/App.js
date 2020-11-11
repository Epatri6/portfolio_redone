import React from 'react';
import {Route, Switch} from 'react-router';
import LandingPage from '../../Routes/LandingPage/LandingPage';
import NonRoute from '../../Routes/NonRoute/NonRoute';
import Header from '../Header/Header';
import ContactPage from '../../Routes/ContactPage/ContactPage';
import ProjectPage from '../../Routes/ProjectPage/ProjectPage';
import SpritPage from '../../Routes/Sprit/SpritPage';
import SpacedPage from '../../Routes/Spaced/SpacedPage';
import GoatPage from '../../Routes/Goat/GoatPage';
import AboutPage from '../../Routes/AboutPage/AboutPage';

export default class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Header/>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/about' component={AboutPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/projects' component={ProjectPage}/>
          <Route path='/sprit' component={SpritPage}/>
          <Route path='/spaced-repetition' component={SpacedPage}/>
          <Route path='/goat' component={GoatPage}/>
          <Route component={NonRoute}/>
        </Switch>
      </div>
    );
  }
}