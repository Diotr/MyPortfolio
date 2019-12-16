import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link, withRouter} from 'react-router-dom';
import '../styling/MyWorkThumbnail.css';
import { tsPropertySignature } from '@babel/types';
import {useHistory} from "react-router-dom";
import Bootstrap from 'bootstrap';



const MyWorkThumbnail = props =>{
 let history = useHistory();
  
    const handleClick = ()=>{ //redirect to the project page
        history.push(props.pr.link);
       
        console.log(props)

    };
 




    return( 
       <div className='myworkthumbnail' onClick={()=>handleClick(props.pr.link) }>
        <div>
        <img src ={props.pr.image}/>
        
     <div className ='toplayer'>
     <h1 className = 'thumbtext'>{props.pr.title}</h1>
     
         </div>
        </div> 
        

</div>

    );}

export default MyWorkThumbnail;