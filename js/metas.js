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
  const tituloInput = document.getElementById("metaTitulo");
  const alvoInput = document.getElementById("metaAlvo");
  const atualInput = document.getElementById("metaAtual");
  const titulo = tituloInput.value.trim();
  const alvo = parseFloat(alvoInput.value);
  const atual = parseFloat(atualInput.value);

  // Validação detalhada
  if (!titulo) {
    tituloInput.classList.add("invalid");
    tituloInput.focus();
    alert("Digite o título da meta.");
    return;
  } else {
    tituloInput.classList.remove("invalid");
  }
  if (isNaN(alvo) || alvo <= 0) {
    alvoInput.classList.add("invalid");
    alvoInput.focus();
    alert("Informe um valor total válido para a meta.");
    return;
  } else {
    alvoInput.classList.remove("invalid");
  }
  if (isNaN(atual) || atual < 0 || atual > alvo) {
    atualInput.classList.add("invalid");
    atualInput.focus();
    alert("Informe um valor atual válido (menor ou igual ao valor total).");
    return;
  } else {
    atualInput.classList.remove("invalid");
  }

  const progresso = Math.round((atual / alvo) * 100);

  const card = document.createElement("div");
  card.className = "meta-card";
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `Meta ${titulo}, progresso ${progresso}%`);
  card.innerHTML = `
    <h3>${titulo}</h3>
    <p>Progresso: R$ ${atual.toFixed(2)} / R$ ${alvo.toFixed(2)}</p>
    <div class="progress-bar" aria-label="Barra de progresso">
      <div class="progress-bar-inner" style="width: ${progresso}%;"></div>
    </div>
    <span style="color:${progresso>=100?'#2e7d32':'#888'}; font-weight:bold;">${progresso}%</span>
  `;

  metasContainer.appendChild(card);
  card.classList.add("destaque");
  setTimeout(() => card.classList.remove("destaque"), 800);

  fecharModal();
  alert("Meta cadastrada com sucesso!");

  tituloInput.value = '';
  alvoInput.value = '';
  atualInput.value = '';
}
