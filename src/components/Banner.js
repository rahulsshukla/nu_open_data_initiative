import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "../styles/Banner.css";
import logo from "../NODI.png";
import {
  Container,
  Search,
  Grid,
  Header,
  Segment,
  Row,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

const Banner = () => {
  function sayHello(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      // alert('Hello!');
      x.className += " responsive";
    } 
    else {
      x.className = "topnav";
    }
  }
  return (
   <div class="banner">
      <Link to={{ pathname: `/` }}>
        <img src={logo} alt="Northwestern Open Data Portal" width="180px" className="logonav"/>
      </Link>
      <a href="javascript:void(0);" class="ico" onClick={sayHello}>&#9776;</a>
      <div className="topnav" id="myTopnav"> 
        <Link to={{ pathname: `/datasets` }}>
          <button id="button" className="ui button">
            Datasets{" "}
          </button>
        </Link>
        <Link to={{ pathname: `/contribute` }}>
          <button id="button" className="ui button">
            Contribute a Dataset
          </button>
        </Link>
        <Link to={{ pathname: `/aboutus` }}>
          <button id="button" class="ui button">
            About Us
          </button>
        </Link>
      </div>
  </div>
  );
};
export default Banner;
