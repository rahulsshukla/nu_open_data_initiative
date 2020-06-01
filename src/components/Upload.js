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
} from "semantic-ui-react";
import "../styles/Upload.css";
import { Link } from "react-router-dom";
import logo from "../NODI.png";

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

const handleSubmit = (Val) => {
  if (Val) {
    var ask = window.confirm("Are you sure you want to submit?");
    if (ask) {
      window.alert("Dataset Submitted!");
      window.location.href = "/";
    }
  } else {
    window.alert("Please fill out all necessary information");
  }
};
const handleCancel = () => {
  var ask = window.confirm("Are you sure you want to cancel?");
  if (ask) {
    window.location.href = "/";
  }
};
const Upload = () => {
  const [Val, setVal] = useState(false);
  return (
    <Modal trigger={<Button className="form-but">Upload</Button>} closeIcon>
      <Modal.Content>
        <h2 id="con-hed" class="ui header">
          <img
            src={logo}
            alt="Northwestern Open Data Portal"
            width="180px"
            className="logo1"
            size="large"
          />
          <br></br>
          <div id="content" class="content">
            Data Upload Form
            <div class="sub header">Upload a Northwestern Public Data set</div>
          </div>
        </h2>
        <Form className="hi" success>
          <Grid>
            <Grid.Row>
              <label for="dname"> DataSet Name</label>
              <input
                id="dname"
                control={Input}
                required
                label="Dataset Name"
                placeholder="Dataset Name"
              />
            </Grid.Row>
            <Grid.Row>
              <label for="fileSelect"> DataSet</label>
              <input
                id="fileSelect"
                type="file"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              />
            </Grid.Row>
            <Grid.Row>
              <label for="email">Email of uploader</label>
              <input
                control={Input}
                type="email"
                id="emails"
                label="Email"
                required
                placeholder="email@email.com"
              ></input>
            </Grid.Row>
            <Grid.Row>
              <label for="pd">Publish Date</label>
              <input
                control={Input}
                type="date"
                id="pd"
                label="Dataset Publish Date"
                required
                placeholder="XX/XX/XXXX"
              ></input>
            </Grid.Row>
            <Grid.Row>
              <label for="email2">Department Ownership </label>
              <input
                control={Input}
                id="emails"
                placeholder="Dept. of X"
                label="Department Ownership"
                required
              ></input>
            </Grid.Row>
            <Grid.Row>
              <label for="link"> Link to raw data source</label>
              <input
                control={Input}
                id="link"
                name="upload"
                placeholder="https://"
                accept="application/pdf"
              />
            </Grid.Row>
            <Grid.Row>
              <label for="rel">Category Tag</label>
              <Form.Field
                className="help"
                control={Select}
                id="rel"
                options={cat_tag}
                required
                placeholder="Category Tag"
              />
            </Grid.Row>
            <Grid.Row>
              <label for="rel2">Data Type Tag</label>
              <Form.Field
                className="help"
                control={Select}
                id="rel2"
                options={data_type}
                required
                placeholder="Data Type Tag"
              />
            </Grid.Row>
            <Grid.Row>
              <label for="cont">Dataset Description</label>
              <input
                control={TextArea}
                type="text"
                id="cont"
                className="textarea"
                placeholder="Provide a 1-2 sentence high-level description of the dataset"
                required
              ></input>
            </Grid.Row>
            <Grid.Row>
              {" "}
              <label for="keyt">Define any key terms in this dataset:</label>
              <input
                control={TextArea}
                type="text"
                id="keyt"
                className="textarea"
                rows="2"
                required
              ></input>
            </Grid.Row>
            <Grid.Row>
              {" "}
              <label for="a">Who is the primary audience?</label>
              <input
                control={TextArea}
                type="text"
                id="a"
                className="textarea"
                rows="2"
                required
              ></input>
            </Grid.Row>
            <Grid.Row>
              {" "}
              <label for="p">
                What is the purpose of this dataset and why does it exist?{" "}
              </label>
              <input
                control={TextArea}
                type="text"
                id="p"
                className="textarea"
                rows="2"
                required
              ></input>
            </Grid.Row>
            <Grid.Row>
              {" "}
              <label for="d">
                What kind of decisions are being made with the dataset
                (currently and in the future)?
              </label>
              <input
                control={TextArea}
                type="text"
                id="d"
                className="textarea"
                rows="2"
              ></input>
            </Grid.Row>
            <Grid.Row>
              {" "}
              <label for="e">Who is the resident expert?</label>
              <input
                control={TextArea}
                type="text"
                id="e"
                className="textarea"
                rows="2"
              ></input>
            </Grid.Row>
            <Grid.Row>
              {" "}
              <label for="m">
                Where does this dataset show up (i.e. in major reports)?
              </label>
              <input
                control={TextArea}
                type="text"
                id="m"
                className="textarea"
                rows="2"
              ></input>
            </Grid.Row>

            <Grid.Row>
              <Form.Field
                id="form-button-control-public"
                control={Button}
                content="Submit"
                on
              />
            </Grid.Row>
          </Grid>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={handleCancel}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Upload;
