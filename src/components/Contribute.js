import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Search,
  Grid,
  Header,
  Segment,
  Row,
  Button,
  ButtonGroup,
} from "semantic-ui-react";
import "../styles/Contribute.css";
import Upload from "./Upload";

const Contribute = () => {
  return (
    <div>
      <div className="Fullsearch">
        <h2 id="image" className="logo">
          {" "}
          Contribute a dataset!
          <h5>
            Feel free to upload or request any Northwestern-related datasets.
            We will reach out to the relevant members in the Administration if the request is feasible.
            If you have any questions, email nuopendata@gmail.com
          </h5>
        </h2>
      </div>
      <Container id="purple">
        <h3>Upload or Request a Northwestern Dataset</h3>
        <ButtonGroup id="button-group">
          <Button id="request" className="formbut" href = "https://forms.gle/XCFkSw6KMTxfzeZRA">
            {" "}
            Request
          </Button>
          <Upload></Upload>
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default Contribute;
