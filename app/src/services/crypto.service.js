const crypto = require("crypto");

const ALGORITHM = 'sha1';
const NUMBER_SYSTEM = 'hex';

module.exports = {
    encrypt
};

function encrypt(str, salt) {
    return crypto.createHmac(ALGORITHM, salt)
        .update(str)
        .digest(NUMBER_SYSTEM);
}