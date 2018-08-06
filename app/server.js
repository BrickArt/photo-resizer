const http = require("http");
const app = require("./src/app");
const log = require("./src/utils/logger");
const dbService = require("./src/services/db.service");

const PORT = global.process.env.PORT || 8000;
const server = http.createServer(app);

dbService.createConnection$()
    .then(async () => {
        await server.listen(PORT);
        log.info(`Server running on port: ${PORT}`);
    }).catch(e => log.error(e))
