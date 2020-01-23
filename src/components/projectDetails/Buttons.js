import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Buttons = props => {
    return(
<div className = 'd-flex flex-row justify-content-around '>
    {props.projects.playButton}
    <a href={props.projects.gitLink} target='_blank'
    className = 'btn  btn-sm border border-dark  '>
    <FontAwesomeIcon icon = {faGithubSquare} size='3x'/> </a>
</div>
    );
}
export default Buttons;