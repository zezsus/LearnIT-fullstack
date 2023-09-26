import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { PostContext } from "../../context/PostContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddForm = () => {
  const { showAddPost, setShowAddPost, addPost } = useContext(PostContext);
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    url: "",
    status: "TO LEARN",
  });

  const { title, description, url } = newPost;

  //onchange
  const handleChangeNewPost = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  //add
  const handleAddPost = async () => {
    const { success, message } = await addPost(newPost);
    if (success) {
      const notify = () => toast.success(message);
      notify();
      handelCloseAdd();
    } else {
      const notify = () => toast.error(message);
      notify();
    }
  };

  //close
  const handelCloseAdd = () => {
    setNewPost({
      title: "",
      description: "",
      url: "",
      status: "TO LEARN",
    });
    setShowAddPost(false);
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}>
      <Modal show={showAddPost}>
        <Modal.Header>
          <Modal.Title>ADD</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                required
                value={title}
                onChange={handleChangeNewPost}
                name="title"
              />
              <label htmlFor="title">Title</label>
            </div>
            <div className="form-floating mb-2">
              <textarea
                className="form-control"
                placeholder="Description"
                id="floatingTextarea"
                value={description}
                onChange={handleChangeNewPost}
                name="description"></textarea>
              <label htmlFor="floatingTextarea">Description</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="url"
                placeholder="URL"
                value={url}
                onChange={handleChangeNewPost}
                name="url"
              />
              <label htmlFor="url">URL</label>
            </div>
          </Modal.Body>
        </Form>

        <Modal.Footer>
          <Button variant="secondary" onClick={handelCloseAdd}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddPost}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default AddForm;
