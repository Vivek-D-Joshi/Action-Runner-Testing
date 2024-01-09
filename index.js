const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: "./config.env" });

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}...`);
});

app.get("/", (req, res) => {
  res.status(200).json("Hello from server....");
});
