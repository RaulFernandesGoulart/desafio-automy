// frontend/script.js

let bateriasPassadas = [];

async function buscarBaterias() {
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem");
  const futurasEl = document.getElementById("futuras");
  const passadasEl = document.getElementById("passadas");
  const resultado = document.getElementById("resultado");

  mensagem.textContent = "";
  futurasEl.innerHTML = "";
  passadasEl.innerHTML = "";
  resultado.style.display = "none";
  document.getElementById("passadasContainer").style.display = "none";
  document.getElementById("mostrarPassadas").style.display = "none";

  if (!email) {
    mensagem.textContent = "⚠️ Por favor, digite um e-mail.";
    return;
  }

  mensagem.textContent = "🔄 Buscando dados...";

  try {
    const resposta = await fetch("http://localhost:3001/baterias", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    if (!resposta.ok) {
      throw new Error("Erro ao buscar dados.");
    }

    const dados = await resposta.json();
    mensagem.textContent = "";
    resultado.style.display = "block";

    if (dados.futuras.length === 0) {
      futurasEl.innerHTML = "<li>Nenhuma bateria futura encontrada.</li>";
    } else {
      dados.futuras.forEach(b => {
        const li = document.createElement("li");
        li.textContent = `${b.data_agendamento} às ${b.horario_agendamento}h para ${b.qtde_pessoas} pessoas`;
        futurasEl.appendChild(li);
      });
    }

    bateriasPassadas = dados.passadas;
    if (bateriasPassadas.length > 0) {
      document.getElementById("mostrarPassadas").style.display = "block";
    }

  } catch (error) {
    mensagem.textContent = "❌ Erro ao buscar baterias. Verifique o backend.";
    console.error(error);
  }
}

function mostrarPassadas() {
  const passadasEl = document.getElementById("passadas");
  const container = document.getElementById("passadasContainer");

  passadasEl.innerHTML = "";

  bateriasPassadas.forEach(b => {
    const li = document.createElement("li");
    li.textContent = `${b.data_agendamento} às ${b.horario_agendamento}h para ${b.qtde_pessoas} pessoas`;
    passadasEl.appendChild(li);
  });

  container.style.display = "block";
}
