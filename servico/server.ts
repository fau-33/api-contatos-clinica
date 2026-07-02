import express from "express";
import "dotenv/config"; // Essencial para ler o seu arquivo .env
import { cadastraMedico } from "./cadastraMedico_servico.js";
import { retornaMedicos } from "./retornMedicos_servico.js";

const app = express();
app.use(express.json()); // Para o Express entender JSON no body das requisições

app.post("/medicos", async (req, res) => {
  try {
    const { nome, telefone, email, descricao } = req.body;
    const novoMedico = await cadastraMedico(nome, telefone, email, descricao);
    res.status(201).json(novoMedico);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao cadastrar médico" });
  }
});

app.get("/medicos", async (req, res) => {
  try {
    const medicos = await retornaMedicos();
    res.status(200).json(medicos);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar médicos" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
