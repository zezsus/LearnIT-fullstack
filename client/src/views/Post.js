import React from "react";
import NavBarMenu from "../component/layout/NavBarMenu";
import Home from "../component/post/Home";
import About from "../component/post/About";

const Post = ({ postRouter }) => {
  let body = (
    <div>
      {postRouter === "home" && <Home />}
      {postRouter === "about" && <About />}
    </div>
  );
  return (
    <div>
      <div>
        <NavBarMenu />
      </div>
      <div className="mt-3">{body}</div>
    </div>
  );
};

export default Post;
