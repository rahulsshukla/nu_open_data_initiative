import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "../styles/Footer.css";
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

const Footer = () => {
  return (
    <div class="footer">
      Northwestern Open Data Initiative Copyright 2020
    </div>
  );
};
export default Footer;
