import React from 'react';
import MyWorkThumbnail from './MyWorkThumbnail';
import { Container } from 'react-bootstrap';
import TetrisBackground from '../media/images/tetr.png';
import sowa from '../media/images/sowa.jpg';
import '../styling/MyWork.css';
const MyWork=()=> {

const projects = [
  {project: 'tetrisgame', image: TetrisBackground, title: 'left', link:'/aboutme'},
  {project: 'snakegame', image:TetrisBackground, title: 'right', link: 'second'},

  {project: 'something', image:TetrisBackground, title: 'bottom', link: 'third'},

];
    return (
 
     <div className ='content'>
        { projects.map((item)=>(<MyWorkThumbnail key ={item.project} pr = {item}/>)) }
        
      
        </div>
      
        
    )
  };
  
  export default MyWork;
  