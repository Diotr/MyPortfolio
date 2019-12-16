import React from 'react';
function AboutMe() {
  return (
    <div className="container  p-5 h-100">
      <h1 className='my-2 ml-5'>Diotrek Michalce</h1>
      <div className=' h-75 ' style={{borderLeft: '5px solid', borderTop:'5px solid', padding:'8vw'}}>
      <h3 className = 'm-3'>AboutMe</h3>
      <p className = 'm-3'> "Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    </div>
  );
}

export default AboutMe;
