document.getElementById("formCadastro").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  let valido = true;

  // Limpa os estilos anteriores
  [nome, email, senha].forEach(input => {
    input.parentElement.classList.remove("error", "success");
  });

  // Nome
  if (nome.value.trim() === "") {
    setErro(nome, "Nome é obrigatório");
    valido = false;
  } else {
    setSucesso(nome);
  }

  // E-mail
  if (!email.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    setErro(email, "E-mail inválido");
    valido = false;
  } else {
    setSucesso(email);
  }

  // Senha
  if (senha.value.length < 6) {
    setErro(senha, "A senha deve ter no mínimo 6 caracteres");
    valido = false;
  } else {
    setSucesso(senha);
  }

  if (valido) {
    alert("Cadastro realizado com sucesso!");
    // Simula redirecionamento para dashboard
    window.location.href = "dashboard.html";
  }
});

function setErro(input, msg) {
  const formGroup = input.parentElement;
  formGroup.classList.add("error");
  formGroup.querySelector(".erro-msg").textContent = msg;
}

function setSucesso(input) {
  input.parentElement.classList.add("success");
}
