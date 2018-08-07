const authController = require("../controllers/auth.controller");


module.exports = {
    authorization$,
    registration$
};

async function authorization$(req, res, next) {
    const { username, password } = req.body;
    const result = await authController.login$(username, password);

    res.status(200).json(result);
}

async function registration$(req, res, next) {
    const { username, password } = req.body;
    const result = await authController.signup$(username, password);

    res.status(200).json(result);
}