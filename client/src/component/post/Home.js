import React, { useContext, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { PostContext } from "../../context/PostContext";
import Spinner from "react-bootstrap/esm/Spinner";
import Card from "react-bootstrap/Card";
import { Nav } from "react-bootstrap";

const Home = () => {
  const {
    postState: { posts, postsLoading },
    getPosts,
  } = useContext(PostContext);

  let body;

  useEffect(() => {
    getPosts();
  }, []);

  if (postsLoading) {
    body = (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else {
    if (posts.length === 0) {
      body = <p>KO cos phan tu nao</p>;
    } else {
      body = (
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
              <div className="m-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <Card.Title className="mb-4 text-body-secondary ">
                      {items.title}
                    </Card.Title>
                    <Nav.Link
                      className="mb-3 text-primary w-100 text-end"
                      variant="light"
                      href={items.url}
                      target="_blank">
                      <AiOutlineLink size={25} />
                    </Nav.Link>
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
                    <button
                      type="button"
                      className="btn btn-outline-warning d-flex align-items-center me-2">
                      <BiEditAlt size={20} className="me-1" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger d-flex align-items-center ms-2">
                      <MdDelete size={20} className="me-1" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      );
    }
  }

  return (
    <div className="m-3 ">
      {body}
      <button
        type="button"
        className="btn btn-primary d-flex align-items-center px-5">
        <IoMdAdd size={20} className="me-1" />
        Add
      </button>
    </div>
  );
};

export default Home;
