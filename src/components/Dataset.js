import React, { useState } from "react";
import {
  Button,
  Header,
  Icon,
  Modal,
  Form,
  Select,
  Input,
  TextArea,
  Grid,
  GridRow,
  Container,
  Label,
  Checkbox,
} from "semantic-ui-react";
import "../styles/Dataset.css";
import { Link } from "react-router-dom";
import moment from "moment";

console.log(
  "MOMENT",
  moment("2020-05-31T23:06:39.727809Z").format("MM-DD-YYYY")
);

const Download = ({ ds }) => {
  function Open() {
    var win = window.open(ds.s3_url, "_blank");
    win.focus();
  }
  return (
    <Modal
      size="mini"
      trigger={
        <Button
          style={{
            fontSize: "10.5pt",
            backgroundColor: "green",
            color: "white",
          }}
          size="mini"
        >
          Download
        </Button>
      }
      closeIcon
    >
      <Modal.Content>
        <Form>
          <Checkbox
            required
            label="I agree that this dataset will be used following the NODI data
            governance rules"
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={Open}>Yes, please let me Download</Button>
      </Modal.Actions>
    </Modal>
  );
};

const Dataset = ({ dataset }) => {
  var email = "mailto:" + dataset.email;
  console.log(email);
  return (
    <Modal
      size="small"
      dimmer="blurring"
      trigger={
        <Button className="m-but" class="ui button">
          <i aria-hidden="true" class="plus icon"></i>
        </Button>
      }
      closeIcon
    >
      <Modal.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header>{dataset.name}</Header>
              <Label.Group style={{ marginTop: "10px" }}>
                <Label
                  content={dataset.categories[0].name}
                  style={{ backgroundColor: "#4e2a84", color: "white" }}
                />
                <Label content={dataset.datatype.name} />
              </Label.Group>
            </Grid.Column>
            <Grid.Column id="but-modal" width={9}></Grid.Column>
          </Grid.Row>
          <div class="information">
            <div class="row1 two">
              <p class="bolder">Publish Date: </p>
              <p class="blank">
                {moment(dataset.metadata.publish_date).format("MM-DD-YYYY")}
              </p>
              <p class="bolder">Owned By: </p>
              <p class="blank">{dataset.metadata.department_ownership}</p>
            </div>
            <div class="row1 two">
              <p class="bolder">Resident Expert: </p>
              <p class="blank">N/A</p>
              <p class="bolder">Refereneces: </p>
              <p class="blank">N/A</p>
            </div>
            <div class="row1 two">
              <p class="bolder">Past/Present Uses: </p>
              <p class="blank">N/A</p>
              <p class="bolder">Primary Audience: </p>
              <p class="blank">N/A</p>
            </div>
            <div class="row1">
              <p class="bolder">Description:</p>
            </div>
            <div class="row1">
              <p>{dataset.metadata.description}</p>
            </div>
            <div class="row1">
              <p class="bolder">Purpose:</p>
            </div>
            <div class="row1">
              <p>N/A</p>
            </div>
            <div class="row1">
              <p class="bolder">Key Terms: </p>
            </div>
            <div class="row1">
              <p>N/A</p>
            </div>
          </div>
        </Grid>
        <Modal.Actions id="jus-right">
          <div id="div-1">
            <a href={email}>
              <Button
                size="mini"
                style={{
                  fontSize: "10.5pt",
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                Email Owner
              </Button>
            </a>

            <Button
              style={{
                fontSize: "10.5pt",
                backgroundColor: "blue",
                color: "white",
              }}
              size="mini"
              onClick={() => window.open(dataset.metadata.raw_source_link)}
            >
              Link to Source
            </Button>
            <Download ds={dataset}></Download>
          </div>
        </Modal.Actions>
      </Modal.Content>
    </Modal>
  );
};

export default Dataset;
