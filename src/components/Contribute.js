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
      <div id="won">
        <div class="row start" id="head">
          Contribute a dataset!
        </div>
        <div class="middle aligned row first">
          <div class="inf">
            The Northwestern Open Data Portal filters through all Datasets added
            through the NODI webpage. If any questions or concerns arise, please
            contact nodi@u.northwestern.edu
          </div>
        </div>
      </div>  
      <Container id="purple">
        <h3 id="start">Upload or Request a Northwestern Dataset</h3>
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
