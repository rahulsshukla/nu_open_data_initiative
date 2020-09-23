import React, { useContext, useState, useEffect } from "react";
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
import { getDatasets } from "../data/client";
import { AppState } from "../data/context";

const filterPanel = (filter, toggle) => (
  <Form>
    <Form.Group grouped>
      {filter.map((value) => (
        <Form.Checkbox 
          onChange={() => toggle(value)}
          label={value.name} 
        />
      ))}
    </Form.Group>
  </Form>
);

const Datasets = () => {
  const state = useContext(AppState);
  const { categories, dataTypes, query, setSearch } = state;
  const [datasets, setDatasets] = useState([]);
  const [selectedCats, setSelectedCats] = useState("");
  const [selectedTypes, setSelectedTypes] = useState("");

  const [openTypePanel, setOpenTypePanel] = useState(false);

  const toggleCategories = value => {
    const cats = selectedCats.includes(value.name) ? selectedCats.filter(x => x !== value.name) : [...selectedCats, value.name];
    const catQuery = cats.length === 0 ? "" : JSON.stringify(cats);
    setSelectedCats(cats);
    getDatasets(setDatasets, query, catQuery, JSON.stringify(selectedTypes));
  };

  const toggleDataTypes = value => {
    const types = selectedTypes.includes(value.name) ? selectedTypes.filter(x => x !== value.name) : [...selectedTypes, value.name];
    const typeQuery = types.length === 0 ? "" : JSON.stringify(types);
    setSelectedTypes(types);
    getDatasets(setDatasets, query, JSON.stringify(selectedCats), typeQuery);
  };

  //console.log(selectedCats)

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var string = urlParams.get("search");
    string = string === null ? "" : string;
    setSearch(string);
    getDatasets(setDatasets, string, "");
  }, []);

  const filters = [
    {
      title: "Categories",
      content: { content: filterPanel(categories, toggleCategories) },
      key: 0,
    },
    {
      title: "File Types",
      content: { content: filterPanel(dataTypes, toggleDataTypes) },
      key: 1,
      active: openTypePanel,
      onTitleClick: (e, data) => setOpenTypePanel(!data.active)
    }
  ];
  /* finding search from prev page*/

  return (
    <Grid stackable style={{ marginBottom: "50px"}}>
      <Grid.Row>
        <Grid.Column>
          <Form onSubmit={() => { 
              const val = selectedCats.length === 0 ? "" : JSON.stringify(selectedCats); 
              getDatasets(setDatasets, query, val);
            }}
          >
            <Input value={query} onChange={e => setSearch(e.target.value)} fluid icon="search" />
          </Form>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <Grid.Row>
            <Accordion
              styled
              panels={filters}
              defaultActiveIndex={[0, 1]}
              exclusive={false}
            />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={12}>
        {datasets.length === 0 ? <Header textAlign="center" content="No datasets matched your search criteria." /> :
          <Menu vertical text fluid>
            {datasets.map((x) => (
              <Menu.Item>
                <Grid>
                  <Grid.Column width={15}>
                    <Grid.Row>
                      <Header>
                        {x.name}
                      </Header>
                      <Label.Group id="data-labels">
                        <Label
                          content={x.categories[0].name}
                          style={{
                            backgroundColor: "#4e2a84",
                            color: "white",
                          }}
                        />
                        <Label content={x.datatype.name} />
                      </Label.Group>
                    </Grid.Row>
                    <Grid.Row>
                      <Header.Subheader>
                        {x.metadata.description}
                      </Header.Subheader>
                    </Grid.Row>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Dataset dataset={x}></Dataset>
                  </Grid.Column>
                </Grid>
                <Divider />
              </Menu.Item>
            ))}
          </Menu>
        }
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const DatasetsPage = () => {
  return (
    <React.Fragment>
      <div className="FullsearchMain">
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
