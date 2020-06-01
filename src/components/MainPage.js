import React, { useState, useEffect, useContext } from "react";
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
import { AppState } from "../data/context";
import nu from "../nu.jpg";
import db from "../database.png";
import { Link } from "react-router-dom";

import Featured from "./Featured";

const MainPage = () => {
  const state = useContext(AppState);
  const { query, setQuery, setSearch } = state;
  console.log(query);

  const categories = [
    { name: "Safety", icon: "heartbeat icon" },
    { name: "Campus", icon: "sun" },
    { name: "Admission", icon: "graduation cap icon" },
    { name: "Finances", icon: "dollar sign icon" },
    { name: "Academic", icon: "dna" },
    { name: "Student Life", icon: "futbol" },
  ];

  const Search = (input) => {
    var h = query;
    window.location.href = "/datasets?search=" + h;
  };

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
          <Form onSubmit={Search}>
            <Input
              fluid
              icon="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Form>
        </div>
      </div>
      <div>
        <div class="ui four column grid">
          <div class="row next" id="header">
            Featured Datasets
          </div>
          <div class="featured">
            <Featured></Featured>
          </div>
        </div>
        <div class="ui four column grid" id="one">
          <div class="row start" id="header">
            Explore one of our popular categories:
          </div>
          <div id="grid-container">
            {categories.slice(0, 7).map((c) => (
              <div className="small-grid">
                <button className="cat-but">{c.name} </button>
              </div>
            ))}
          </div>
          {/* <div class="ui divider"></div> */}
        </div>
      </div>
    </div>
  );
};
export default MainPage;
