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
import logo from "../NODI.png";
import ds from "../resume.pdf";

const cat_tag = [
  { key: "s", text: "Safety", value: "Sa" },
  { key: "c", text: "Campus", value: "Ca" },
  { key: "a", text: "Admission", value: "Ad" },
  { key: "f", text: "Finances", value: "f" },
  { key: "g", text: "Academic", value: "Ac" },
  { key: "l", text: "Student Life", value: "St" },
];

const data_type = [
  { text: "CSV", value: "csv" },
  { text: "Excel", value: "excel" },
  { text: "Graph", value: "graph" },
  { text: "PDF", value: "pdf" },
  { text: "API", value: "aws" },
  { text: "Database", value: "database" },
];

const handleDownload = () => {
  var ask = window.confirm(
    "Do you agree that this dataset will be used following the NODI data governance rules? "
  );
  if (ask) {
    window.open("ds");
  }
};
const Download = () => {
  return (
    <Modal
      size="mini"
      trigger={
        <Button
          style={{ backgroundColor: "green", color: "white" }}
          size="mini"
        >
          Download
        </Button>
      }
      closeIcon
    >
      <Modal.Content>
        <Checkbox
          label="I agree that this dataset will be used following the NODI data
            governance rules"
        />
      </Modal.Content>
      <Modal.Actions>
        <a
          href="https://www.adminplan.northwestern.edu/ir/data-book/v51/1.01-usnews-undergrad-rankings.pdf"
          download="pick me"
        >
          <Button>Yes, please let me Download</Button>
        </a>
      </Modal.Actions>
    </Modal>
  );
};

const Dataset = () => {
  const [Val, setVal] = useState(false);
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
            <Grid.Column width={7}>
              <Header>Dataset Name </Header>
              <Label.Group style={{ marginTop: "10px" }}>
                <Label
                  content="Safety"
                  style={{ backgroundColor: "#4e2a84", color: "white" }}
                />
                <Label content="CSV" />
              </Label.Group>
            </Grid.Column>
            <Grid.Column id="but-modal" width={9}></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header.Subheader>EMILY ENTER HERE PLEASE!!</Header.Subheader>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Modal.Actions id="jus-right">
          <div id="div-1">
            <Button
              size="mini"
              style={{ backgroundColor: "red", color: "white" }}
            >
              Email Owner
            </Button>
            <Button
              style={{ backgroundColor: "blue", color: "white" }}
              size="mini"
            >
              Link to Source
            </Button>
            <Download></Download>
          </div>
        </Modal.Actions>
      </Modal.Content>
    </Modal>
  );
};

export default Dataset;
