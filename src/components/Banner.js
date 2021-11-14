import React, { useContext } from "react";
import { Button, Dropdown } from "semantic-ui-react";
import "../styles/Banner.css";
import logo from "../NODI.png";
import { Link } from "react-router-dom";
import { AppState } from "../data/context";
import RelatedLinks from './RelatedLinks.js';
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */



const Banner = () => {
  const state = useContext(AppState);
  const { clearQueries } = state;

  function bannerButton(linkTo, buttonName) {
    return(
    <Link to={linkTo} onClick={() => clearQueries(false)}>
      <Button id="button">
        {buttonName}
      </Button>
    </Link>)
  }
  
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
      <Link to="/Home" onClick={() => clearQueries(false)}>
        <img src={logo} alt="Northwestern Open Data Portal" width="180px" className="logonav"/>
      </Link>
      <span className="ico" name="menu" onClick={mobileNav}>&#9776;</span>

      <div className="topnav" id="myTopnav"> 
        {bannerButton('/datasets', 'Datasets')}
        {bannerButton("/contribute", "Contribute A Dataset")}
        {bannerButton("/aboutus", "About Us")}
        <RelatedLinks/>
      </div>
  </div>
  );
};
export default Banner;
