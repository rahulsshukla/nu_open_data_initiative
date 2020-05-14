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
    { name: "Health", icon: "heartbeat" },
    { name: "Weather", icon: "sun" },
    { name: "Tech", icon: "laptop" },
    { name: "Campus", icon: "graduation" },
    { name: "Transport", icon: "bus" },
    { name: "Money", icon: "dollar sign" },
    { name: "Science", icon: "dna" },
    { name: "Sports", icon: "futbol" },
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
        <h3 id="search-bar2"> Welcome to the Northwestern Open Data Portal!</h3>
        <Search
          input={{ fluid: true }}
          id="search-bar1"
          placeholder="Search for a dataset"
          /* loading={isLoading} onResultSelect={this.handleResultSelect} onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })} results={results} value={value} {...this.props} */
        />
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
          {categories.slice(0, 4).map((c) => (
            <Grid.Column width={3} textAlign="center">
              <Icon name={c.icon} size="huge" style={{ color: "#4e2a8f" }} />
              <Header content={c.name} style={{ color: "#4e2a8f" }} />
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row>
          {categories.slice(4, 8).map((c) => (
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
