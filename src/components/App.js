import React from 'react';
import '../styling/App.css';

import AboutMe from './AboutMe';
import NavigationBar from './NavigationBar';
import MyWork from './MyWork';
import Resume from './Resume';
import Contact from './Contact';
import SideDrawer from './SideDrawer';
import Home from './Home';
import TetrisDetails from './projectDetails/TetrisDetails'

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Container, Jumbotron  } from 'react-bootstrap';
const mainStyle = {

  
  height:'100%',
    backgroundColor:'rgb(66, 194, 245)',
   paddingLeft:0,
   paddingRight:0
  
    
   
    



}
const App=()=> {
  return (
 
    <Router>
  




<main className = 'container-fluid ' style={mainStyle} >
<NavigationBar/>
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
  <Route path = '/tetrisdetails'>
  <TetrisDetails/>
  </Route>
</Switch>
</main>

     
    </Router>
    
  );
}

export default App;
