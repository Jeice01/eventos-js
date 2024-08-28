# Carrinho de Compras - README

Este projeto consiste em um exemplo simples de um carrinho de compras desenvolvido em JavaScript. O objetivo é demonstrar o uso de eventos, funções, tipos de dados, manipulação de números e objetos em JavaScript.

## Funcionalidades e Conceitos

### 1. **Objeto em JavaScript**

O objeto `subtotalInfo` é utilizado para armazenar dados relacionados ao subtotal do carrinho. Ele contém duas propriedades:

```javascript
let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};
```

- **`quantidade`**: Armazena o número de itens no carrinho.
- **`valor`**: Armazena o valor total dos itens no carrinho.

### 2. **Funções**

As funções desempenham um papel essencial neste projeto. Abaixo estão as principais funções usadas:

#### `adicionarUm()`
Esta função é acionada ao clicar no botão de adicionar (`+`). Ela:
- Converte o valor atual do campo de quantidade para um número com `Number()`.
- Incrementa a quantidade e o valor do subtotal.
- Atualiza a exibição do subtotal na página.

```javascript
function adicionarUm(){
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;
  subtotalInfo.quantidade += 1;
  subtotalInfo.valor += valorProduto01;
  atualizarSubtotal();
}
```

#### `subtrairUm()`
Similar à função `adicionarUm`, mas para subtrair a quantidade e o valor ao clicar no botão de subtração (`-`). Ela também verifica se a quantidade é maior que zero para evitar números negativos.

```javascript
function subtrairUm(){
  if (quantidadeProduto01.value > 0) {
    quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
    subtotalInfo.quantidade -= 1;
    subtotalInfo.valor -= valorProduto01;
    atualizarSubtotal();
  }
}
```

#### `atualizarSubtotal()`
Atualiza a quantidade e o valor total na interface do usuário. Usa `toFixed(2)` para garantir que o valor seja exibido com duas casas decimais.

```javascript
function atualizarSubtotal(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}
```

### 3. **Eventos**

Os eventos são utilizados para detectar quando os botões de adicionar e subtrair são clicados:

- **`addEventListener('click', adicionarUm)`**: Adiciona 1 à quantidade de itens ao clicar no botão de adicionar.
- **`addEventListener('click', subtrairUm)`**: Subtrai 1 da quantidade de itens ao clicar no botão de subtração.

```javascript
btnAdicionarProduto01.addEventListener('click', adicionarUm);
btnSubtrairProduto01.addEventListener('click', subtrairUm);
```

### 4. **Tipo de Dado e Conversão**

- **`typeof`**: Usado para verificar o tipo do valor no campo de quantidade. Por padrão, os valores dos campos de entrada são tratados como strings, então é necessário convertê-los para números antes de realizar operações aritméticas.

```javascript
console.log(typeof quantidadeProduto01.value);
```

- **`Number()`**: Converte a string obtida do campo de entrada para um número, permitindo a manipulação matemática.

```javascript
quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;
```

- **`toFixed(2)`**: Formata o valor total para exibir sempre duas casas decimais, garantindo a consistência visual.

```javascript
valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
```

## Conclusão

Este exemplo de carrinho de compras é uma ótima maneira de entender conceitos básicos de JavaScript, como objetos, funções, eventos, e manipulação de dados. Com isso, é possível construir interações dinâmicas e responsivas em páginas web.


