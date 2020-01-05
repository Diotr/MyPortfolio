import React from 'react';
import MyWorkThumbnail from './MyWorkThumbnail';
import { Container } from 'react-bootstrap';
import TetrisBackground from '../media/images/tetr.png';
import sowa from '../media/images/sowa.jpg';
import bird from '../media/images/bird_silhouette_vector_134154_1920x1080.jpg';

import ProjectDescription from './projectDetails/ProjectDescription';


const SideMenu = () =>{
    const projects = [
        {project: 'tetrisgame', image: bird, title: 'tetris', link:'/projectdescription'},
        {project: 'snakegame', image: bird, title: 'Snake', link:'/projectdescription'},
        {project: 'myportfolio', image: TetrisBackground, title: 'My Portfolio', link:'/projectdescription'},
        {project: 'timemanager', image: bird, title: 'bird', link:'/projectdescription'},
      
       
      ];
    return (

        <div className = ''>
        { projects.map((item)=>(<MyWorkThumbnail key ={item.project} pr = {item}/> )) } 
        </div>

        
    )
};
export default SideMenu;