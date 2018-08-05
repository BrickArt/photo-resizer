const mongoose = require("mongoose");

const log = require("../utils/logger");

const DB_CONFIG = {
    uri: global.process.env.DB_URI,
    options: {
        useNewUrlParser: true
    }
};

module.exports = {
    createConnection$
};



async function createConnection$() {
    return await initMongo();
}

async function initMongo() {
    await mongoose.connect(DB_CONFIG.uri, DB_CONFIG.options);
    log.debug("MongoDB is connected!")
}