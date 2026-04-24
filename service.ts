import express from "express";
import cors from "cors";

import { retornaMedicos } from "./servico/retornMedicos_servico.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 9000;

app.get("/medicos", async (req, res) => {
  const medicos = await retornaMedicos();
  res.json(medicos);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
