import React from 'react';
import '../styling/MyWorkThumbnail.css';


const MyWorkThumbnail = props =>{

   const projectIndex = props.index;

    return( 
       <div className='myworkthumbnail'onClick={()=>{props.switchProjectHandler(projectIndex)}}>
        
        <img src ={props.pr.image1}/>   
     <div className ='toplayer'>
     <h1 className = 'thumbtext'>{props.pr.title}</h1>
         </div>
             
</div>
  );}

export default MyWorkThumbnail;