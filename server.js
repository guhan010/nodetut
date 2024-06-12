// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("hello world");
// });

// const port = 3000;

// server.listen(port);

const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/samsung.js");
// const bodyparser = require("body-parser");

const server = express();
server.use(express.json());
// server.get("/samsung", (req, res) => {
//   res.send("hello samsung");
// });
server.use("/samsung", router);
mongoose
  .connect(
    "mongodb+srv://mongotut:mongotut@cluster0.ooz7z3p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("db connected"));

const port = 3000;

server.listen(3000);
