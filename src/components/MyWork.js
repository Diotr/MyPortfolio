import React from 'react';
import {useState} from 'react';
import MyWorkThumbnail from './MyWorkThumbnail';
import { Container } from 'react-bootstrap';
import '../styling/MyWork.css';
import ProjectDescription from './projectDetails/ProjectDescription';

import TetrisBackground from '../media/images/tetr.png';
import sowa from '../media/images/sowa.jpg';
import bird from '../media/images/bird_silhouette_vector_134154_1920x1080.jpg';

import jsLogo from '../media/logos/javascript-logo.png'
import bootstrapLogo from '../media/logos/bootstrap-logo.png'
import reactLogo from '../media/logos/react-logo.png'
import css3Logo from '../media/logos/css3-logo.png'


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
const logosStyle = {
  height:'5.5vh' ,
  marginRight: '4vh', 
  }
 
const logoJs=<img style = {logosStyle} src={jsLogo} alt='js Logo'></img>
const logoCss3=<img style = {logosStyle} src={css3Logo} alt='css3 Logo'></img>
const logoReact=<img style = {logosStyle} src={reactLogo} alt='css3 Logo'></img>
const logoBootsrap=<img style = {logosStyle} src={bootstrapLogo} alt='css3 Logo'></img>



const projects = [
  {
   project: 'tetrisgame',
   image1: bird,
   image2: bird,
   image3: bird,
   title: 'tetrissss',
   info: 'first',
   description: 'boberbober opis pierwszy',
   gitLink: 'https://github.com/Diotr/MyPortfolio',
   playButton: <button className ='btn d-none  d-md-block border-dark h-100'>Play Tetris</button>,
   techUsedLogos:[logoJs,logoReact,logoCss3,logoBootsrap]
 },

 {
 project: 'tetrisgame',
 image1: sowa,
 image2: bird,
 image3: TetrisBackground,
 title: 'portfolio ',
 info:'first',
 description: 'bopis drugi',
 gitLink: 'https://github.com/Diotr/MyPortfolio',
 playButton: null,  techUsedLogos:[logoJs,logoReact,logoBootsrap]
},

{
 project: 'tetrisgame',
 image1: bird,
 image2: bird,
 image3: bird,
 title: 'snake',
 info:'first',
 description: 'opis snakea',
 gitLink: 'https://github.com/Diotr/MyPortfolio',
 playButton: null,
 techUsedLogos:[logoJs,logoCss3,logoBootsrap]
},

{
 project: 'tetrisgame',
 image1: bird,
 image2: bird,
 image3: bird,
 title: 'tetrissss',
 info:'first',
 description: 'boberbober',
 gitLink: 'https://github.com/Diotr/MyPortfolio',
 playButton: null, 
 techUsedLogos:[logoJs,logoReact]
},

{
  project: 'tetrisgame',
  image1: bird,
  image2: bird,
  image3: bird,
  title: 'tetrissss',
  info:'first',
  description: 'boberbober',
  gitLink: 'https://github.com/Diotr/MyPortfolio',
  playButton: null, 
  techUsedLogos:['logo1,logo2']
 },
 
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
  