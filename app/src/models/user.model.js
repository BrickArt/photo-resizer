const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cryptoService = require("../services/crypto.service");

var schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

schema.methods.encryptPassword = function (password) {
    return cryptoService.encrypt(password, this.salt)
};

schema.virtual('password')
    .set(function (password) {
        this._plainPassword = password;
        this.salt = Math.random() + '';
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function () { return this._plainPassword; });


schema.methods.checkPassword = function (password) {
    return this.encryptPassword(password) === this.hashedPassword;
};

schema.methods.getPublicFields = function () {
    return {
        username: this.username,
        created: this.created,
        id: this.id
    };
};


module.exports = {
    User: mongoose.model('User', schema)
};
