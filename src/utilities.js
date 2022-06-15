const {prodUrl, port} = require("./config");

const buildUrl = (endpoint) => {
    return process.env.NODE_ENV === "production" ? prodUrl + endpoint : `http://localhost:${port}${endpoint}`;
}

module.exports = {
    buildUrl,
}