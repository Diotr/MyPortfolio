import React from 'react';
import MyWorkThumbnail from './MyWorkThumbnail';
import { Container } from 'react-bootstrap';
import TetrisBackground from '../media/images/tetr.png';
import sowa from '../media/images/sowa.jpg';
import bird from '../media/images/bird_silhouette_vector_134154_1920x1080.jpg';
import '../styling/MyWork.css';
import ProjectDescription from './projectDetails/ProjectDescription';
import SideMenu from './SideMenu';
import {useState} from 'react';

const  leftColumnStyle = {

    height: '100%',
    paddingRight:'0',
    marginLeft:'2vh',
    overflowY: 'auto',
    position: 'relative',
    width:'90%',
    left:'0',
    top:'7vh',
    bottom: '0'
}
const rightColumnStyle ={
    overflowY:'hidden'
}


const projects = [
  {project: 'tetrisgame', image: bird, title: 'tetrissss', info:'first', },
  {project: 'snakegame', image: bird, title: 'Snake', info: 'second'},
  {project: 'myportfolio', image: TetrisBackground, title: 'My Portfolio'},
  {project: 'timemanager', image: bird, title: 'bird'},
  {project: 'boberrr', image: bird, title: 'boberrr',info:'boberboberum'},
  
];



const MyWork=()=> {
  
  
  const [state, setState] = useState({arrIndex:0});

  const switchProjectHandler = (projectIndex) =>{
    setState({arrIndex:projectIndex})
  
    console.log("switch"+projectIndex)
  };


    return (
 <div className =' d-flex flex-row'>
     <div className ='col-4 col-md-2 d-flex' >
    <div style= {leftColumnStyle}>
    
    {projects.map((item,index)=>(<MyWorkThumbnail key ={item.project}
     pr = {item} index = {index} switchProjectHandler={switchProjectHandler}/> )) } 
      </div>
      </div>
      <div className = 'col ' >
        <div style = {rightColumnStyle}>
       
   <ProjectDescription projects = {projects[state.arrIndex]} 
    
   />
   </div>
      </div>
      
  </div>
    )
  };
  
  export default MyWork;
  