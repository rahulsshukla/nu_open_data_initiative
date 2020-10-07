import React, {
  // useState,
  // useEffect,
  useContext
} from "react";
import "semantic-ui-css/semantic.min.css";
import {
  // Container,
  // Search,
  Grid,
  // Header,
  // Segment,
  Icon,
  // Divider,
  // Accordion,
  // List,
  Form,
  Input,
  // Menu,
  // Button,
} from "semantic-ui-react";
import "../styles/MainPage.css";
import { AppState } from "../data/context";
import nu from "../nu.jpg";
import { Link } from "react-router-dom";

// import Featured from "./Featured";

const MainPage = () => {
  const state = useContext(AppState);
  const { categories, query, setSearch } = state;

  const Search = () => {
    var h = query;
    window.location.href = "/datasets?search=" + h;
  };

  return (
    <div>
      <div className="FullsearchMain">
        <img
          id="imageMain"
          height="400px"
          src={nu}
          alt="Northwestern"
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
        <div id="search-bar1" className="ui icon input">
          <Form onSubmit={Search}>
            <Input
              placeholder="Search here or check out the Datasets page if you want to explore..."
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
        <div className="ui four column grid" id="oneMain">
          <div className="row next" id="pop-header">
            Popular Categories
          </div>
          <div className="small-grid">
            {categories.slice(0, 6).map((c) => (
              <Grid.Column width={3} textAlign="center" key={c.name}>
                <div className="pop-cat">
                  <button className="cat-but">
                    <Icon
                      as={Link}
                      to="/datasets"
                      name={c.icon_name}
                      size="huge"
                      style={{ color: "#4e2a8f" }}
                    />
                    <div className="pop-title">{c.name}</div>
                  </button>
                </div>
              </Grid.Column>
            ))}
          </div>
          {/* <div class="ui divider"></div> */}
        </div>
      </div>
    </div>
  );
};
export default MainPage;
