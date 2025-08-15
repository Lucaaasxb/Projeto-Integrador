
// Configurações globais podem ser adicionadas aqui
document.addEventListener("DOMContentLoaded", () => {
  // Mensagem de boas-vindas dinâmica
  const heroTitle = document.querySelector(".hero h1 span");
  if (heroTitle) {
    heroTitle.textContent = "CashFlow";
  }

  // Animação simples no botão principal
  const ctaBtn = document.querySelector(".cta");
  if (ctaBtn) {
    ctaBtn.addEventListener("mouseenter", () => {
      ctaBtn.style.transform = "scale(1.07)";
      ctaBtn.style.boxShadow = "0 4px 16px #2e7d32aa";
    });
    ctaBtn.addEventListener("mouseleave", () => {
      ctaBtn.style.transform = "scale(1)";
      ctaBtn.style.boxShadow = "none";
    });
  }

  console.log("CashFlow - Página inicial carregada com sucesso.");
});
