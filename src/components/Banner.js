import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import "../styles/Banner.css";
import logo from "../NODI.png";
import { Link } from "react-router-dom";
import { AppState } from "../data/context";

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

const Banner = () => {
  const state = useContext(AppState);
  const { clearQueries } = state;

  function mobileNav(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } 
    else {
      x.className = "topnav";
    }
  }
  return (
   <div className="banner">
      <Link to="/" onClick={() => clearQueries(false)}>
        <img src={logo} alt="Northwestern Open Data Portal" width="180px" className="logonav"/>
      </Link>
      <span className="ico" name="menu" onClick={mobileNav}>&#9776;</span>
      <div className="topnav" id="myTopnav"> 
        {/* 
        <Link to="/datasets" onClick={() => clearQueries(true)}>
          <Button id="button">
            Datasets
          </Button>
        </Link>
        */}
        <Link to="/contribute" onClick={() => clearQueries(false)}>
          <Button id="button">
            Contribute a Dataset
          </Button>
        </Link>
        <Link to="/aboutus" onClick={() => clearQueries(false)}>
          <Button id="button">
            About Us
          </Button>
        </Link>
      </div>
  </div>
  );
};
export default Banner;
