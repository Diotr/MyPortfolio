import React from 'react';

//const logoJs=<img style = {logosStyle} src={props.projects.techUsedLogos} alt='js Logo'></img>
//const logoCss3=<img style = {logosStyle} src={css3Logo} alt='css3 Logo'></img>
//const logoReact=<img style = {logosStyle} src={reactLogo} alt='css3 Logo'></img>
//const logoBootsrap=<img style = {logosStyle} src={bootstrapLogo} alt='css3 Logo'></img>
//const logoJava=<img style = {logosStyle} src={javaLogo} alt='java Logo'></img>


const TechLogos = props =>{
    return(
<div className = 'logos d-flex flex-wrap col-md-flex-row justify-content-center justify-content-md-start'>
{props.projects.techUsedLogos}
</div>
    );
};
export default TechLogos;