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
            The Northwestern Open Data Portal filters through all Datasets added
            through the NODI webpage. If any questions or concerns arise, please
            contact nodi@u.northwestern.edu
          </h5>
        </h2>
      </div>
      <Container id="purple">
        <h3>Upload or Request a Northwestern Dataset</h3>
        <ButtonGroup id="button-group">
          <Button id="request" className="formbut">
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
