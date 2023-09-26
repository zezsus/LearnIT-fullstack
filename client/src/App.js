import { Route, Routes } from "react-router-dom";
import "./assets/scss/App.scss";
import Landing from "./component/layout/Landing";
import Auth from "./views/Auth";
import AddForm from "./component/post/AddForm";
import EditForm from "./component/post/EditForm";
import Post from "./views/Post";
import React from "react";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Auth authRouter="login" />} />
        <Route path="/register" element={<Auth authRouter="register" />} />

        <Route path="/home" element={<Post postRouter="home" />} />
        <Route path="/about" element={<Post postRouter="about" />} />

        <Route path="/add" element={<AddForm />} />
        <Route path="/edit" element={<EditForm />} />
      </Routes>

      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
