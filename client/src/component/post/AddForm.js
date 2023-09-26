import React from "react";
import { Button, Modal } from "react-bootstrap";

const AddForm = () => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}>
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title>ADD</Modal.Title>
        </Modal.Header>

        <form>
          <Modal.Body>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
              />
              <label htmlFor="title">Title</label>
            </div>
            <div className="form-floating mb-2">
              <textarea
                className="form-control"
                placeholder="Description"
                id="floatingTextarea"></textarea>
              <label htmlFor="floatingTextarea">Description</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="url"
                placeholder="URL"
              />
              <label htmlFor="url">URL</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="status"
                placeholder="Status"
              />
              <label htmlFor="status">Status</label>
            </div>
          </Modal.Body>
        </form>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddForm;
