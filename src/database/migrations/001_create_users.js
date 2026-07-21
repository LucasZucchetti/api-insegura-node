export default {
  id: "001_create_users",

  async up(db) {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'user'
      );
    `);
  },
};
