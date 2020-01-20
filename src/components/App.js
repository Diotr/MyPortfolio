import React from 'react';
import NavigationBar from './NavigationBar';
import MyWork from './MyWork';
import Resume from './Resume';
import Contact from './Contact';
import Home from './Home';
import ProjectDescription from './projectDetails/ProjectDescription'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
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
   paddingRight:0,
  overflow:'auto'

}
const App=()=> {
  return (
  
      <main className = 'container-fluid ' style={mainStyle} >
        <NavigationBar/>
          <Switch>
            <Route exact path = '/'>
              <MyWork/>
            </Route>
           <Route  path = '/mywork'>
           <Home/>
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
 
  );
}
export default App;
