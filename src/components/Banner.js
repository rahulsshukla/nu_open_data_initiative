import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../styles/Banner.css";
import logo from "../NODI.png";
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
   <div className="banner">
      <Link to={{ pathname: `/` }}>
        <img src={logo} alt="Northwestern Open Data Portal" width="180px" className="logonav"/>
      </Link>
      <a href="javascript:void(0);" className="ico" onClick={sayHello}>&#9776;</a>
      <div className="topnav" id="myTopnav"> 
        <button id="button" onClick={() => window.location.href = "/datasets"} className="ui button">
          Datasets
        </button>
        <Link to={{ pathname: `/contribute` }}>
          <button id="button" className="ui button">
            Contribute a Dataset
          </button>
        </Link>
        <Link to={{ pathname: `/aboutus` }}>
          <button id="button" className="ui button">
            About Us
          </button>
        </Link>
      </div>
  </div>
  );
};
export default Banner;
