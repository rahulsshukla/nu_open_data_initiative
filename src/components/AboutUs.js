import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Search,
  Grid,
  Header,
  Segment,
  Row
} from "semantic-ui-react";
import "../styles/AboutUs.css";
const AboutUs = () => {
  return (
  
  <Container className="about-us"> 
  <head>
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900' rel='stylesheet' type='text/css'/>
  </head>
  <header><strong>About Us</strong></header>
  <hr></hr>
  <body>
    <h1>
      Our Mission
    </h1>
    <div id="rect">
      <p align='left'>   <emph>Northwestern Open Data Project (NODP)</emph> aims to  </p>
      <p align='center'> increase the <emph> transparency </emph> and <emph> accessibility </emph> </p>
      <p align='right'>  of <emph> Northwestern's public data resources.</emph> </p>
    </div>
    <p>  
      Our Open Data Portal allows anyone to find and analyze Northwestern-related data, 
      such as university finances, student life, and academics.
    </p>
    
    <p>
      NODP will work in collaboration with The Northwestern Daily, Northwestern's premier
      publication. Student journalists are constantly trying to write impactful stories 
      about the university, but they often struggle to find relevant data that would 
      strengthen their naratives. Even if this data can be located, it is often 
      unprocessed and difficult to use. Additionally, there are many stories that wouldn't 
      be discovered without seeing the data first. As a result, NODP's convenient access 
      to Northwestern data will be immensely valuable for The Northwestern Daily.
    </p>

    <h1>
      Our Team
    </h1>
    <table id="teamtable">
      <tr>
        <td>
          <img src="logo192.png" class="profpic"/> Emily Weintraub
        </td>
        <td>
          <img src="logo192.png" class="profpic"/> Rahul Shukla
        </td>
        <td>
          <img src="logo192.png" class="profpic"/> Jenna Jubeir
        </td>
      </tr>
      <tr>
        <td>
        <img src="logo192.png" class="profpic"/> Alex Lee
        </td>
        <td>
        <img src="logo192.png" class="profpic"/> Luke Choe
        </td>
        <td>
        <img src="logo192.png" class="profpic"/> Bradley Ramos
        </td>
      </tr>
    </table>
  
  <h1>
    Contact Us
  </h1>
  <p>E-mail: </p>
  </body>
  </Container>
  );
};

export default AboutUs;
