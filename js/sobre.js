
// Mensagem de boas-vindas dinâmica
document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector(".intro h1");
  if (titulo) {
    titulo.textContent = "Quem Somos - CashFlow";
  }

  // Animação nos cards da equipe ao passar o mouse
  const cards = document.querySelectorAll(".card-equipe");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 4px 16px #2e7d32aa";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "none";
    });
  });

  console.log("CashFlow - página Quem Somos carregada.");
});
