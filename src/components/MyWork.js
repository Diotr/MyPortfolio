import React from 'react';
import {useState} from 'react';
import MyWorkThumbnail from './MyWorkThumbnail';
import '../styling/MyWork.css';
import ProjectDescription from './projectDetails/ProjectDescription';
//portfolio screenshots
import Portfolio1 from '../media/images/PortfolioScreenshot.jpg';
import Portfolio2 from '../media/images/PortfolioScreenshot2.jpg';
import Portfolio3 from '../media/images/PortfolioScreenshot3.jpg';

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

//tech logos
import jsLogo from '../media/logos/javascript-logo.png'
import bootstrapLogo from '../media/logos/bootstrap-logo.png'
import reactLogo from '../media/logos/react-logo.png'
import css3Logo from '../media/logos/css3-logo.png'
import javaLogo from '../media/logos/java-logo.png'
import routerLogo from '../media/logos/router-logo.png'
import hooksLogo from '../media/logos/hooks.png'

//descriptions
const tetrisDescription = `The game board is a two-dimensional array stored in the state. 
 Internal arrays represents horizontal rows, where each element contains a number from 0 to 5 which determines what colour given field is.
 Blocks movement is achieved by updating those numbers.`;

const portfolioDescription =`Portfolio template Web App, projects are stored as objects in the projects array,
 so it makes it very easy to use.
 Just utilise the template provided to add another one, the thumbnail will be added automatically.
 This web app has been created with the use of JavaScript, React JS, react-hooks, react-router, Bootstrap, CSS3 and is fully responsive`;

const snakeDescription = `A classic snake made with JavaScript`;

const timemanagerDescription = `Application created for effective time management.`;

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
    overflowY:'hidden',
    height:'100%'
}
const logosStyle = {
  height:'4vh' ,
  margin: '1vw', 
  }
 //logos
const logoJs=<img style = {logosStyle} src={jsLogo} alt='js Logo'></img>
const logoCss3=<img style = {logosStyle} src={css3Logo} alt='css3 Logo'></img>
const logoReact=<img style = {logosStyle} src={reactLogo} alt='react Logo'></img>
const logoBootsrap=<img style = {logosStyle} src={bootstrapLogo} alt='bootstrap Logo'></img>
const logoJava=<img style = {logosStyle} src={javaLogo} alt='java Logo'></img>
const logoRouter=<img style = {logosStyle} src={routerLogo} alt='react-router Logo'></img>
const logoHooks=<img style = {logosStyle} src={hooksLogo} alt='react-hooks Logo'></img>

const projects = [
 {
 project: 'portfolio',
 image1: Portfolio1,
 image2: Portfolio2,
 image3: Portfolio3,
 title: 'Portfolio template',
 info:'About',
 description: portfolioDescription,
 gitLink: 'https://github.com/Diotr/MyPortfolio',
 playButton:  null,
techUsedLogos:[logoReact,logoJs,logoCss3,logoBootsrap,logoRouter,logoHooks]
},
{
  project: 'tetrisgame',
  image1: Tetris1,
  image2: Tetris2,
  image3: Tetris3,
  title: 'Tetris',
  info: 'About',
  description: tetrisDescription,
  gitLink: 'https://github.com/Piotr-Michalec/tetris-react',
  playButton: <button onClick={()=>window.open('https://suspicious-murdock-bd2311.netlify.com/', '_blank')} 
               className ='btn d-md-block border-dark mr-1'>Play Tetris</button>,
  techUsedLogos: [logoReact,logoJs,logoCss3,logoBootsrap]
},
{
 project: 'Snake',
 image1: Snake2,
 image2: Snake4,
 image3: Snake3,
 title: 'Snake',
 info:'About',
 description: snakeDescription,
 gitLink: 'https://github.com/Piotr-Michalec/Snake-or-something-else',
 playButton: null,
 techUsedLogos:[logoJs,logoCss3,logoBootsrap]
},

{
 project: 'timemanager',
 image1: TM1,
 image2: TM2,
 image3: TM1,
 title: 'Time Manager',
 info:'About',
 description: timemanagerDescription,
 gitLink: 'https://github.com/Piotr-Michalec/Task-Manager',
 playButton: null, 
 techUsedLogos:[logoJava]
},

];



const MyWork=()=> {
  const [state, setState] = useState({arrIndex:0});
  const switchProjectHandler = (projectIndex) =>{
    setState({arrIndex:projectIndex})};
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
      <ProjectDescription projects = {projects[state.arrIndex]}/>
    </div>
    </div>  
  </div>
    )
  };
  
  export default MyWork;
  