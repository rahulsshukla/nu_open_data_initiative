import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Search,
  Grid,
  Header,
  Segment,
  Row,
  Message,
  Button,
  ButtonGroup,
} from "semantic-ui-react";
import "../styles/Contribute.css";
import Upload from "./Upload";

const Contribute = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [uploadConfirmed, setUploadConfirmed] = useState(false);

  useEffect(() => {
    setTimeout(() => setUploadConfirmed(false), 5000)
  });

  const UploadConfirmedMessage = () => {
    return (
      <Message  hidden={!uploadConfirmed}>
        <Message.Header content="Upload Successful!" />
        <Message.Content>
          Your dataset will be added to the dataset upon review from our team.
        </Message.Content>
      </Message>
    );
  };

  return (
    <div>
      <div class="ui four column grid" id="won">
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
      <div>
      <UploadConfirmedMessage />
      </div>
      <Container id="purple">
        <h3 id="start">Upload or Request a Northwestern Dataset</h3>
        <ButtonGroup id="button-group">
          <Button id="request" className="formbut" href = "https://forms.gle/XCFkSw6KMTxfzeZRA">
            Request
          </Button>
          <Button className="form-but" onClick={() => setModalOpen(true)}>Upload</Button>
          <Upload 
            modalOpen={modalOpen} 
            setModalOpen={setModalOpen}
            setUploadConfirmed={setUploadConfirmed}
          />
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default Contribute;
