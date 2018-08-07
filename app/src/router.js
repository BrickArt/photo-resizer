const router = require("express").Router();
const asyncWrap = require("./utils/async");

const uploadMiddleware = require("./middleware/upload.middleware");
// const auth = require("./middleware/auth.middleware");

const authRoute = require("./routes/auth.route");
const imageRoute = require("./routes/image.route");

// AUTH
router.post("/login", asyncWrap(authRoute.authorization$));
router.post("/signup", asyncWrap(authRoute.registration$));

// IMAGE
router.route("/image")
    .post(uploadMiddleware, imageRoute.uploadImage)
    .get()


router.get("/", (req, res, next) => {
    res.status(200).json("Hello!")
})

module.exports = router;