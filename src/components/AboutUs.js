import React from "react";
import "semantic-ui-css/semantic.min.css";
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
          <div class="row start" id="header">
            Our Story
          </div>
          <div class="middle aligned row first">
            <div class="info">
            The Northwestern Open Data Initiative (NODI) is a student group committed to the idea of <a href="https://theodi.org/article/what-is-open-data-and-why-should-we-care/">open data</a>. Open data is data that is available to everyone. At Northwestern, this could mean datasets about student demographics, tuition, NUPD statistics, and more. Our mission is to give our community access to this type of data. Since January 2020, we have been working with Professor Kristian Hammond and the Institutional Research Office at Northwerstern to create an open data portal to host all Northwestern-related data.            
            </div>
          </div>
      </div>
      <div class="ui eight column grid">
        <div class="row next info" id="header">
          Who We Are
        </div>
        <div class="row" id="header">
          The Team
        </div>
        <div class="centered row" id="fixed1">
          <div class="four wide column side">
            <img src={bradley} id="person" alt="Student"/>
            <p class="name">Bradley Ramos</p>
            <img src={rahul} id="person" alt="Student"/>
            <p class="name">Rahul Shukla</p>
          </div>
          <div class="four wide column">
            <img src={emily} id="person" alt="Student"/>   
            <p class="name">Emily Weintraub</p>         
            <img src={jenna} id="person" alt="Student"/> 
            <p class="name">Jenna Jubeir</p>
          </div>
          <div class="four wide column">
            <img src={rishi} id="person" alt="Student"/>     
            <p class="name">Rishi Gudivaka</p>     
            <img src={alex} id="person" alt="Student"/> 
            <p class="name">Alex Lee</p>
          </div>
          <div class="four wide column side">
            <img src={demitra} id="person" alt="Student"/>   
            <p class="name">Demitra Del Fiacco</p>         
            <img src={alexr} id="person" alt="Student"/>
            <p class="name">Alex Rhee</p>
          </div>
        </div>
      </div>
      <div class="ui four column grid">
        <div class="row" id="header">
          Faculty and Advisors
        </div>
        <div class="row" id="fixed2">
          <div class="three wide column side">
            <img src={hammond} id="faculty" alt="Faculty"/>
            <p class="name">Kristian Hammond</p>
          </div>
          <div class="three wide column">
            <img src={amit} id="faculty" alt="Faculty"/> 
            <p class="name">Amit Prachand</p>           
          </div>
          <div class="ten wide column">
          </div>
        </div>
      </div>
      <div class="ui four column grid">
        <div class="row" id="header">
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
