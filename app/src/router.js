const router = require("express").Router();
// const auth = require("./middleware/auth.middleware");

// const authRoute = require("./routes/auth.route");

// router.get("/authorithation", authRoute.authorithation);

router.get("/", (req, res, next) => {
    res.status(200).json("Hello!")
})

module.exports = router;