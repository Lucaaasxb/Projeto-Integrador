const falaMamae = document.getElementById("falaMamae");
const btnOuvir = document.getElementById("btnOuvir");

const conselhos = [
  "Você gastou muito com delivery esse mês. Que tal cozinhar amanhã? Assim economiza e ainda se diverte!",
  "Parabéns por economizar este mês! A mamãe está orgulhosa do seu esforço.",
  "Não se esqueça de pagar o cartão antes do vencimento para evitar juros.",
  "Use o que você tem antes de comprar algo novo. O consumo consciente faz bem ao bolso!",
  "Lembre-se do seu objetivo: guardar para a viagem dos sonhos!",
  "Evite compras por impulso. Respire fundo e pense duas vezes antes de clicar em 'comprar'.",
  "Que tal fazer um orçamento semanal? Assim você controla melhor seus gastos e evita surpresas.",
  "Separe uma parte do seu salário para emergências. Segurança financeira é essencial.",
  "Você está indo muito bem! Continue assim e logo alcançará suas metas.",
  "Reveja suas assinaturas. Muitas vezes pagamos por serviços que não usamos.",
  "Cozinhar em casa é mais econômico e saudável. Experimente novas receitas e convide amigos!",
  "Evite usar o cartão de crédito para pequenas compras. Prefira dinheiro ou débito.",
  "Cada centavo economizado é um passo a mais rumo à sua independência financeira.",
  "Reserve um tempo para relaxar. O equilíbrio é essencial para uma vida financeira saudável.",
  "Organize seus gastos por categorias. Isso facilita enxergar onde pode economizar.",
  "Acompanhe seu progresso. Pequenas conquistas merecem ser celebradas!",
  "Compartilhe suas metas com alguém de confiança. O apoio faz diferença.",
  "Planeje o mês com antecedência. Assim você evita imprevistos e mantém o controle.",
  "Lembre-se: disciplina hoje, liberdade amanhã!",
  "A mamãe Flow está sempre aqui para te ajudar. Conte comigo!"
];

function falarConselho(conselho) {
  // Pausa qualquer fala anterior
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }
  const mensagem = new SpeechSynthesisUtterance(conselho);
  mensagem.lang = "pt-BR";
  mensagem.rate = 1;
  window.speechSynthesis.speak(mensagem);
}

btnOuvir.addEventListener("click", () => {
  const conselho = conselhos[Math.floor(Math.random() * conselhos.length)];
  falaMamae.textContent = conselho;
  falaMamae.classList.add("destaque");
  setTimeout(() => falaMamae.classList.remove("destaque"), 600);
  falarConselho(conselho);
});
