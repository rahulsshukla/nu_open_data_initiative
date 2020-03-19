import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css"; import "../styles/Banner.css"; import logo from "../NODI.png";
import { Container, Search, Grid, Header, Segment, Row, Button } from "semantic-ui-react"; import { Link } from "react-router-dom";

const Banner = () => {
  return (
  <Container className="banner">
    <div class="ui-buttons" className="button-group">
      <Link to={{ pathname: `/` }}>
        <img src={logo} alt="Northwestern Open Data Portal" width="180px" className="logo"/>
      </Link>
      <button id="buttons" class="ui button">
        Datasets{" "}
      </button>
      <button id="buttons" class="ui button">
        Contribute a Dataset
      </button>
      <Link to={{ pathname: `/aboutus` }} >
        <button id="buttons" class="ui button">
          About Us
        </button>
      </Link>
    </div>
  </Container>
  );
};
export default Banner;
