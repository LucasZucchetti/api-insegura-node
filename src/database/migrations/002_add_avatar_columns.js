export default {
  id: "002_add_avatar_columns",

  async up(db) {
    await db.exec(`
      ALTER TABLE usuarios
      ADD COLUMN avatar_url TEXT;
    `);

    await db.exec(`
      ALTER TABLE usuarios
      ADD COLUMN avatar_public_id TEXT;
    `);
  },
};
