const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const error = require("./utils/error")

const router = require("./router");
const errorHandler = require("./middleware/errorHandler.middleware");

const app = express();


app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/public", express.static(path.join(__dirname, "../public")));

app.use("/api/v1/", router);

router.use("/", (req, res, next) => {
    next(new error.NotFoundError("Route not found..."));
})

app.use(errorHandler);

module.exports = app;