const log = require("../utils/logger");

module.exports = (err, req, res, next) => {
    log.error(`${err.message}: ${err.errorMessage}` || err);
    
    if(err.code < 100) err.code = 500;
    res.status(err.code || 500).json({
        success: false,
        code: err.code,
        message: err.message || err,
        reason: err.errorMessage || null
    });
}