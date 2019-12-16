import React from 'react';
import '../../styling/TetrisDetails.css';
import {Container, Row, Column, Col} from 'react-bootstrap';
import { relative } from 'path';
import {carousel} from 'bootstrap';
import TetrisImage from '../../media/images/tetr.png';
import Owl from '../../media/images/sowa.jpg';
import Bird from '../../media/images/bird_silhouette_vector_134154_1920x1080.jpg';
const hrStyle = {
   marginTop:'3vw',
   marginBottom:'3vw'
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
        <div className = 'col-md-8'>
        technology used +
        </div>
        <div className = 'col-md-4'>
        buttons
        </div>
        </div>
</div>
);
};
export default TetrisDetails;