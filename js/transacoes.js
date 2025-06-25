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
  const desc = document.getElementById("descricao").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const tipo = document.getElementById("tipo").value;

  if (!desc || isNaN(valor)) {
    alert("Preencha corretamente.");
    return;
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
  fecharModal();

  // Limpar campos
  document.getElementById("descricao").value = '';
  document.getElementById("valor").value = '';
  document.getElementById("tipo").value = 'Receita';
}

function exportarExcel() {
  const wb = XLSX.utils.table_to_book(document.getElementById("tabelaTransacoes"), { sheet: "Transações" });
  XLSX.writeFile(wb, "transacoes.xlsx");
}
