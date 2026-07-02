import pool from "./conexao.js";

export async function cadastraMedico(
  nome: string,
  telefone: string,
  email: string,
  descricao: string,
) {
  const res = await pool.query(
    "INSERT INTO medicos (nome, telefone, email, descricao) VALUES ($1, $2, $3, $4) RETURNING *",
    [nome, telefone, email, descricao],
  );

  return res.rows[0];
}
