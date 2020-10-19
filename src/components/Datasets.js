import React, { useContext, useState } from "react";
import {
  Grid,
  Header,
  Divider,
  Accordion,
  Form,
  Input,
  Menu,
  Label,
  Loader
} from "semantic-ui-react";
import nu from "../nu.jpg";
import "../styles/Datasets.css";
import Dataset from "./Dataset";
import { AppState } from "../data/context";

const Datasets = () => {
  const state = useContext(AppState);
  const { 
    categories, 
    dataTypes, 
    query, 
    setQuery, 
    datasets, 
    populateDatasets, 
    selectedCats, 
    selectedTypes, 
    toggleCategories, 
    toggleDataTypes 
  } = state;
  const [openTypePanel, setOpenTypePanel] = useState(false);
  const [loaderTimer, setTimer] = useState(true);

  const filterPanel = (filter, toggle) => (
    <Form>
      <Form.Group grouped>
        {filter.map((value) => (
          <Form.Checkbox
            key={value.name}
            checked={selectedCats.includes(value.name) || selectedTypes.includes(value.name)}
            onChange={() => toggle(value)}
            label={value.name} 
          />
        ))}
      </Form.Group>
    </Form>
  );

  const DatasetLoader = () => {
    setTimeout(() => setTimer(false), 6000);
    if (loaderTimer)  {
      return (
          <Loader active>
            Finding datasets...
          </Loader>          
      )
    }
    else return <Header textAlign="center" content="No datasets matched your search criteria." />
  }

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

  return (
    <Grid stackable style={{ marginBottom: "50px"}}>
      <Grid.Row>
        <Grid.Column>
          <Form onSubmit={() => { 
              const cat = selectedCats.length === 0 ? "" : JSON.stringify(selectedCats); 
              const dat = selectedTypes.length === 0 ? "" : JSON.stringify(selectedTypes); 
              populateDatasets(query, cat, dat);
              setTimer(true);
            }}
          >
            <Input value={query} onChange={e => setQuery(e.target.value)} fluid icon="search" />
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
        {datasets.length === 0 ? <DatasetLoader /> :
          <Menu vertical text fluid>
            {datasets.map((x, i) => (
              <Menu.Item key={i}>
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
          id="imageMain"
          height="400px"
          src={nu}
          alt="Northwestern"
          className="logo"
        />
        <h1 id="bottom" className="search-bar2">
          Search for Datasets
        </h1>
      </div>
      <Datasets />
    </React.Fragment>
  );
};

export default DatasetsPage;
