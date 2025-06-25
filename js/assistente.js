const falaMamae = document.getElementById("falaMamae");
const btnOuvir = document.getElementById("btnOuvir");

const conselhos = [
  "Você gastou muito com delivery esse mês. Que tal cozinhar amanhã?",
  "Parabéns por economizar R$ 200 este mês. A mamãe tá orgulhosa!",
  "Não se esqueça de pagar o cartão antes do dia 10!",
  "Filho, não é hora de comprar mais roupas. Use o que você tem!",
  "Antes de gastar, lembre-se do seu objetivo: guardar para a viagem!"
];

btnOuvir.addEventListener("click", () => {
  const conselho = conselhos[Math.floor(Math.random() * conselhos.length)];
  falaMamae.textContent = conselho;

  const mensagem = new SpeechSynthesisUtterance(conselho);
  mensagem.lang = "pt-BR";
  mensagem.rate = 1;
  speechSynthesis.speak(mensagem);
});
