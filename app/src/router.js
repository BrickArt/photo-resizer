const router = require("express").Router();
const asyncWrap = require("./utils/async");

const uploadMiddleware = require("./middleware/upload.middleware");
const auth = require("./middleware/auth.middleware");

const authRoute = require("./routes/auth.route");
const imageRoute = require("./routes/image.route");

// AUTH
router.post("/login", asyncWrap(authRoute.authorization$));
router.post("/signup", asyncWrap(authRoute.registration$));

// IMAGE
router.route("/image")
    .post(uploadMiddleware, asyncWrap(imageRoute.uploadImage$))
    .get(auth, asyncWrap(imageRoute.getResized$))




module.exports = router;