import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Search,
  Grid,
  Header,
  Segment,
  Icon,
  Divider,
  Accordion,
  List,
  Form,
  Input,
  Menu,
  Button,
} from "semantic-ui-react";
import "../styles/MainPage.css";
import nu from "../nu.jpg";
import db from "../database.png";
const MainPage = () => {
  const categories = [
    { name: "Safety", icon: "heartbeat" },
    { name: "Campus", icon: "sun" },
    { name: "Admission", icon: "graduation" },
    { name: "Finances", icon: "dollar sign" },
    { name: "Academic", icon: "dna" },
    { name: "Student Life", icon: "futbol" },
  ];

  return (
    <div>
      <div className="Fullsearch">
        <img
          id="image"
          height="350px"
          src={nu}
          alt="Northwestern Image"
          className="logo"
        />
        <h3 id="top" className="search-bar2">
          {" "}
          Welcome to{" "}
        </h3>
        <h1 id="bottom" className="search-bar2">
          {" "}
          The Northwestern Open Data Portal
        </h1>
        <div id="search-bar1" class="ui icon input">
          <input type="text" placeholder="Search for a dataset.." />
          <i class="search icon"></i>
        </div>
      </div>

      <div class="ui buttons" className="featured-datasets">
        <img
          id="icon"
          height="350px"
          src={db}
          alt="Northwestern Image"
          className="logo"
        />

        <h3 id="data"> Featured datasets</h3>
        <div id="center">
          <Button className="help">2019 Financial Report</Button>
          <Button className="help">Admission Rates 2017</Button>
          <Button className="help">Library Volumes 2010-2020</Button>
        </div>
      </div>
      <Grid centered>
        <Grid.Row>
          <Header size="large">Explore one of our popular categories!</Header>
        </Grid.Row>
        <Grid.Row>
          {categories.slice(0, 3).map((c) => (
            <Grid.Column width={3} textAlign="center">
              <Icon name={c.icon} size="huge" style={{ color: "#4e2a8f" }} />
              <Header content={c.name} style={{ color: "#4e2a8f" }} />
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row>
          {categories.slice(3, 7).map((c) => (
            <Grid.Column width={3} textAlign="center">
              <Icon name={c.icon} size="huge" style={{ color: "#4e2a8f" }} />
              <Header content={c.name} style={{ color: "#4e2a8f" }} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default MainPage;
