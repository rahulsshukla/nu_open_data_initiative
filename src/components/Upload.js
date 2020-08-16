import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Modal,
  Form,
  TextArea,
  Message,
} from "semantic-ui-react";
import "../styles/Upload.css";
import logo from "../NODI.png";
import { AppState } from "../data/context";
import { uploadDataset } from "../data/client";

const dataset = {
  name: "",
  email: "",
  submitted_at: "",
  key: "",
  category_ids: "",
  datatype_id: "",
  metadata: {
    publish_date: "",
    department_ownership: "",
    raw_source_link: "",
    description: "",
    key_terms: "",
    primary_audience: "",
    purpose: "",
    decisions: "",
    resident_expert: "",
    appearances: ""
  }
};

const formErrors = {
  name: false, 
  file: false, 
  email: false,
  publishDate: false, 
  ownership: false, 
  link: false, 
  category: false, 
  dataType: false, 
  description: false,
  keyTerms: false,
  primaryAudience: false,
  purpose: false,
  decisions: false,
  residentExpert: false
};

const parseFileType = (string) => {
  switch(string) {
    case "text/csv":
      return "csv";
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return "xlsx";
    case "image/png":
      return "png";
    case "image/jpeg":
      return "jpeg"
    case "application/pdf":
      return "pdf"
    case "text/html":
      return "html"
  }
};

const handleEmpty = (value) => {
  if (value) {
    return false;
  } else { return true };
};

const SubmitMessage = ({ errorMessage }) => {
  if (errorMessage === true) {
    return (
      <Message negative>
        <Message.Header content="Error in processing dataset form." />
        Please fill in the required fields. 
      </Message>
    );
  } else if (errorMessage === false) {
    return (
      <Message positive>
        <Message.Header content="Looks all good!" />
        Proceed to submit.
      </Message>
    );
  } else return null;
};

