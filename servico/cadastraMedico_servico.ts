import pool from "./conexao.js";

export async function cadastraMedico(
  nome: string,
  telefone: string,
  email: string,
  descricao: string,
) {
  const conexao = await pool.getConnection();

  const [resultado] = await conexao.query(
    "INSERT INTO medicos (nome, telefone, email, descricao) VALUES (?, ?, ?, ?)",
    [nome, telefone, email, descricao],
  );

  conexao.release();

  return resultado;
}
