import React from 'react';
import {useState} from 'react';
import MyWorkThumbnail from './MyWorkThumbnail';
import { Container } from 'react-bootstrap';
import '../styling/MyWork.css';
import ProjectDescription from './projectDetails/ProjectDescription';

//tetris screenshots
import Tetris1 from '../media/images/tetris1.jpg';
import Tetris2 from '../media/images/tetris2.jpg';
import Tetris3 from '../media/images/tetris3.jpg';
import Tetris4 from '../media/images/tetris4.jpg';

//snake screenshots
import Snake1 from '../media/images/snake1.jpg';
import Snake2 from '../media/images/snake2.jpg';
import Snake3 from '../media/images/snake3.jpg';
import Snake4 from '../media/images/snake4.jpg';


//time manager screenshots
import TM1 from '../media/images/tm1.jpg';
import TM2 from '../media/images/tm2.jpg';

import TetrisBackground from '../media/images/tetr.jpg';
import sowa from '../media/images/sowa.jpg';
import bird from '../media/images/bird_silhouette_vector_134154_1920x1080.jpg';
//tech logos
import jsLogo from '../media/logos/javascript-logo.png'
import bootstrapLogo from '../media/logos/bootstrap-logo.png'
import reactLogo from '../media/logos/react-logo.png'
import css3Logo from '../media/logos/css3-logo.png'
import javaLogo from '../media/logos/java-logo.png'

const  leftColumnStyle = {

    height: '100%',
    paddingRight:'0',
    marginLeft:'2vh',
    marginTop:'2vh',
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
  height:'4vh' ,
  margin: '1vw', 
  }
 
const logoJs=<img style = {logosStyle} src={jsLogo} alt='js Logo'></img>
const logoCss3=<img style = {logosStyle} src={css3Logo} alt='css3 Logo'></img>
const logoReact=<img style = {logosStyle} src={reactLogo} alt='css3 Logo'></img>
const logoBootsrap=<img style = {logosStyle} src={bootstrapLogo} alt='css3 Logo'></img>
const logoJava=<img style = {logosStyle} src={javaLogo} alt='java Logo'></img>


const projects = [
  {
   project: 'tetrisgame',
   image1: Tetris1,
   image2: Tetris2,
   image3: Tetris3,
   title: 'Tetris',
   info: 'first',
   description: 'boberbober opis pierwszy',
   gitLink: 'https://github.com/Piotr-Michalec/tetris-react',
   playButton: <button onClick={()=>window.open('https://www.onet.pl/', '_blank')} 
                className ='btn d-md-block border-dark mr-1'>Play Tetris</button>,
   techUsedLogos: [logoReact,logoJs,logoCss3,logoBootsrap]
 },

 {
 project: 'portfolio',
 image1: sowa,
 image2: TetrisBackground,
 image3: TetrisBackground,
 title: 'portfolio template',
 info:'first',
 description: 'bopis drugi',
 gitLink: 'https://github.com/Diotr/MyPortfolio',
 playButton: <button onClick={()=>window.open('https://www.onet.pl/', '_blank')} 
 className ='btn d-md-block border-dark mr-1'>Visit site</button>,
   techUsedLogos:[logoReact,logoJs,logoCss3,logoBootsrap]
},

{
 project: 'snake',
 image1: Snake2,
 image2: Snake4,
 image3: Snake3,
 title: 'snake',
 info:'about',
 description: <ul>
              <li>something about my snake</li>
              <li>something else about my snake</li>

              </ul>,
 gitLink: 'https://github.com/Piotr-Michalec/Snake-or-something-else',
 playButton: null,
 techUsedLogos:[logoJs,logoCss3,logoBootsrap]
},

{
 project: 'timemanager',
 image1: TM1,
 image2: TM2,
 image3: TM1,
 title: 'time manager',
 info:'first',
 description: 'boberbober',
 gitLink: 'https://github.com/Piotr-Michalec/Task-Manager',
 playButton: null, 
 techUsedLogos:[logoJava]
},


 
];



const MyWork=()=> {
  
  
  const [state, setState] = useState({arrIndex:0});

  const switchProjectHandler = (projectIndex) =>{
    setState({arrIndex:projectIndex})
  };



    return (
 <div className =' d-flex flex-row '>
     <div className ='col-4 col-md-2 d-flex p-0' >
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
  