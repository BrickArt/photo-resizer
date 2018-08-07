const error = require("../utils/error");
const asyncWrap = require("../utils/async");
const jwtService = require("../services/jwt.service");

module.exports = asyncWrap( async (req, res, next) => {
    const token = req.get("Authorization")
    if (!token) next(new error.BadRequestError("Authorization in header are required..."));

    const userId = jwtService.parseJwtToken(token);
    if (!userId) next(new error.UnauthorizedError("Authorization token not valid..."));

    req._userId = userId;
    return next();
});