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

  return (
    <Grid stackable style={{ marginBottom: "50px" }}>
      <Grid.Row>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={12}>
          {loading === 0 ? (
            <Header
              textAlign="center"
              content="Loading"
            />
          ) : (
            <Grid.Column width={12}>
            {datasets.length === 0 ? (
              <Header
                textAlign="center"
                content="No datasets matched your search criteria."
              />
            ) : (
              <Menu vertical text fluid>
                {datasets.map((x) => (
                  <Menu.Item>
                    <Grid>
                      <Grid.Column width={15}>
                        <Grid.Row>
                          <Header>{x.name}</Header>
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
            )}
          </Grid.Column>
            
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};


export default DatasetsPage;
