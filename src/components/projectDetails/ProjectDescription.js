import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import Carousel from '../projectDetails/carousel';
import TechLogos from '../projectDetails/TechLogos';
import Buttons from '../projectDetails/Buttons';

const hrStyle = {
   marginTop:'2vw',
   marginBottom:'2vw',
   backgroundColor:'white'
}

const ProjectDescription = (props) =>{  
return (
<div className = 'container' >
  <div className='row d-flex justify-content-center' >
    <h1 className = 'pt-5 '>{props.projects.title}</h1>    
  </div>
  <hr style = {hrStyle}></hr>
    <div className = 'row '>
      <div className = 'col-md-4 p-3'>
        <h1>{props.projects.info}</h1>
          <p>
            {props.projects.description}
          </p> 
      </div>
      <div className = 'col-md-8 '>
        <Carousel projects={props.projects}/>
      </div>
  </div>
    <hr style = {hrStyle}></hr>
      <div className = 'row'>
        <div className = 'col m-3 m-md-1'>
          <TechLogos projects = {props.projects}/>
        </div>
        <div className=' col-md-4 d-flex justify-content-center justify-content-md-end m-md-3'>
        <Buttons projects = {props.projects}/>
        </div>
      </div>
</div>
);
};
export default ProjectDescription;