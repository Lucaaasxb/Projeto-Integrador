document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
  
    if (!email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }
  
    // Simula login fictício
    alert("Login realizado com sucesso!");
    window.location.href = "dashboard.html";
  });
  