import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { PostContext } from "../../context/PostContext";
import { toast } from "react-toastify";

const EditForm = () => {
  const {
    postState: { post },
    showEditPost,
    setShowEditPost,
    editPost,
  } = useContext(PostContext);

  const [updatedPost, setUpdatedPosts] = useState(post);
  const { title, description, url, status } = updatedPost;

  useEffect(() => setUpdatedPosts(post), [post]);

  //onChange
  const handleChangeEdit = (e) => {
    setUpdatedPosts({ ...updatedPost, [e.target.name]: e.target.value });
  };

  //Save
  const handleSavePost = async () => {
    const { success, message } = await editPost(updatedPost);
    if (success) {
      toast.success(message);
      setShowEditPost(false);
    } else {
      toast.error(message);
    }
  };

  //Close
  const handleCloseEdit = () => {
    setShowEditPost(false);
    setUpdatedPosts(post);
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}>
      <Modal show={showEditPost}>
        <Modal.Header>
          <Modal.Title>EDIT</Modal.Title>
        </Modal.Header>

        <form>
          <Modal.Body>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                value={title}
                name="title"
                onChange={handleChangeEdit}
              />
              <label htmlFor="title">Title</label>
            </div>

            <div className="form-floating mb-2">
              <textarea
                className="form-control"
                placeholder="Description"
                id="floatingTextarea"
                value={description}
                name="description"
                onChange={handleChangeEdit}></textarea>
              <label htmlFor="floatingTextarea">Description</label>
            </div>

            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="url"
                placeholder="URL"
                value={url}
                name="url"
                onChange={handleChangeEdit}
              />
              <label htmlFor="url">URL</label>
            </div>

            <div className="form-floating mb-2">
              <select
                className="form-select"
                id="status"
                name="status"
                defaultValue={status}
                onChange={handleChangeEdit}>
                <option value="TO LEARN">TO LEARN</option>
                <option value="LEARNING">LEARNING</option>
                <option value="LEARNED">LEARNED</option>
              </select>
              <label htmlFor="status">Status</label>
            </div>
          </Modal.Body>
        </form>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSavePost}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditForm;
