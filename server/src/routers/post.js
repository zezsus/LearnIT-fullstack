const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const verifyTooken = require("../middleware/auth");

//[POST] api/posts
//Create post
//Private
router.post("/", verifyTooken, async (req, res) => {
  const { title, description, url, status } = req.body;
  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Title is required",
    });
  } else {
    try {
      const newPost = new Post({
        title,
        description,
        url: url.startsWith("https://") ? url : `https://${url}`,
        status: status || "TO LEARN",
        user: req.userId,
      });

      await newPost.save();

      res.json({
        success: true,
        message: "Create successfully",
        post: newPost,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
});

//[GET] api/posts
//read post
//Private
router.get("/", verifyTooken, async (req, res) => {
  try {
    const posts = await Post.find({ user: req.userId }).populate("user", [
      "username",
    ]);
    res.json({ success: true, posts });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

//[PUT] api/posts
//Update post
//Private
router.put("/:id", verifyTooken, async (req, res) => {
  const { title, description, url, status } = req.body;
  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Title is required",
    });
  } else {
    try {
      let upadatedPost = {
        title,
        description: description || "",
        url: (url.startsWith("https://") ? url : `https://${url}`) || "",
        status: status || "TO LEARN",
      };

      const postUpdateCondition = { _id: req.params.id, user: req.userId };

      upadatedPost = await Post.findOneAndUpdate(
        postUpdateCondition,
        upadatedPost,
        { new: true }
      );

      //User not authorised to update post
      if (!upadatedPost) {
        return res.status(401).json({
          success: false,
          message: "Post not found or user not authorised",
        });
      } else {
        res.json({
          success: true,
          message: "Edit successfully",
          post: upadatedPost,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
});

//[DELETE] api/posts
//Update post
//Private
router.delete("/:id", verifyTooken, async (req, res) => {
  try {
    const postDeleteCondition = { _id: req.params.id, user: req.userId };
    const deletedPost = await Post.findOneAndDelete(postDeleteCondition);
    //User not authorised to update post
    if (!deletedPost) {
      return res.status(401).json({
        success: false,
        message: "Post not found or user not authorised",
      });
    } else {
      res.json({
        success: true,
        message: "Delete successfully",
        post: deletedPost,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

module.exports = router;
