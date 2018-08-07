var request = require('request');

module.exports = {
    get$
};


async function get$(url) {
    const result = await request.get(url);
    return result;
}