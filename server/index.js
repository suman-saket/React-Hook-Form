const express = require("express");
const path = require("path");
const app = express();
const userRouter = require("./routers/user");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

require("./database/db.js");
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.json());
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("<h2>This is from index.js file</h2>");
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
