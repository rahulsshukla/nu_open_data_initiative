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

import Featured from "./Featured";

const MainPage = () => {
  const categories = [
    { name: "Safety", icon: "heartbeat icon" },
    { name: "Campus", icon: "sun" },
    { name: "Admission", icon: "graduation cap icon" },
    { name: "Finances", icon: "dollar sign icon" },
    { name: "Academic", icon: "dna" },
    { name: "Student Life", icon: "futbol" },
  ];

  return (
    <div>
      <div className="Fullsearch">
        <img
          id="image"
          height="350px"
          width="100%"
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
          <Input fluid icon="search" />
        </div>
      </div>
      <div>
        <div class="ui four column grid">
          <div class="row next" id="header">
            Featured Datasets
          </div>{" "}
          <Featured></Featured>
        </div>
        <div class="ui four column grid" id="one">
          <div class="row next" id="header">
            Popular Categories
          </div>
          <div className="small-grid">
              {categories.slice(0,6).map(c => 
                <Grid.Column width={3} textAlign="center">
                   <div className="pop-cat">
                    <button className="cat-but">
                      <Icon name={c.icon} size="huge" style={{ color: "#4e2a8f"}}/>
                      <div className="pop-title">{c.name}</div>
                    </button>
                  </div>
                </Grid.Column>
              )}
          </div>
          {/* <div class="ui divider"></div> */}
        </div>
      </div>
    </div>
  );
};
export default MainPage;
