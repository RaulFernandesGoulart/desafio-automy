// src/utils.js
const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

// data_agendamento vem no formato "DD/MM/YYYY"
function separarBaterias(baterias) {
  const hoje = dayjs(); // data atual
  const futuras = [];
  const passadas = [];

  baterias.forEach(bateria => {
    const data = dayjs(bateria.data_agendamento, "DD/MM/YYYY");

    if (data.isBefore(hoje, "day")) {
      passadas.push(bateria);
    } else {
      futuras.push(bateria);
    }
  });

  return { futuras, passadas };
}

function gerarMensagem(bateriasFuturas, bateriasPassadas) {
  let mensagem = "";

  if (bateriasFuturas.length > 0) {
    mensagem += "📅 *Próximas baterias agendadas:*\n";
    bateriasFuturas.forEach(b => {
      mensagem += `- ${b.data_agendamento} às ${b.horario_agendamento}h para ${b.qtde_pessoas} pessoas\n`;
    });
  } else {
    mensagem += "❌ Nenhuma bateria futura agendada.\n";
  }

  mensagem += "\n👉 Deseja visualizar as baterias passadas?\n";

  return mensagem;
}

module.exports = {
  separarBaterias,
  gerarMensagem
};
