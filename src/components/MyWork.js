import React from 'react';
import MyWorkThumbnail from './MyWorkThumbnail';
import { Container } from 'react-bootstrap';
import TetrisBackground from '../media/images/tetr.png';
import sowa from '../media/images/sowa.jpg';
import bird from '../media/images/bird_silhouette_vector_134154_1920x1080.jpg';
import '../styling/MyWork.css';
import ProjectDescription from './projectDetails/ProjectDescription';
import SideMenu from './SideMenu';

const  leftColumnStyle ={

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

const MyWork=()=> {

const projects = [
  {project: 'tetrisgame', image: bird, title: 'tetris', link:'/projectdescription'},
  {project: 'snakegame', image: bird, title: 'Snake', link:'/projectdescription'},
  {project: 'myportfolio', image: TetrisBackground, title: 'My Portfolio', link:'/projectdescription'},

  
  {project: 'timemanager', image: bird, title: 'bird', link:'/projectdescription'},
 
  


];
    return (
 <div className =' d-flex flex-row'>
     <div className ='col-4 col-md-2 d-flex' >
    <div style= {leftColumnStyle}>
    
    <SideMenu/>
      </div>
      </div>
      <div className = 'col ' >
        <div style = {rightColumnStyle}>
   <ProjectDescription/>
   </div>
      </div>
  </div>
    )
  };
  
  export default MyWork;
  