const Upload = ({ modalOpen, setModalOpen, setUploadConfirmed }) => {
  const state = useContext(AppState);
  const { categories, dataTypes, setRefresh, refresh } = state;

  const [errors, setErrors] = useState(formErrors);
  const [request, setRequest] = useState(dataset);
  const [errorMessage, setErrorMessage] = useState("none");
  const [s3Params, setS3Params] = useState(false);
  const [file, setFile] = useState();

  const getFile = () => {
    var f = document.getElementById('fileSelect').files.item(0)
    setS3Params({
      fileName: f.name.substring(0, f.name.lastIndexOf('.')),
      fileType: parseFileType(f.type)
    });
    setFile(f);
  };

  const onClose = () => {
    setRequest(dataset);
    setErrors(formErrors);
    setErrorMessage("none");
    setS3Params(false);
    setModalOpen(false);
  };

  const handleCancel = () => {
    var ask = window.confirm("Are you sure you want to cancel?");
    if (ask) {
      onClose();
    }
  };

  const handleSubmit = () => {
    uploadDataset(s3Params, file, request, setUploadConfirmed);
    onClose();
  };

  const checkErrors = () => {
    const e = {
      name: handleEmpty(request.name), 
      file: handleEmpty(s3Params.fileName), 
      email: handleEmpty(request.email),
      publishDate: handleEmpty(request.metadata.publish_date), 
      ownership: handleEmpty(request.metadata.department_ownership), 
      link: handleEmpty(request.metadata.raw_source_link), 
      category: handleEmpty(request.category_ids), 
      dataType: handleEmpty(request.datatype_id),
      description: handleEmpty(request.metadata.description),
      keyTerms: handleEmpty(request.metadata.key_terms),
      primaryAudience: handleEmpty(request.metadata.primary_audience),
      purpose: handleEmpty(request.metadata.purpose),
      decisions: handleEmpty(request.metadata.decisions),
      residentExpert: handleEmpty(request.metadata.resident_expert)
    };
    
    const check = () => {
      for (var key in e) {
        if (e[key]) {
          setErrorMessage(true); 
          return 
        }
      };
      setErrorMessage(false);
    };
    check();
    setErrors(e);
  };

  return (
    <Modal size="small" open={modalOpen}>
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
        <Form size="small" className="hi">
            <Form.Input
              label="Dataset Name"
              required
              error={errors.name}
              onChange={(e) => setRequest({...request, name: e.target.value })}
              placeholder="Dataset Name"
            />
            <Form.Field 
              required 
              error={errors.file}
            >
              <label>Dataset</label>
              <input
                id="fileSelect"
                type="file"
                onChange={getFile}
              />
            </Form.Field>
            <Form.Input
              error={errors.email}
              onChange={(e) => { setRequest({ ...request, email: e.target.value })}}
              label="Email of uploader"
              required
              placeholder="email@email.com"
            />
            <Form.Field required error={errors.publishDate}>
              <label>Publish Date</label>
              <input
                type="date"
                placeholder="mm-dd-yyyy"
                onChange={(e) => setRequest({...request, metadata: {...request.metadata, publish_date: new Date(e.target.value)}})}
              />
            </Form.Field>
            <Form.Input
              error={errors.ownership}
              required
              placeholder="Dept. of X"
              label="Department Ownership"
              required
              onChange={(e) => setRequest({...request, metadata: {...request.metadata, department_ownership: e.target.value}})}
            />
            <Form.Input
              error={errors.link}
              required
              label="Link to raw data source"
              placeholder="https://"
              accept="application/pdf"
              onChange={(e) => setRequest({...request, metadata: {...request.metadata, raw_source_link: e.target.value}})}
            />
            <Form.Select
              label="Category"
              options={categories.map(c => { return { key: c.id, value: c.id, text: c.name }})}
              required
              error={errors.category}
              onChange={(e, {value}) => setRequest({...request, category_ids: value})}
              placeholder="Category"
            />
            <Form.Select
              label="Data Type"
              options={dataTypes.map(d => { return { key: d.id, value: d.id, text: d.name }})}
              required
              error={errors.dataType}
              onChange={(e, {value}) => setRequest({...request, datatype_id: value})}
              placeholder="Data Type"
            />
            <Form.Input
              label="Dataset Description"
              control={TextArea}
              type="text"
              placeholder="Provide a 1-2 sentence high-level description of the dataset"
              required
              onChange={(e) => setRequest({...request, metadata: {...request.metadata, description: e.target.value}})}
              error={errors.description}
            />
            <Form.Field
              label="Define any key terms in this dataset:"
              control={TextArea}
              required
              onChange={(e) => setRequest({...request, metadata: {...request.metadata, key_terms: e.target.value}})}
              error={errors.keyTerms}
            />
            <Form.Field
              label="Who is the primary audience? "
              control={TextArea}
              required
              onChange={(e) => setRequest({...request, metadata: {...request.metadata, primary_audience: e.target.value}})}
              error={errors.primaryAudience}
            />
            <Form.Field
              label="What is the purpose of this dataset and why does it exist?"
              control={TextArea}
              required
              onChange={(e) => setRequest({...request, metadata: {...request.metadata, purpose: e.target.value}})}
              error={errors.purpose}
            />
            <Form.Field
              label="What kind of decisions are being made with the dataset (currently and in the future)?"
              control={TextArea}
              required
              onChange={(e) => setRequest({...request, metadata: {...request.metadata, decisions: e.target.value}})}
              error={errors.decisions}
            />
            <Form.Input
              label="Who can provide context around the dataset and answer questions about it?"
              required
              onChange={(e) => setRequest({...request, metadata: {...request.metadata, resident_expert: e.target.value}})}
              error={errors.residentExpert}
            />
            <Form.Field
              label="Where does this dataset show up (i.e. in major reports)?"
              control={TextArea}
              //required
              onChange={(e) => setRequest({...request, metadata: {...request.metadata, appearances: e.target.value}})}
            />
        </Form>
        <SubmitMessage errorMessage={errorMessage} />
      </Modal.Content>
      <Modal.Actions>
        <Button 
          color={errorMessage === false ? "green" : "grey"}
          onClick={errorMessage === "none" || errorMessage === true ? checkErrors : handleSubmit}
        >
          {errorMessage === "none" ? "Check Form" : (errorMessage === true ? "Check Again" : "Submit Form" )}
        </Button>
        <Button color="red" onClick={handleCancel}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Upload;