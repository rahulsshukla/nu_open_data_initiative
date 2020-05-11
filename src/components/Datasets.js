import React, { useState, useEffect } from "react";
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
} from "semantic-ui-react";
import "../styles/Contribute.css";

const categories = [
  {name: "Health", icon: "heartbeat"},
  {name: "Weather", icon: "sun"}, 
  {name: "Tech", icon: "laptop"},
  {name: "Campus", icon: "graduation"},
  {name: "Transport", icon: "bus"},
  {name: "Money", icon: "dollar sign"},
  {name: "Science", icon: "dna"},
  {name: "Sports", icon: "futbol"}
]

const fileTypes = [
  {name: "CSV", icon: "file outline"}, 
  {name: "Excel", icon: "file excel outline"},
  {name: "Graph", icon: "line graph"},
  {name: "PDF", icon: "file pdf outline"},
  {name: "API", icon: "aws"}, 
  {name: "Database", icon: "database"}
]

const filterPanel = (filter) => (
  <Form>
    <Form.Group grouped>
      {filter.map(value => <Form.Checkbox label={value.name} />)}
    </Form.Group>
  </Form>
);

const filters = [
  {title: "File Types", content: { content: filterPanel(fileTypes) }, key: 0},
  {title: "Categories", content: { content: filterPanel(categories) }, key: 1}
]

const Datasets = () => {
  return (
    <Grid centered>
      <Grid.Row>
        <Header size="large">
          Explore one of our popular categories!
        </Header>
      </Grid.Row>
      <Grid.Row>
        {categories.slice(0,4).map(c => 
          <Grid.Column width={3} textAlign="center">
              <Icon name={c.icon} size="huge" style={{ color: "#4e2a8f"}}/>
              <Header content={c.name} style={{ color: "#4e2a8f"}}/>
          </Grid.Column>
        )}
      </Grid.Row>
      <Grid.Row>
        {categories.slice(4,8).map(c => 
          <Grid.Column width={3} textAlign="center">
              <Icon name={c.icon} size="huge" style={{ color: "#4e2a8f"}}/>
              <Header content={c.name} style={{ color: "#4e2a8f"}}/>
          </Grid.Column>
        )}
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Grid.Column width={3}>
          <Accordion styled panels={filters} defaultActiveIndex={[0,1]} exclusive={false} />
        </Grid.Column>
        <Grid.Column width={12}>
            <Header content="...or check out all our datasets here." />
            <Input icon="search" fluid label="Datasets" />
          <Menu vertical text fluid>
            {[...Array(10)].map(x => 
              <Menu.Item>
                <Grid>
                  <Grid.Column width={13}>
                  <Header size="small">
                    This is is a Dataset
                    <Header.Subheader>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper sagittis sapien at posuere. Cras at nisi.
                    </Header.Subheader>
                  </Header>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Icon name="file excel" />
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Icon name="download" />
                  </Grid.Column>
                </Grid>
                <Divider />
              </Menu.Item>
            )}
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Datasets;
