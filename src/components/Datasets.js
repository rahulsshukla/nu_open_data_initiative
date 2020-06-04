import React, { useContext } from "react";
import {
  Grid,
  Header,
  Icon,
  Divider,
  Accordion,
  Form,
  Input,
  Menu,
  Label,
  Button,
  Container,
  Card,
} from "semantic-ui-react";
import nu from "../nu.jpg";
import "../styles/Datasets.css";
import Dataset from "./Dataset";

import { AppState } from "../data/context";

/*
const categories = [
  { name: "Safety", icon: "heartbeat" },
  { name: "Campus", icon: "sun" },
  { name: "Admission", icon: "graduation" },
  { name: "Finances", icon: "dollar sign" },
  { name: "Academic", icon: "dna" },
  { name: "Student Life", icon: "futbol" },
];

const dataTypes = [
  { name: "CSV", icon: "file outline" },
  { name: "Excel", icon: "file excel outline" },
  { name: "Graph", icon: "line graph" },
  { name: "PDF", icon: "file pdf outline" },
  { name: "API", icon: "aws" },
  { name: "Database", icon: "database" },
];
*/

const filterPanel = (filter) => (
  <Form>
    <Form.Group grouped>
      {filter.map((value) => (
        <Form.Checkbox label={value.name} />
      ))}
    </Form.Group>
  </Form>
);

const Datasets = () => {
  const state = useContext(AppState);
  const { categories, dataTypes, query, setQuery, setSearch } = state;

  const filters = [
    {
      title: "File Types",
      content: { content: filterPanel(dataTypes) },
      key: 0,
    },
    {
      title: "Categories",
      content: { content: filterPanel(categories) },
      key: 1,
    },
  ];
  /* finding search from prev page*/

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  setSearch(urlParams.get("search"));

  return (
    <Grid stackable divided>
      <Grid.Row>
        <Grid.Column>
          <Input value={query} fluid icon="search" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <Accordion
            styled
            panels={filters}
            defaultActiveIndex={[0, 1]}
            exclusive={false}
          />
        </Grid.Column>
        <Grid.Column width={12}>
          <Menu vertical text fluid>
            {[...Array(10)].map((x) => (
              <Menu.Item>
                <Grid>
                  <Grid.Column width={13}>
                    <Grid.Row>
                      <Header>Dataset Name </Header>
                      <Label.Group id="data-labels">
                        <Label
                          content="Safety"
                          style={{
                            backgroundColor: "#4e2a84",
                            color: "white",
                          }}
                        />
                        <Label content="CSV" />
                      </Label.Group>
                    </Grid.Row>
                    <Grid.Row>
                      <Header.Subheader>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi semper sagittis sapien at posuere. Cras at nisi.
                      </Header.Subheader>
                    </Grid.Row>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Dataset></Dataset>
                  </Grid.Column>
                </Grid>
                <Divider />
              </Menu.Item>
            ))}
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const DatasetsPage = () => {
  return (
    <React.Fragment>
      <div className="Fullsearch">
        <img
          id="image"
          height="350px"
          src={nu}
          alt="Northwestern Image"
          className="logo"
        />
        <h1 id="bottom" className="search-bar2">
          {" "}
          Search for Datasets
        </h1>
      </div>
      <Datasets />
    </React.Fragment>
  );
};

export default DatasetsPage;
