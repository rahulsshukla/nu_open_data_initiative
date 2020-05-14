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

const Banner = () => {
  return (
    <div className="banner">
      <Link to={{ pathname: `/` }}>
        <img
          src={logo}
          alt="Northwestern Open Data Portal"
          width="180px"
          className="logonav"
        />
      </Link>
      <div className="button-group ui-buttons">
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
