import express from "express";
import cors from "cors";

import { retornaMedicos } from "./servico/retornMedicos_servico.js";
import { cadastraMedico } from "./servico/cadastraMedico_servico.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 9000;

app.get("/medicos", async (req, res) => {
  const medicos = await retornaMedicos();
  res.json(medicos);
});

app.post("/medicos", async (req, res) => {
  const { nome, telefone, email, descricao } = req.body;
  const resultado = await cadastraMedico(nome, telefone, email, descricao);
  res.json(resultado);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
