import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "../styles/Banner.css";
import logo from "../NODI.png";
const Banner = () => {
  //states and such here
  return (
    <img
      src={logo}
      alt="Northwestern Open Data POrtal"
      height="200"
      width="200"
    />
  );
};

export default Banner;
