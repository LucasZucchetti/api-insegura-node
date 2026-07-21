export default {
  id: "003_add_role_column",

  async up(db) {
    await db.exec(`
      ALTER TABLE usuarios
      ADD COLUMN role TEXT NOT NULL DEFAULT 'user';
    `);
  },
};
