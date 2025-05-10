// backend/server.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { authenticate, fetchDataByEmail } = require("./src/api");
const { separarBaterias } = require("./src/utils");

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rota principal: recebe um email e retorna baterias futuras e passadas
app.post("/baterias", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email é obrigatório." });
  }

  try {
    const token = await authenticate();
    const dados = await fetchDataByEmail(token, email);
    const { futuras, passadas } = separarBaterias(dados);

    res.json({ futuras, passadas });
  } catch (err) {
    console.error("Erro ao consultar baterias:", err.message);
    res.status(500).json({ error: "Erro ao buscar dados." });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
