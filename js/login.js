document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formLogin");
  const emailInput = document.getElementById("email");
  const emailMsg = document.getElementById("emailMsg");
  const senhaInput = document.getElementById("senha");

  function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  emailInput.addEventListener("input", () => {
    const email = emailInput.value.trim();

    if (!validarEmail(email)) {
      emailInput.classList.add("invalid");
      emailMsg.textContent = "Email inválido.";
    } else {
      emailInput.classList.remove("invalid");
      emailMsg.textContent = "";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (!validarEmail(email) || senha === "") {
      alert("Verifique os campos preenchidos.");
      return;
    }

    alert("Login realizado com sucesso!");
    window.location.href = "dashboard.html";
  });
});
