const modal = document.getElementById("modalMeta");
const btnNovaMeta = document.getElementById("btnNovaMeta");
const metasContainer = document.getElementById("metasContainer");

btnNovaMeta.addEventListener("click", () => {
  modal.style.display = "flex";
});

function fecharModal() {
  modal.style.display = "none";
}

function salvarMeta() {
  const titulo = document.getElementById("metaTitulo").value;
  const alvo = parseFloat(document.getElementById("metaAlvo").value);
  const atual = parseFloat(document.getElementById("metaAtual").value);

  if (!titulo || isNaN(alvo) || isNaN(atual) || atual > alvo) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const progresso = Math.round((atual / alvo) * 100);

  const card = document.createElement("div");
  card.className = "meta-card";
  card.innerHTML = `
    <h3>${titulo}</h3>
    <p>Progresso: R$ ${atual.toFixed(2)} / R$ ${alvo.toFixed(2)}</p>
    <div class="progress-bar">
      <div class="progress-bar-inner" style="width: ${progresso}%;"></div>
    </div>
  `;

  metasContainer.appendChild(card);
  fecharModal();

  document.getElementById("metaTitulo").value = '';
  document.getElementById("metaAlvo").value = '';
  document.getElementById("metaAtual").value = '';
}
