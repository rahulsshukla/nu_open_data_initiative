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
import nu from "../nu.jpg";
import bradley from "../bradley.png";
import rahul from "../rahul.png";
import emily from "../Emily.jpg";
import alex from "../Alex.png";

const AboutUs = () => {
  return (
    <div>
      <div class="ui four column grid" id="one">
          <div class="row start" id="header">
            Our Story
          </div>
          <div class="middle aligned row first">
            <div class="six wide column">
              <img src={nu} class="ui image" />
            </div>
            <div class="eight wide column">
              The Northwestern Open Data Initiative (NODI) is making data about Northwestern University more accessible and transparent. Our Open Data Portal allows anyone to find and analyze Northwestern-related data, such as university finances, student life, and academics.
            </div>
          </div>
        {/* <div class="ui divider"></div> */}
      </div>
      <div class="ui four column grid">
        <div class="row next" id="header">
          Meet the team
        </div>
        <div class="row" id="two">
          <div class="four wide column">
            <img src={bradley} id="person"/>
            <img src={rahul} id="person"/>
          </div>
          <div class="four wide column">
            <img src={emily} id="person"/>            
            <img src={alex} id="person"/> 
          </div>
          <div class="four wide column">
            <img id="person" src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image" />
            <img id="person" src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image" />
          </div>
          <div class="four wide column">
            <img id="person" src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image" />
            <img id="person" src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
