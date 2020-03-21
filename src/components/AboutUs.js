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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
    <link rel="stylesheet" href="../styles/AboutUs.css"/>
  </head>
  
  <body>
    <header>
      <strong>About Us</strong>
    </header>
    <hr></hr>
    <div class="row">
      <h1>
        Our Mission
      </h1>
      <p>
        The Northwestern Open Data Initiative (NODI) is a team of committed
        mission-driven students centered around the idea of open data.
        <strong> Our mission is to give our community access to the data that serves them.
        </strong>

        We are working in collaboration with the Institutional Research Office at
        Northerstern to responsibly create an open data portal for the
        university's public data resources.
      </p>
    </div>
    <div class="row">
      <p>
        NODP will work in collaboration with The Northwestern Daily, Northwestern's premier
        publication. Student journalists are constantly trying to write impactful stories 
        about the university, but they often struggle to find relevant data that would 
        strengthen their naratives. Even if this data can be located, it is often 
        unprocessed and difficult to use. Additionally, there are many stories that wouldn't 
        be discovered without seeing the data first. As a result, NODP's convenient access 
        to Northwestern data will be immensely valuable for The Northwestern Daily.
      </p>
      <hr/>
    </div>
    <div class="row">
      <h1 id="centered">
        People
      </h1>
    </div>
    <div class="row">
        <div class="panel-group">
          <div class="media"></div>
          <div class="clearfix">
            <hr/>
            <p id="centered">Board</p>
            <div class="media col-sm-6" id= "gg">
              <div class="cc">
                <div class="media-left">
                  <img src={process.env.PUBLIC_URL+"rahul_shukla.png"} class="profile_pic" width="64px"/>
                </div>
                <div class="media-body">
          
                  <h6 >McCormick 2021</h6>
                  <h4 class="media-heading" >Rahul Shukla</h4>
                  I'm a junior in McCormick studying Computer Science. I joined HODP because...
                </div>
              </div>
            </div>
            
            <div class="media col-sm-6" id= "gg">
              <div class="cc">
                <div class="media-left">
                  <img src={process.env.PUBLIC_URL+"jenna_jubeir.jpg"} class="profile_pic" width="64px"/>
                </div>
                <div class="media-body">
                  <h6 >McCormick 2021</h6>
                  <h4 class="media-heading">Jenna Jubeir</h4>
                  I'm a junior in McCormick studying Computer Science. Outside of HODP...
                </div>
              </div>
            </div>
            
            <div class="clearfix visible-sm-block visible-md-block visible-lg-block"></div>        
            <div class="media col-sm-6" id= "gg">
              <div class="cc">
                <div class="media-left">
                  <img src={process.env.PUBLIC_URL+"luke_choe.png"} class="profile_pic" width="64px"/>
                </div>
                <div class="media-body">
          
                  <h6 >McCormick 2021</h6>
                  <h4 class="media-heading" >Luke Choe</h4>
                  I'm a senior in McCormick studying Computer Science. I joined HODP because...
                </div>
              </div>
            </div>
            
            <div class="media col-sm-6" id= "gg">
              <div class="cc">
                <div class="media-left">
                  <img src={process.env.PUBLIC_URL+"emily_weintraub.jpg"} class="profile_pic" />
                </div>
                <div class="media-body">
                  <h6 >McCormick 2021</h6>
                  <h4 class="media-heading">Emily Weintraub</h4>
                  I'm a junior in McCormick studying Computer Science and Communication Studies. Outside of HODP...
                </div>
              </div>
            </div>
            
            <div class="clearfix visible-sm-block visible-md-block visible-lg-block"></div>        

            <div class="media col-sm-6" id= "gg">
              <div class="cc">
                <div class="media-left">
                  <img src={process.env.PUBLIC_URL+"bradley_ramos.png"} class="profile_pic" width="64px"/>
                </div>
                <div class="media-body">
          
                  <h6 >McCormick 2021</h6>
                  <h4 class="media-heading" >Bradley Ramos</h4>
                  I'm a junior in McCormick studying Computer Science. I joined HODP because...
                </div>
              </div>
            </div>
            
            <div class="media col-sm-6" id= "gg">
              <div class="cc">
                <div class="media-left">
                  <img src={process.env.PUBLIC_URL+"alex_lee.png"} class="profile_pic" width="64px"/>
                </div>
                <div class="media-body">
                  <h6 >McCormick 2021</h6>
                  <h4 class="media-heading">Alex Lee</h4>
                  I'm a junior in McCormick studying Computer Science. Outside of HODP, I enjoy...
                </div>
              </div>
            </div>
            
            <div class="clearfix visible-sm-block visible-md-block visible-lg-block"></div>        
            
            <p id="centered">Mentors</p>
            <div class="media col-sm-6" id= "gg">
              <div class="cc">
                <div class="media-left">
                  <img src={process.env.PUBLIC_URL+"kristian_hammond.jpg"} class="profile_pic" width="64px"/>
                </div>
                <div class="media-body">
          
                  <h6 >FACULTY MENTOR</h6>
                  <h4 class="media-heading" >Kristian Hammond</h4>
                  Kristian Hammond is a Professor of McCormick School of Engineering at Northwestern.  
                </div>
              </div>
            </div>
            <div class="clearfix visible-sm-block visible-md-block visible-lg-block"></div>        
            
            <p id="centered">Contributors</p>
            <div class="media col-sm-6" id= "gg">
              <div class="cc">
                <div class="media-left">
                  <img src={process.env.PUBLIC_URL+"logo192.png"} class="profile_pic" width="64px"/>
                </div>
                <div class="media-body">
          
                  <h6 >CONTRIBUTOR</h6>
                  <h4 class="media-heading" >NAME</h4>
                  Description...  
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>

    <h1>
      Contact Us
    </h1>
    <br/>
    <p>E-mail: </p>
    <hr/>
  </body>
</Container>
  );
};

export default AboutUs;
