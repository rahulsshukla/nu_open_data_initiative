import React, { useState, useEffect } from "react";
import {
  Container,
  Message,
  Button,
  ButtonGroup,
  Header
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
      <Container text fluid className="Container">
        <Header as="h2">Contribute a dataset!</Header>
        <p>
        Submit datasets that you have or request datasets that you may need. Before publishing any dataset, our team has a robust verification process to minimize the chance that sensitive information is revealed.
              If any questions or concerns arise, please contact nuopendata@gmail.com
        </p>
        <UploadConfirmedMessage />
      </Container>
      <Container className="Container">
        <ButtonGroup id="button-group">
          <Button
            id="request"
            className="request-button"
            href="https://forms.gle/XCFkSw6KMTxfzeZRA"
            target="_blank"
          >
            Request A Dataset
          </Button>
          <Button className="upload-button" onClick={() => setModalOpen(true)}>
            Upload A Dataset
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
