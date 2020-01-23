import React from 'react';

const Carousel = (props) =>{
    return(

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
   
    );
};
export default Carousel;