let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};
  // Um objeto em JavaScript é uma estrutura que permite armazenar vários valores relacionados. Esses valores são armazenados em pares de chave-valor. No caso de subtotalInfo, as chaves são quantidade e valor, e os valores correspondentes são 1 e 11.66.

  // Esse objeto está guardando duas informações relacionadas: a quantidade de itens (1) e o valor total desses itens (11.66). É como se fosse uma mini planilha dentro do código, onde a chave quantidade guarda o número de itens e a chave valor guarda o preço total.

function atualizarSubtotal(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);

}
atualizarSubtotal();


// -----------------------------VARIÁVEIS /DADOS----------------------------- //
let btnAdicionarProduto01 = document.querySelector('#btn-adicionar-produto-01');
let quantidadeProduto01 = document.querySelector('#quantidade-produto-01');
let valorProduto01 = subtotalInfo.valor;


// -----------------------------FUNÇÕES----------------------------- //
function adicionarUm(){
  // manipular input (adicionar1)
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;
  // Manipular quantidde no subtotalInfo
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1;
  // Manipular valor no subtotalInfo
  subtotalInfo.valor = subtotalInfo.valor + valorProduto01;
  // atualizar o DOM
  atualizarSubtotal();
}
// Verificando o tipo de valor
console.log(typeof quantidadeProduto01.value);



// -----------------------------EVENTOS----------------------------- //
btnAdicionarProduto01.addEventListener('click', adicionarUm)

// atividades dos alunos(fazer diminuir)
let btnSubtrairProduto01 = document.querySelector('#btn-subtrair-produto-01');
function subtrairUm(){
  if (quantidadeProduto01.value > 0) {
    quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
    subtotalInfo.quantidade = subtotalInfo.quantidade - 1;
    subtotalInfo.valor = subtotalInfo.valor - valorProduto01;
    atualizarSubtotal();
  }
}
btnSubtrairProduto01.addEventListener('click', subtrairUm);

// Verificação: Antes de subtrair, a função verifica se o valor da quantidade atual é maior que 0. Isso evita que a quantidade vá para valores negativos.
// Atualização: Se a condição for verdadeira, a função subtrai 1 da quantidade e do subtotal, e depois chama a função atualizarSubtotal() para atualizar o valor e a quantidade exibidos na tela.