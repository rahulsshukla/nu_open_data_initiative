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
  Button
} from "semantic-ui-react";

const Banner = () => {
  return (
    <Container className="banner">
      <img
        className="logo"
        src={logo}
        alt="Northwestern Open Data POrtal"
        height="300"
        width="300"
      />
      <div class="ui buttons" className="button-group">
        <button id="buttons" class="ui button">
          Datasets{" "}
        </button>

        <button id="buttons" class="ui button">
          Contribute a Dataset
        </button>
        <button id="buttons" class="ui button">
          About Us
        </button>
      </div>
    </Container>
  );
};

export default Banner;
