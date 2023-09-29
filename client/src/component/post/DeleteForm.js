import React, { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { PostContext } from "../../context/PostContext";
import { toast } from "react-toastify";

const DeleteForm = () => {
  const {
    postState: { post },
    showDeletePost,
    setShowDeletePost,
    deletePost,
  } = useContext(PostContext);

  const handleDelete = async () => {
    const { success, message } = await deletePost(post._id);
    if (success) {
      toast.success(message);
      setShowDeletePost(false);
    } else {
      toast.error(message);
    }
  };

  return (
    <div>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}>
        <Modal show={showDeletePost}>
          <Modal.Header>
            <Modal.Title>DELETE</Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <div className="form-floating mb-2">
                <span className="fs-4">Do you want delete item?</span>
              </div>
            </Modal.Body>
          </Form>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={setShowDeletePost.bind(this, false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default DeleteForm;
