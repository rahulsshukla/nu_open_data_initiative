import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  // Search,
  // Grid,
  // Header,
  // Segment,
  // Row,
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
    setTimeout(() => setUploadConfirmed(false), 5000);
  });

  const UploadConfirmedMessage = () => {
    return (
      <Message hidden={!uploadConfirmed}>
        <Message.Header content="Upload Successful!" />
        <Message.Content>
          Your dataset will be added to the dataset upon review from our team.
        </Message.Content>
      </Message>
    );
  };

  return (
    <div>
      <div class="ui four column grid" id="container">
        <div class="row start" id="header1">
          Contribute a dataset!
        </div>
        <div class="middle aligned row first">
          <div class="inf">
            Submit datasets that you have or request datasets that you may need. Before publishing any dataset, our team has a robust verification process to minimize the chance that sensitive information is revealed.
            If any questions or concerns arise, please contact nuopendata@gmail.com
          </div>
        </div>
      </div>
      <div>
        <UploadConfirmedMessage />
      </div>
      <Container id="form-container">
        <h3 id="start">Upload or Request a Northwestern Dataset</h3>
        <ButtonGroup id="button-group">
          <Button
            id="request"
            className="request-button"
            href="https://forms.gle/XCFkSw6KMTxfzeZRA"
            target="_blank"
          >
            Request
          </Button>
          <Button className="upload-button" onClick={() => setModalOpen(true)}>
            Upload
          </Button>
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
