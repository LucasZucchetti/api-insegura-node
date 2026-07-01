const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

async function conectar() {
    return open({
        filename: "./src/database/database.db",
        driver: sqlite3.Database
    });
}

module.exports = conectar;