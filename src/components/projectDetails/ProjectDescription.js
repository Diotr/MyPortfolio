import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const hrStyle = {
   marginTop:'2vw',
   marginBottom:'2vw',
   backgroundColor:'white'
}

const ProjectDescription = (props) =>{
    
return (
<div className = 'container' >
  <div className='row d-flex justify-content-center' >
    <h1 className = 'pt-5 '>{props.projects.title}</h1>    
  </div>
  <hr style = {hrStyle}></hr>
    <div className = 'row '>
      <div className = 'col-md-4 p-3'>
        <h1>{props.projects.info}</h1>
          <p>
            {props.projects.description}
          </p> 
      </div>
      <div className = 'col-md-8 '>
        <div id='projectPreview' className='carousel slide ' data-ride='carousel' style={{boxShadow: '5px 5px 5px grey'}}>
        <div className = 'carousel-inner'>
          <div className = 'carousel-item active'>
            <img className='d-block w-100 rounded'src={props.projects.image1} alt = 'FirstImg'></img>
          </div>
            <div className ='carousel-item'>
              <img className='d-block w-100 rounded'src={props.projects.image2} alt = 'SecondImg'></img>
            </div>
            <div className ='carousel-item'>
              <img className='d-block w-100 rounded'src={props.projects.image3} alt = 'ThirdImg'></img>
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
  </div>
    <hr style = {hrStyle}></hr>
      <div className = 'row'>
        <div className = 'col-md-8 col-8'>
            <div className = 'logos d-flex flex-wrap col-md-flex-row'>
                {props.projects.techUsedLogos}
            </div>
        </div>
          <div className = 'col-md-4 col-4 d-flex flex-wrap flex-md-row justify-content-md-end justify-content-around align-items-center'>
            {props.projects.playButton}
              <a href={props.projects.gitLink} target='_blank'
              className = 'btn border border-dark  mx-3 h-100'>
               <FontAwesomeIcon icon = {faGithubSquare} size='3x'/> </a>
        </div>
      </div>
</div>
);
};
export default ProjectDescription;