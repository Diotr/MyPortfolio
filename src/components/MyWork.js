import React from 'react';
import MyWorkThumbnail from './MyWorkThumbnail';
import { Container } from 'react-bootstrap';
import TetrisBackground from '../media/images/tetr.png';
import sowa from '../media/images/sowa.jpg';
import bird from '../media/images/bird_silhouette_vector_134154_1920x1080.jpg';
import '../styling/MyWork.css';





const MyWork=()=> {

const projects = [
  {project: 'tetrisgame', image: bird, title: 'tetris', link:'/tetrisdetails'},
  {project: 'tetrisgame', image: bird, title: 'bird2', link:'/aboutme'},
  {project: 'tetrisgame', image: bird, title: 'bird', link:'/aboutme'},

  
  {project: 'tetrisgame', image: bird, title: 'bird', link:'/aboutme'},
  {project: 'tetrisgame', image: bird, title: 'bird2', link:'/aboutme'},
  {project: 'tetrisgame', image: bird, title: 'bird', link:'/aboutme'},

  {project: 'tetrisgame', image: bird, title: 'bird', link:'/aboutme'},
 
  {project: 'tetrisgame', image: bird, title: 'tetris', link:'/tetrisdetails'},
  {project: 'tetrisgame', image: bird, title: 'bird2', link:'/aboutme'},
  {project: 'tetrisgame', image: bird, title: 'bird', link:'/aboutme'},

  {project: 'tetrisgame', image: bird, title: 'bird', link:'/aboutme'},
  {project: 'tetrisgame', image: bird, title: 'bird2', link:'/aboutme'},
  {project: 'tetrisgame', image: bird, title: 'bird', link:'/aboutme'},

  {project: 'tetrisgame', image: bird, title: 'bird', link:'/aboutme'},
  


];
    return (
 
     <div className ='container-fluid d-flex flex-wrap justify-content-center' >
       
     
          { projects.map((item)=>(<MyWorkThumbnail key ={item.project} pr = {item}/> )) }
         
        </div>
      
        
    )
  };
  
  export default MyWork;
  