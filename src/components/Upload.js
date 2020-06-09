import React, { useState, useContext, useEffect } from "react";
import { Button, Modal, Form, TextArea, Message } from "semantic-ui-react";
import "../styles/Upload.css";
import logo from "../NODI.png";
import { AppState } from "../data/context";

const handleCancel = () => {
  var ask = window.confirm("Are you sure you want to cancel?");
  if (ask) {
    window.location.href = "/";
  }
};

const dataset = {
  name: "",
  email: "",
  submitted_at: "",
  approved: false,
  bucket: "nodi-unapproved-datasets",
  key: "",
  approved_at: null,
  category_ids: "",
  datatype_id: "",
  metadata: {
    publish_date: "",
    department_ownership: "",
    raw_source_link: "",
    description: "",
  },
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
};

const handleEmpty = (value) => {
  if (value) {
    return false;
  } else {
    return true;
  }
};

const Upload = () => {
  const state = useContext(AppState);
  const { categories, dataTypes } = state;

  const [errors, setErrors] = useState(formErrors);
  const [request, setRequest] = useState(dataset);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    for (var key in errors) {
      if (errors[key]) {
        setErrorMessage(true);
        return;
      }
    }
    setErrorMessage(false);
    return;
  });

  const onClose = () => {
    setRequest(dataset);
    setErrors(formErrors);
    setErrorMessage(false);
  };

  const handleSubmit = () => {
    setErrors({
      name: handleEmpty(request.name),
      file: handleEmpty(request.key),
      email: handleEmpty(request.email),
      publishDate: handleEmpty(request.metadata.publish_date),
      ownership: handleEmpty(request.metadata.department_ownership),
      link: handleEmpty(request.metadata.raw_source_link),
      category: handleEmpty(request.category_ids),
      dataType: handleEmpty(request.datatype_id),
      description: handleEmpty(request.metadata.description),
    });
  };

  return (
    <Modal
      trigger={<Button className="form-but">Upload</Button>}
      closeIcon
      onClose={onClose}
    >
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
        <Form className="hi">
          <Form.Input
            label="Dataset Name"
            required
            error={errors.name}
            onChange={(e) => setRequest({ ...request, name: e.target.value })}
            placeholder="Dataset Name"
          />
          <Form.Field required error={errors.file}>
            <label>Dataset</label>
            <input
              id="fileSelect"
              type="file"
              onChange={() => {
                setRequest({
                  ...request,
                  key: document.getElementById("fileSelect").files.item(0).name,
                });
              }}
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />
          </Form.Field>
          <Form.Input
            error={errors.email}
            onChange={(e) => {
              setRequest({ ...request, email: e.target.value });
            }}
            label="Email of uploader"
            required
            placeholder="email@email.com"
          />
          <Form.Field required error={errors.publishDate}>
            <label>Publish Date</label>
            <input
              type="date"
              placeholder="mm-dd-yyyy"
              onChange={(e) =>
                setRequest({
                  ...request,
                  metadata: {
                    ...request.metadata,
                    publish_date: new Date(e.target.value),
                  },
                })
              }
            />
          </Form.Field>
          <Form.Input
            error={errors.ownership}
            required
            placeholder="Dept. of X"
            label="Department Ownership"
            required
            onChange={(e) =>
              setRequest({
                ...request,
                metadata: {
                  ...request.metadata,
                  department_ownership: e.target.value,
                },
              })
            }
          />
          <Form.Input
            error={errors.link}
            required
            label="Link to raw data source"
            placeholder="https://"
            accept="application/pdf"
            onChange={(e) =>
              setRequest({
                ...request,
                metadata: {
                  ...request.metadata,
                  raw_source_link: e.target.value,
                },
              })
            }
          />
          <Form.Select
            label="Category"
            options={categories.map((c) => {
              return { key: c.id, value: c.id, text: c.name };
            })}
            required
            error={errors.category}
            onChange={(e, { value }) =>
              setRequest({ ...request, category_ids: [value] })
            }
            placeholder="Category"
          />
          <Form.Select
            label="Data Type"
            options={dataTypes.map((d) => {
              return { key: d.id, value: d.id, text: d.name };
            })}
            required
            error={errors.dataType}
            onChange={(e, { value }) =>
              setRequest({ ...request, datatype_id: value })
            }
            placeholder="Data Type"
          />
          <Form.Input
            label="Dataset Description"
            control={TextArea}
            type="text"
            placeholder="Provide a 1-2 sentence high-level description of the dataset"
            required
            onChange={(e) =>
              setRequest({
                ...request,
                metadata: { ...request.metadata, description: e.target.value },
              })
            }
            error={errors.description}
          />
          <Form.Field
            label="Define any key terms in this dataset:"
            control={TextArea}
            //required
          />
          <Form.Field
            label="Who is the primary audience? "
            control={TextArea}
            //required
          />
          <Form.Field
            label="What is the purpose of this dataset and why does it exist?"
            control={TextArea}
            //required
          />
          <Form.Field
            label="What kind of decisions are being made with the dataset (currently and in the future)?"
            control={TextArea}
            //required
          />
          <Form.Input label="Who is the resident expert?" />
          <Form.Field
            label="Where does this dataset show up (i.e. in major reports)?"
            control={TextArea}
            //required
          />
        </Form>
        <Message negative hidden={!errorMessage}>
          <Message.Header content="Error in processing dataset form." />
          Please fill in the required fields.
        </Message>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Upload;