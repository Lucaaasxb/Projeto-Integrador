const temaSelect = document.getElementById("tema");
const fonteSelect = document.getElementById("fonte");

function aplicarPreferencias() {
  const tema = localStorage.getItem("tema") || "claro";
  const fonte = localStorage.getItem("fonte") || "Roboto";

  // Aplica tema
  document.body.classList.toggle("escuro", tema === "escuro");

  // Aplica fonte
  document.body.style.fontFamily = fonte;

  // Atualiza os selects
  temaSelect.value = tema;
  fonteSelect.value = fonte;
}

function salvarPreferencias() {
  const temaSelecionado = temaSelect.value;
  const fonteSelecionada = fonteSelect.value;

  localStorage.setItem("tema", temaSelecionado);
  localStorage.setItem("fonte", fonteSelecionada);

  aplicarPreferencias();
  alert("Preferências salvas com sucesso!");
}

aplicarPreferencias();
