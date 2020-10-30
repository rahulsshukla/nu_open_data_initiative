import React, { useContext, useState } from "react";
import {
  Grid,
  Header,
  Accordion,
  Form,
  Input,
  Menu,
  Loader
} from "semantic-ui-react";
import nu from "../nu.jpg";
import "../styles/Datasets.css";
import { AppState } from "../data/context";
import DatasetModal from "./DatasetModal";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDataset, setSelectedDataset] = useState(datasets[0])

  const selectDataset = (data) => {
    setModalOpen(true);
    setSelectedDataset(data);
  };

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
    <React.Fragment>
      <Grid.Row>
        <Grid.Column>
          <Form onSubmit={() => { 
              const cat = selectedCats.length === 0 ? "" : JSON.stringify(selectedCats); 
              const dat = selectedTypes.length === 0 ? "" : JSON.stringify(selectedTypes); 
              populateDatasets(query, cat, dat);
              setTimer(true);
            }}
          >
            <Input 
              value={query} 
              onChange={e => setQuery(e.target.value)} 
              fluid 
              icon="search" 
              placeholder="Search by dataset name or category..."
            />
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
              <DatasetModal dataset={x} key={i} />
            ))}
          </Menu>
        }
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>
  );
};

const DatasetsPage = () => {
  return (
    <Grid stackable style={{ marginBottom: "50px"}}>
      <div className="FullsearchMain">
        <img
          height="400px"
          id="imageDatasets"
          src={nu}
          alt="Northwestern"
          className="logo"
        />
        <h1 id="bottom" className="search-bar2">
          Search for Datasets
        </h1>
      </div>
      <Datasets />
    </Grid>
  );
};

export default DatasetsPage;
