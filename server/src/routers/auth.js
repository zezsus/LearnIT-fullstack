const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

//[POST] api/auth/register
//Register user
//public
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  //Check for existing user
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Missing username and/or password",
    });
  } else {
    try {
      //check for existing user
      const user = await User.findOne({ username });
      if (user) {
        return res.status(400).json({
          success: false,
          message: "Username already taken",
        });
      } else {
        const newUser = new User({ username, password });
        await newUser.save();

        //return token
        const accessToken = jwt.sign({ userId: newUser._id }, "sangak1st");

        res.json({
          success: true,
          message: "Resgister successfully",
          accessToken,
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

//[POST] api/auth/login
//Login user
//public
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  //Check for existing user
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Missing username and/or password",
    });
  } else {
    try {
      const user = await User.findOne({ username });
      //check username
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Incorrect username or password",
        });
      }
      //username found
      else {
        //check password
        const pass = await User.findOne({ password });
        if (!pass) {
          return res.status(400).json({
            success: false,
            message: "Incorrect username or password",
          });
        }
        //All good
        else {
          const accessToken = jwt.sign({ userId: user._id }, "sangak1st");

          res.json({
            success: true,
            message: "Login successfully",
            accessToken,
          });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Imternal server error",
      });
    }
  }
});

module.exports = router;
