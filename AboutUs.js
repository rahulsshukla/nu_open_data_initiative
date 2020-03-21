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

      <p>
        The Northwestern Open Data Initiative (NODI) is a team of committed,
        mission-driven students passionate about the idea of open data.
        <strong> Our mission is to give our community access to the data that serves them.
        </strong>
      </p>
      <p>
        We are working in collaboration with the Institutional Research Office at
        Northerstern to responsibly create an open data portal for the
        university's public data resources.
</p>
    </div>
    <div class="row">
      <p>

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
                  <img src={process.env.PUBLIC_URL+"rahul_shukla.png"} class="profile_pic" width="64px"
                  />
                </div>
                <div class="media-body">

                  <h6 >Founder</h6>
                  <h4 class="media-heading" >Rahul Shukla</h4>
                  I'm a junior studying Computer Science and Economics.
                </div>
              </div>
            </div>

            <div class="media col-sm-6" id= "gg">
              <div class="cc">
                <div class="media-left">
                  <img src={process.env.PUBLIC_URL+"jenna_jubeir.jpg"} class="profile_pic" width="64px"/>
                </div>
                <div class="media-body">
                  <h6 >Founder</h6>
                  <h4 class="media-heading">Jenna Jubeir</h4>
                  I'm a junior studying Computer Science and Chemistry.
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

                  <h6 >Founder</h6>
                  <h4 class="media-heading" >Bradley Ramos</h4>
                  I'm a junior studying Computer Science.
                </div>
              </div>
            </div>

            <div class="media col-sm-6" id= "gg">
              <div class="cc">
                <div class="media-left">
                  <img src={process.env.PUBLIC_URL+"emily_weintraub.jpg"} class="profile_pic" />
                </div>
                <div class="media-body">
                  <h6 >Founder</h6>
                  <h4 class="media-heading">Emily Weintraub</h4>
                  I'm a junior studying Computer Science and Communication Studies.
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

                  <h6 >Founding Member</h6>
                  <h4 class="media-heading" >Luke Cho</h4>
                  I'm a senior studying Computer Science.
                </div>
              </div>
            </div>

            <div class="media col-sm-6" id= "gg">
              <div class="cc">
                <div class="media-left">
                  <img src={process.env.PUBLIC_URL+"alex_lee.png"} class="profile_pic" width="64px"/>
                </div>
                <div class="media-body">
                  <h6 >Founding Member</h6>
                  <h4 class="media-heading">Alex Lee</h4>
                  I'm a junior studying Computer Science.
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
                  Bill and Cathy Osborn Professor of Computer Science at Northwestern's McCormick School of Engineering.
                </div>
              </div>
            </div>
            <div class="clearfix visible-sm-block visible-md-block visible-lg-block"></div>



          </div>
        </div>
        <hr/>
      </div>


  </body>
</Container>
  );
};

export default AboutUs;
