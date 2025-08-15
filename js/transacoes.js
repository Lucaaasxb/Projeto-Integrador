const btnNovaTransacao = document.getElementById("btnNovaTransacao");
const modal = document.getElementById("modalTransacao");
const tabela = document.getElementById("tabelaTransacoes").querySelector("tbody");

btnNovaTransacao.addEventListener("click", () => {
  modal.style.display = "flex";
});

function fecharModal() {
  modal.style.display = "none";
}

function salvarTransacao() {
  const descInput = document.getElementById("descricao");
  const valorInput = document.getElementById("valor");
  const tipoInput = document.getElementById("tipo");
  const desc = descInput.value.trim();
  const valor = parseFloat(valorInput.value);
  const tipo = tipoInput.value;

  // Validação detalhada
  if (!desc) {
    descInput.classList.add("invalid");
    descInput.focus();
    alert("Digite a descrição da transação.");
    return;
  } else {
    descInput.classList.remove("invalid");
  }
  if (isNaN(valor) || valor <= 0) {
    valorInput.classList.add("invalid");
    valorInput.focus();
    alert("Informe um valor válido.");
    return;
  } else {
    valorInput.classList.remove("invalid");
  }

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${new Date().toLocaleDateString()}</td>
    <td>${desc}</td>
    <td class="${tipo === 'Receita' ? 'entrada' : 'saida'}">${tipo}</td>
    <td class="${tipo === 'Receita' ? 'entrada' : 'saida'}">
      ${tipo === 'Receita' ? '+' : '-'} R$ ${valor.toFixed(2).replace('.', ',')}
    </td>
  `;
  tabela.appendChild(tr);
  tr.classList.add("destaque");
  setTimeout(() => tr.classList.remove("destaque"), 800);

  fecharModal();
  alert("Transação cadastrada com sucesso!");

  // Limpar campos
  descInput.value = '';
  valorInput.value = '';
  tipoInput.value = 'Receita';
}

function exportarExcel() {
  const wb = XLSX.utils.table_to_book(document.getElementById("tabelaTransacoes"), { sheet: "Transações" });
  XLSX.writeFile(wb, "transacoes.xlsx");
}
