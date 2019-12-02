import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import '../styling/MyWorkThumbnail.css';
import { tsPropertySignature } from '@babel/types';



const MyWorkThumbnail = props =>{
 
  
    const handleClick = props=>(

   
    
           console.log(props)
        );
 




    return( 
       <div className='myworkthumbnail' onClick={()=>handleClick(props.pr.link)}>
           <Link to ='/resume'>Resume</Link>
        <img src ={props.pr.image}/>
        <p>{props.pr.title}</p>
       

</div>
    );}

export default MyWorkThumbnail;