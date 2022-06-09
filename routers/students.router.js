const express = require("express");
const bodyParser = require("body-parser");
const cors  = require("cors");

// get util function
const studentHandler = require("./students.utils");

// router instance (like app)
const studentsRouter = express.Router();

// middlewares assignment
studentsRouter.use(cors());
studentsRouter.use(bodyParser.json());

// endpoint
studentsRouter.get("/students", studentHandler);

module.exports = studentsRouter;