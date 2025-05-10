// src/api.js
const axios = require("axios");

const LOGIN_URL = "https://appsaccess.automy.com.br/login";
const QUERY_URL = "https://appsaccess.automy.com.br/api/api/desafio/custom/do/query";

async function authenticate() {
  const credentials = {
    username: "fldoaogopdege",
    password: "ygalepsm"
  };

  try {
    const response = await axios.post(LOGIN_URL, credentials, {
      headers: { "Content-Type": "application/json" }
    });
    return response.data.token;
  } catch (error) {
    console.error("❌ Erro ao autenticar:", error.response?.data || error.message);
    throw error;
  }
}

async function fetchDataByEmail(token, email) {
  const query = `SELECT * FROM desafio.cadastro_baterias_desafio WHERE email = '${email}'`;

  try {
    const response = await axios.post(
      QUERY_URL,
      {
        query,
        db: "desafio"
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("❌ Erro ao buscar dados:", error.response?.data || error.message);
    throw error;
  }
}

module.exports = {
  authenticate,
  fetchDataByEmail
};
