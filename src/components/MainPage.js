import React, {
  useContext
} from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Grid,
  Icon,
  Form,
  Input,
  Header,
} from "semantic-ui-react";
import "../styles/MainPage.css";
import { AppState } from "../data/context";
import nu from "../nu.jpg";
import { useHistory } from "react-router-dom";

const MainPage = () => {
  const state = useContext(AppState);
  const { categories, query, setQuery, populateDatasets, categoryLink } = state;
  const history = useHistory();

  const Search = () => {
    if (query) {
      history.push("datasets");
      populateDatasets(query, [], []);
    }
  };

  const selectCategory = (category) => {
    history.push("datasets");
    setQuery("");
    categoryLink(category);
  };

  return (
    <div>
      <div className="FullsearchMain">
        <img
          id="imageMain"
          src={nu}
          height="400px"
          alt="Northwestern"
          className="logo"
        />
        <h3 id="top" className="search-bar2">
          Welcome to
        </h3>
        <h1 id="bottom" className="search-bar2">
          The Northwestern Open Data Portal
        </h1>
        <div id="search-bar1" className="ui icon input">
          <Form onSubmit={Search}>
            <Input
              placeholder="Search here or check out the Datasets page if you want to explore..."
              fluid
              icon="search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </Form>
        </div>
      </div>
      <div>
        <div className="ui four column grid" id="oneMain">
          <div className="row next" id="pop-header">
            Dataset Categories
          </div>

          <div className="small-grid">
            {categories.slice(0, 6).map((c) => (
              <Grid.Column width={3} textAlign="center" key={c.name}>
                <div className="pop-cat">
                  <button onClick={() => selectCategory(c.name)} className="cat-but">
                    <Icon
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
        </div>
      </div>
    </div>
  );
};
export default MainPage;
