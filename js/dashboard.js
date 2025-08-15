
// Mensagem de boas-vindas dinâmica
document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector(".main-content h2");
  if (titulo) {
    titulo.textContent = "Olá, seja bem-vindo ao seu Painel Financeiro!";
  }

  // Exemplo de resumo financeiro (pode ser integrado com backend futuramente)
  const cards = document.querySelectorAll(".card");
  if (cards.length) {
    cards[0].querySelector("p").textContent = "R$ 0,00"; // Saldo Atual
    cards[1].querySelector("p").textContent = "Defina e acompanhe suas metas financeiras.";
    cards[2].querySelector("p").textContent = "Receba dicas personalizadas para economizar e investir melhor.";
  }
});

// Futuras funcionalidades podem ser adicionadas aqui
