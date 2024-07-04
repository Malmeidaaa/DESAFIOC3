let valorTotal = parseFloat(prompt("Digite o valor total:"));
let numParcelas = parseInt(prompt("Digite o número de parcelas:"));

// Validação das entradas (com loop)
while (isNaN(valorTotal) || isNaN(numParcelas) || numParcelas <= 0) {
  alert("Valores inválidos. Digite números válidos e um número de parcelas maior que zero.");
  valorTotal = parseFloat(prompt("Digite o valor total:"));
  numParcelas = parseInt(prompt("Digite o número de parcelas:"));
}

// Cálculo e exibição das parcelas
const valorParcela = valorTotal / numParcelas;

for (let i = 1; i <= numParcelas; i++) {
  console.log(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
}
