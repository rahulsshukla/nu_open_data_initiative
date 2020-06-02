import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Search,
  Grid,
  Header,
  Segment,
  Row,
  Button
} from "semantic-ui-react";
import "../styles/AboutUs.css";
import bradley from "../bradley.png";
import rahul from "../rahul.png";
import emily from "../Emily.jpg";
import alex from "../Alex.png";
import rishi from "../rishi.png";
import jenna from "../jenna.png";
import demitra from "../demitra.png";
import alexr from "../alexr.jpeg";
import hammond from "../hammond.jpg";
import amit from "../amit.jpg";

const AboutUs = () => {
  return (
    <div>
      <div class="ui four column grid" id="one">
          <div class="row start" id="hdr">
            Our Story
          </div>
          <div class="middle aligned row first">
            <div class="info">
            The Northwestern Open Data Initiative (NODI) is a team of committed, mission-driven students passionate about the idea of open data. Our mission is to give our community access to the data that serves them. We are working in collaboration with the Institutional Research Office at Northerstern to responsibly create an open data portal for the university's public data resources.            
            </div>
          </div>
      </div>
      <div class="ui eight column grid">
        <div class="row next info" id="hdr">
          Who We Are
        </div>
        <div class="row" id="hdr">
          The Team
        </div>
        <div class="centered row" id="fixed1">
          <div class="four wide column side">
            <img src={bradley} id="person"/>
            <p class="name">Bradley Ramos</p>
            <img src={rahul} id="person"/>
            <p class="name">Rahul Shukla</p>
          </div>
          <div class="four wide column">
            <img src={emily} id="person"/>   
            <p class="name">Emily Weintraub</p>         
            <img src={jenna} id="person"/> 
            <p class="name">Jenna Jubeir</p>
          </div>
          <div class="four wide column">
            <img src={rishi} id="person"/>     
            <p class="name">Rishi Gudivaka</p>     
            <img src={alex} id="person"/> 
            <p class="name">Alex Lee</p>
          </div>
          <div class="four wide column side">
            <img src={demitra} id="person"/>   
            <p class="name">Demitra Del Fiacco</p>         
            <img src={alexr} id="person"/>
            <p class="name">Alex Rhee</p>
          </div>
        </div>
      </div>
      <div class="ui four column grid">
        <div class="row" id="hdr">
          Faculty and Advisors
        </div>
        <div class="row" id="fixed2">
          <div class="three wide column side">
            <img src={hammond} id="faculty"/>
            <p class="name">Kristian Hammond</p>
          </div>
          <div class="three wide column">
            <img src={amit} id="faculty"/> 
            <p class="name">Amit Prachand</p>           
          </div>
          <div class="ten wide column">
          </div>
        </div>
      </div>
      <div class="ui four column grid">
        <div class="row" id="hdr">
          Partnerships
        </div>
        <div class="row" id="two">
          <div class="eight wide column side">
          </div>
          <div class="eight wide column">         
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
