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
        <h3 id="search-bar2"> Welcome to the Northwestern Open Data Portal!</h3>
        <Search
          input={{ fluid: true }}
          id="search-bar1"
          placeholder="Search for a dataset"
          /* loading={isLoading} onResultSelect={this.handleResultSelect} onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })} results={results} value={value} {...this.props} */
        />
        <Grid centered id="cats" padded>
          <Grid.Row centered>
            {categories.slice(0, 3).map((c) => (
              <Grid.Column width={3} textAlign="center">
                <Icon name={c.icon} size="large" style={{ color: "#FFFFFF" }} />
                <Header
                  className="header"
                  content={c.name}
                  style={{ color: "#FFFFFF" }}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
          <Grid.Row centered>
            {categories.slice(3, 7).map((c) => (
              <Grid.Column width={3} textAlign="center">
                <Icon name={c.icon} size="large" style={{ color: "#FFFFFF" }} />
                <Header
                  className="header1"
                  content={c.name}
                  style={{ color: "#FFFFFF" }}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
          <Divider />
        </Grid>
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
    </div>
  );
};
export default MainPage;
