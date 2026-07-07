import conectar from "./connection.js";

(async () => {
  const db = await conectar();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL
    );
    `);

  console.log("Banco inicializado.");
})();
