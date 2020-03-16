import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Search,
  Grid,
  Header,
  Segment,
  Row
} from "semantic-ui-react";
import "../styles/MainPage.css";

const MainPage = () => {
  //states and such here
  return (
    <Container className="larger-container">
      <h3 id="search-bar"> Search for a dataset: </h3>
      <Search
        id="search-bar"
        input={{ fluid: true }}
        placeholder="Ex. 2019 Financial Report"
        /*
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, {
            leading: true
          })}
          results={results}
          value={value}
          {...this.props}
          */
      />
      <div class="ui buttons" className="featured-datasets">
        <h3> Featured datasets:</h3>
        <button id="dataset" class="ui button">
          2019 Financial Report
        </button>

        <button id="dataset" class="ui button">
          Admission Rates 2017
        </button>
        <button id="dataset" class="ui button">
          Library Inventory 2000-2010
        </button>
      </div>
    </Container>
  );
};
export default MainPage;
