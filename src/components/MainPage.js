import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Search,
  Grid,
  Header,
  Segment,
  Row,
  Button,
} from "semantic-ui-react";
import "../styles/MainPage.css";
import nu from "../nu.jpg";
import db from "../database.png";
const MainPage = () => {
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
    </div>
  );
};
export default MainPage;
