import React from 'react';
import '../styling/App.css';

import AboutMe from './AboutMe';
import NavigationBar from './NavigationBar';
import MyWork from './MyWork';
import Resume from './Resume';
import Contact from './Contact';
import SideDrawer from './SideDrawer';
import Home from './Home';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Container, Jumbotron  } from 'react-bootstrap';
const App=()=> {
  return (
    <Router>
  <div id='app'>

  <NavigationBar/>


<main>

<Switch>
  <Route exact path = '/'>
    <Home/>
  </Route>

  <Route  path = '/aboutme'>
     <AboutMe/>
  </Route>
     <Route  path = '/mywork'>
     <MyWork/>
   </Route>

    <Route  path = '/resume'>
     <Resume/>
   </Route>
  <Route path = '/contact'>
  <Contact/>
  </Route>
</Switch>
</main>

    </div>  
    </Router>
  );
}

export default App;
