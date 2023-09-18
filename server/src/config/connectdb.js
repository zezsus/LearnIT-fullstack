const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/learnit", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected!");
  } catch (error) {
    console.log("Connected Fail!");
  }
};

module.exports = { connectDB };
