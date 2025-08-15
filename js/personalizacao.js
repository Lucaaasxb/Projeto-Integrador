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
 
 // Feedback visual
 document.body.classList.add("personalizacao-feedback");
 setTimeout(() => document.body.classList.remove("personalizacao-feedback"), 600);
 
 // Mensagem de acessibilidade
 const msg = document.getElementById("personalizacaoMsg");
 if (msg) {
   msg.textContent = `Tema: ${tema.charAt(0).toUpperCase()+tema.slice(1)}, Fonte: ${fonte}`;
   msg.style.color = "#2e7d32";
   setTimeout(() => { msg.textContent = ""; }, 2000);
 }
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
