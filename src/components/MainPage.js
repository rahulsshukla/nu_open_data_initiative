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
      <h3> Search for a dataset: </h3>
      <Search
        className="search-bar"
        input={{ fluid: true }}
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
    </Container>
  );
};
export default MainPage;
