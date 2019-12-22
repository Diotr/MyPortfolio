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
import SnakeGameDetails from './projectDetails/SnakeGameDetails'
import ProjectDescription from './projectDetails/ProjectDescription'

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Container, Jumbotron  } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faAddressCard,faPrint  } from '@fortawesome/free-solid-svg-icons'
library.add(
  fab, faCheckSquare, faCoffee, faAddressCard,faPrint,faGithubSquare
  );
  
const mainStyle = {

  
  height:'100%',
    backgroundColor:'rgb(255,255,255)',
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
  <Route path = '/projectdescription'>
  <ProjectDescription/>
  </Route>
  
</Switch>
</main>

     
    </Router>
    
  );
}

export default App;
