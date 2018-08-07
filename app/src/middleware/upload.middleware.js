const multer = require("multer");
const fileService = require("../services/file.service");

var upload = multer({ storage: fileService.storage });

module.exports = upload.any();