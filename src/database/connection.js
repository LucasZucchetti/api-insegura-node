import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function conectar() {
    return open({
        filename: "./src/database/database.db",
        driver: sqlite3.Database
    });
}

export default conectar;