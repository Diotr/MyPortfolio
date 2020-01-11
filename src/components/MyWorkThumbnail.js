import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link, withRouter} from 'react-router-dom';
import '../styling/MyWorkThumbnail.css';
import { tsPropertySignature } from '@babel/types';
import {useHistory} from "react-router-dom";
import Bootstrap from 'bootstrap';



const MyWorkThumbnail = props =>{

   const projectIndex = props.index;
   
    



    return( 
       <div className='myworkthumbnail'onClick={()=>{props.switchProjectHandler(projectIndex)}}>
        <div>
        <img src ={props.pr.image1}/>
        
     <div className ='toplayer'>
     <h1 className = 'thumbtext'>{props.pr.title}</h1>
     
    
     
         </div>
        </div> 
        

</div>

    );}

export default MyWorkThumbnail;