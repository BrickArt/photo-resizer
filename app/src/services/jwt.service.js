const JWT = require("jsonwebtoken");
const XOR = require("xor-crypt");

const CRYPT_CODE = "L}7uz~qyL=5j/{~w";
const CRYPT_KEY = 6;
const SAULT = "sBtCE<Z~DH=72jt^eKcs(nct8+V'Xr9eHLbH;gS'";

const JWT_EXPIRES_IN = "12h"


module.exports = {
    createJwtToken,
    parseJwtToken
};


function createJwtToken({ username, userId }) {
    const CODE = XOR(CRYPT_CODE, CRYPT_KEY);
    const JWT_OPTIONS = { username, userId, code: CODE };

    return JWT.sign(JWT_OPTIONS, SAULT, { expiresIn: JWT_EXPIRES_IN });
}

async function parseJwtToken(token) {
    return JWT.verify(token, SAULT, (err, decoded) => {
        if(err && !decoded) return null
        return decoded.userId;
    });
}