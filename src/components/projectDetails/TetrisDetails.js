import React from 'react';
import '../../styling/TetrisDetails.css';
import {Container, Row, Column, Col} from 'react-bootstrap';

const TetrisDetails = () =>{


return (
<div className = "container">

       <Row>
           <Col><h1>title</h1></Col>
           
        </Row>
        <Row>
            <Col lg = "8"><h1>8</h1></Col>
            <Col lg ="4">4</Col>
        </Row>
  
   </div>
);
};
export default TetrisDetails;