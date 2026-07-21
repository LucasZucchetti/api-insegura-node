import conectar from "./connection.js";

import migration001 from "./migrations/001_create_users.js";
import migration002 from "./migrations/002_add_avatar_columns.js";
import migration003 from "./migrations/003_add_role_column.js";

const migrations = [migration001, migration002, migration003];

(async () => {
  const db = await conectar();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS migrations (
      id TEXT PRIMARY KEY,
      executed_at TEXT NOT NULL
    );
  `);

  const executed = await db.all("SELECT id FROM migrations");

  const executedIds = executed.map((m) => m.id);

  for (const migration of migrations) {
    if (executedIds.includes(migration.id)) {
      continue;
    }

    console.log(`Executando ${migration.id}`);

    await migration.up(db);

    await db.run(
      `
      INSERT INTO migrations(id, executed_at)
      VALUES (?, datetime('now'))
      `,
      [migration.id],
    );
  }

  console.log("Migrations concluídas.");
})();
