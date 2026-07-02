import pool from "./conexao.js";

export async function retornaMedicos() {
  const res = await pool.query(
    "SELECT id, nome, telefone, email, descricao FROM medicos",
  );
  return res.rows;
}
