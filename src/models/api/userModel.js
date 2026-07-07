import conectar from "../../database/connection.js";

class UserModel {
  async listar() {
    const db = await conectar();

    return db.all("SELECT * FROM usuarios");
  }

  async buscar(id) {
    const db = await conectar();

    return db.get("SELECT * FROM usuarios WHERE id = ?", [id]);
  }

  async criar(usuario) {
    const db = await conectar();

    const resultado = await db.run(
      `
            INSERT INTO usuarios(nome,email,senha)
            VALUES(?,?,?)
            `,
      [usuario.nome, usuario.email, usuario.senha],
    );

    return {
      id: resultado.lastID,
      ...usuario,
    };
  }

  async atualizar(id, usuario) {
    const db = await conectar();

    await db.run(
      `
            UPDATE usuarios
            SET nome=?,
                email=?,
                senha=?
            WHERE id=?
            `,
      [usuario.nome, usuario.email, usuario.senha, id],
    );
  }

  async remover(id) {
    const db = await conectar();

    const resultado = await db.run("DELETE FROM usuarios WHERE id = ?", [id]);

    return resultado.changes;
  }
}

export default new UserModel();
