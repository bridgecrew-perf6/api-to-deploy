const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const studentsRouter = require("./routers/students.router")

const studentHandler = require("./routers/students.utils");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(studentsRouter);

// app.listen(5000);

module.exports = app;