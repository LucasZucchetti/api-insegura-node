import sqlite3 from "sqlite3";
import { open } from "sqlite";

import { env } from "../config/env.js";

async function conectar() {

    return open({

        filename: env.DB_PATH,

        driver: sqlite3.Database

    });

}

export default conectar;