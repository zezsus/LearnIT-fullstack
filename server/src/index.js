const express = require("express");
const database = require("./config/connectdb");
const authRouter = require("./routers/auth");
const postRouter = require("./routers/post");
const cors = require("cors");

const app = express();

const port = 5000;

//connect db
database.connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
