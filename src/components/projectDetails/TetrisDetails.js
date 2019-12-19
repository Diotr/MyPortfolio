import React from 'react';
import '../../styling/TetrisDetails.css';
import {Container, Row, Column, Col} from 'react-bootstrap';
import { relative } from 'path';
import {carousel} from 'bootstrap';
import TetrisImage from '../../media/images/tetr.png';
import Owl from '../../media/images/sowa.jpg';
import Bird from '../../media/images/bird_silhouette_vector_134154_1920x1080.jpg';
import jsLogo from '../../media/logos/javascript-logo.png'
import bootstrapLogo from '../../media/logos/bootstrap-logo.png'
import reactLogo from '../../media/logos/react-logo.png'
import css3Logo from '../../media/logos/css3-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faAddressCard, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
const hrStyle = {
   marginTop:'2vw',
   marginBottom:'2vw',
   backgroundColor:'white'
}
const logosStyle = {
   height:'5.5vh' ,
   marginRight: '4vh', 
   
 
 
}


const TetrisDetails = () =>{


return (
<div className = 'container' >
    <div className='row d-flex justify-content-center' >
        <h1 className = 'pt-5 '>Tetris</h1>
        
    </div>
    <hr style = {hrStyle}></hr>
    {
        //info
    }
    <div className = 'row'>
        <div className = 'col-md-8 '>
        <div id='projectPreview' className='carousel slide ' data-ride='carousel'>
        <div className = 'carousel-inner'>
            <div className = 'carousel-item active'>
                <img className='d-block w-100 rounded'src={TetrisImage} alt = 'FirstImg'></img>
            </div>
            <div className ='carousel-item'>
            <img className='d-block w-100 rounded'src={Owl} alt = 'SecondImg'></img>
            </div>
            <div className ='carousel-item'>
            <img className='d-block w-100 rounded'src={Bird} alt = 'ThirdImg'></img>
            </div>
        </div>
        <a className = 'carousel-control-prev' href = '#projectPreview' role='button' data-slide = 'prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='sr-only'>Prev</span>
        </a>
        <a className = 'carousel-control-next' href = '#projectPreview' role='button' data-slide = 'next'>
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='sr-only'>Next</span>
        </a>
    </div>
  
        </div>
        <div className = 'col-md-4'>
            <h1>info</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
             sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          
        </div>
        
    </div>
    <hr style = {hrStyle}></hr>
    <div className = 'row'>
        <div className = 'col-md-8 col-10'>
            <div className = 'logos d-flex flex-row'>
                <img style = {logosStyle} src={jsLogo} alt='js Logo'></img>
                <img style = {logosStyle} src={reactLogo} alt='react Logo'></img>
                <img style = {logosStyle} src={bootstrapLogo} alt='bootstrap Logo'></img>
                <img style = {logosStyle} src={css3Logo} alt='css3 Logo'></img>
            </div>
       
        </div>
        <div className = 'col-md-4 col-2 d-flex  justify-content-end align-items-center'>
            <button className ='btn d-none  d-md-block border-dark h-75'>Play Tetris</button>
            <button className = 'btn '> <FontAwesomeIcon icon = {faGithubSquare} size='3x'/></button>
           
        
        
        </div>
        </div>
</div>
);
};
export default TetrisDetails;