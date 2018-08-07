const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const router = require("./router");
const errorHandler = require("./middleware/errorHandler.middleware");

const app = express();


app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/public", express.static(path.join(__dirname, "../public")));

app.use("/api/v1/", router);
app.use(errorHandler);

module.exports = app;