import React from 'react';
import MyWorkThumbnail from './MyWorkThumbnail';
import { Container } from 'react-bootstrap';
import TetrisBackground from '../media/images/tetr.png';
import sowa from '../media/images/sowa.jpg';
import bird from '../media/images/bird_silhouette_vector_134154_1920x1080.jpg';

import ProjectDescription from './projectDetails/ProjectDescription';


const SideMenu = (props) =>{
    
      
    return (

        <div className = ''>
            
        { props.projects.map((item)=>(<MyWorkThumbnail key ={item.project} 
        pr = {item} switchProjectHandler={()=>props.switchProjectHandler()}/> )) } 
        </div>

        
    )
};
export default SideMenu;