const error = require("../utils/error");
const userModel = require("../models/user.model");
const jwtService = require("../services/jwt.service")

module.exports = {
    login$,
    signup$
};

async function login$(username, password) {
    const user = await userModel.User.findOne({ username });
    if(!user) throw new error.NotFoundError("This user not found!");
    
    console.log(user)
    const result = user.checkPassword(password);
    if(!result) throw new error.ForbiddenError("Password is not correct!");

    const token = jwtService.createJwtToken({ username, userId: user.id })
    
    return { username, token, userId: user.id }
}

async function signup$(username, password) {
    const user = new userModel.User({ username, password });
    await user.save();

    return user.getPublicFields();
}