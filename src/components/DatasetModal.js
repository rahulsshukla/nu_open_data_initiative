import React, { useState } from "react";
import { Modal, Button, Menu, Header, Label, Divider } from "semantic-ui-react";
import moment from "moment";

const DatasetModal = ({ dataset, key }) => {
  const email = "mailto:" + dataset.email;
  const [open, setOpen] = useState(false);
  const purple = "#4e2a84";
  const Download = () => {
    var win = window.open(`api/datasets/${dataset.id}/link`, "_blank");
    win.focus();
  }

  const DatasetDisplay = () => {
    return (
      <Menu.Item onClick={() => setOpen(true)} key={key}>
        <Header>
          {dataset.name}
          <Header.Subheader>
            {dataset.metadata.description}
          </Header.Subheader>
        </Header>
        <strong>
          {"Category: "}
          <Label
            size="tiny"
            content={dataset.categories[0].name}
            style={{
              backgroundColor: "#4e2a84",
              color: "white",
            }}
          />
          {" | File Type: "}
          <Label size="tiny" content={dataset.datatype.name} />
        </strong>
        <Divider />
      </Menu.Item>
    )
  };

  return (
    <Modal 
      trigger={<DatasetDisplay />} 
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    > 
      <Modal.Header content={dataset.name} />
      <Modal.Content>
        <p><strong style={{ color: purple}}>{"Category: "}</strong>{dataset.categories[0].name}</p>
        <p><strong style={{ color: purple}}>{"File Type: "}</strong>{dataset.datatype.name}</p>
        <p><strong style={{ color: purple}}>{"Publish Date: "}</strong>{moment(dataset.metadata.publish_date).format("MM-DD-YYYY")}</p>
        <p><strong style={{ color: purple}}>{"Owned By: "}</strong>{dataset.metadata.department_ownership}</p>
        <p><strong style={{ color: purple}}>{"Resident Expert: "}</strong>{dataset.metadata.resident_expert}</p>
        <p><strong style={{ color: purple}}>{"Primary Audience: "}</strong>{dataset.metadata.primary_audience}</p>
        <p><strong style={{ color: purple}}>{"Description: "}</strong>{dataset.metadata.description}</p>
        <p><strong style={{ color: purple}}>{"Purpose: "}</strong>{dataset.metadata.purpose}</p> 
        <p><strong style={{ color: purple}}>{"Key Terms: "}</strong>{dataset.metadata.key_terms}</p>
      </Modal.Content>
      <Modal.Actions>
        <a href={email}><Button>Email Owner</Button></a>
        <Button 
          style={{ backgroundColor: purple, color: "white" }} 
          onClick={() => window.open(dataset.metadata.raw_source_link)}>
            Link to Source
        </Button>
        <Button 
          style={{ backgroundColor: "#E6E6FA", color: purple, boxShadow: "2px" }} 
          onClick={Download}>
            Download
        </Button>
      </Modal.Actions>
    </Modal>
  );
};


export default DatasetModal;