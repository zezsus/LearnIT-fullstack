import React, { useContext, useEffect } from "react";
import { PostContext } from "../../context/PostContext";
import AddForm from "../../component/post/AddForm";

import { IoMdAdd } from "react-icons/io";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";

import Spinner from "react-bootstrap/esm/Spinner";
import Card from "react-bootstrap/Card";
import { Button, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";
import DeleteForm from "./DeleteForm";

const Home = () => {
  const {
    postState: { posts, postsLoading },
    setShowAddPost,
    setShowEditPost,
    setShowDeletePost,
    getPosts,
    findPost,
  } = useContext(PostContext);

  let body;

  useEffect(() => {
    getPosts();
  }, []);

  const handleEditPost = (postId) => {
    findPost(postId);
    setShowEditPost(true);
  };

  const handleDelete = (postId) => {
    findPost(postId);
    setShowDeletePost(true);
  };

  if (postsLoading) {
    body = (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else {
    if (posts.length === 0) {
      body = (
        <Card className="text-center mx-5 my-5">
          <Card.Body>
            <Card.Title>Welcome to LearnIt</Card.Title>
            <Card.Text>
              Click the button below to track your first skill to learn
            </Card.Text>
            <Button variant="primary" onClick={setShowAddPost.bind(this, true)}>
              LearnIt!
            </Button>
          </Card.Body>
        </Card>
      );
    } else {
      body = (
        <div>
          <OverlayTrigger placement="right" overlay={<Tooltip>Add</Tooltip>}>
            <button
              type="button"
              className="btn btn-outline-primary rounded-circle p-2 "
              onClick={setShowAddPost.bind(this, true)}>
              <IoMdAdd size={25} />
            </button>
          </OverlayTrigger>{" "}
          <div className="d-flex flex-wrap justify-content-center">
            {posts.map((items) => (
              <Card
                className="m-3 border-2"
                border={
                  items.status === "LEARNED"
                    ? "success"
                    : items.status === "LEARNING"
                    ? "warning"
                    : "danger"
                }
                key={items._id}>
                <div className="m-2" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <div className="d-flex">
                      <Card.Title className="mb-4 text-body-secondary w-100">
                        {items.title}
                      </Card.Title>

                      <div className="mb-3 text-primary">
                        <OverlayTrigger
                          placement="left"
                          overlay={<Tooltip>{items.url}</Tooltip>}>
                          <Nav.Link
                            variant="light"
                            href={items.url}
                            target="_blank">
                            <AiOutlineLink size={25} />
                          </Nav.Link>
                        </OverlayTrigger>
                      </div>
                    </div>

                    <Card
                      className="mb-1 col-4 text-center text-white"
                      bg={
                        items.status === "LEARNED"
                          ? "success"
                          : items.status === "LEARNING"
                          ? "warning"
                          : "danger"
                      }>
                      {items.status}
                    </Card>
                    <div className="mb-3">{items.description}</div>

                    <div className="d-flex">
                      <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip>Edit</Tooltip>}>
                        <button
                          type="button"
                          className="btn btn-outline-warning d-flex align-items-center me-2"
                          onClick={handleEditPost.bind(this, items._id)}>
                          <BiEditAlt size={25} />
                        </button>
                      </OverlayTrigger>

                      <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip>Delete</Tooltip>}>
                        <button
                          type="button"
                          className="btn btn-outline-danger d-flex align-items-center ms-2"
                          onClick={() => handleDelete(items._id)}>
                          <MdDelete size={25} />
                        </button>
                      </OverlayTrigger>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      );
    }
  }

  return (
    <div className="m-3 ">
      <div>{body}</div>
      <AddForm />
      <EditForm />
      <DeleteForm />
    </div>
  );
};

export default Home;
