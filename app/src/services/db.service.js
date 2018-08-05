// const rethink = require("rethinkdb");

const log = require("../utils/logger");

const RETHINK_CONFIG = {
    host: global.process.env.DB_HOST,
    port: global.process.env.DB_PORT,
    db: global.process.env.DB_NAME
};

module.exports = {
    createConnection$
};



async function createConnection$() {
    return await initRethink();
}

async function initRethink() {
    await new Promise((r) => setTimeout(r, 300))
    // const connect = await rethink.connect(RETHINK_CONFIG)
    // log.info("RethinkDB is connected!")
    // return rethink._connection = connect;
}