function retornaValorInput(idHTML) {
  let inputHTML = document.getElementById(idHTML).value;
  return inputHTML;
}

function limparValorInput(idHTML, texto) {
  let inputHTML = (document.getElementById(idHTML).value = texto);
}

function exibirResultado(idHTML, texto) {
  let tagHTML = document.getElementById(idHTML);
  tagHTML.textContent = texto;
}

function limparLabel(tag) {
  let labelHTML = document.querySelector(tag);
  labelHTML.textContent = "";
}

function alterarStatusBotao(id) {
  let buttonHTML = document.getElementById(id);

  if (buttonHTML.classList.contains("botao-desativado")) {
    buttonHTML.classList.remove("botao-desativado");
    buttonHTML.classList.add("botao-ativo");
  } else {
    buttonHTML.classList.remove("botao-ativo");
    buttonHTML.classList.add("botao-desativado");
  }
}

function gerarNumeroAleatorio(min, max, quantidade) {
  let listaNumerosAleatorio = [];

  while (listaNumerosAleatorio.length != quantidade) {
    let numeroAleatorio = Math.floor(Math.random() * max + 1);

    if (
      numeroAleatorio >= min &&
      !listaNumerosAleatorio.includes(numeroAleatorio)
    ) {
      listaNumerosAleatorio.push(numeroAleatorio);
    }
  }

  return listaNumerosAleatorio;
}

function sortear() {
  let quantidade = retornaValorInput("quantidade");
  let valorMinimo = retornaValorInput("minimo");
  let valorMaximo = retornaValorInput("maximo");

  if (valorMaximo - valorMinimo < quantidade) {
    alert(
      `Não é possivel gerar a quantidade de números sorteados!\nO intervalo de ${valorMinimo} até ${valorMaximo} é menor do que a quantidade de números (${quantidade}) sorteados solicitado.`
    );
    limpar();
  } else {
    let listaNumerosSorteados = [];
    listaNumerosSorteados = gerarNumeroAleatorio(
      valorMinimo,
      valorMaximo,
      quantidade
    );

    exibirResultado("resultado", listaNumerosSorteados);

    alterarStatusBotao("botao-sortear");
    alterarStatusBotao("botao-limpar");
    alterarStatusBotao("botao-reiniciar");
  }
}

function limpar() {
  limparValorInput("quantidade", "");
  limparValorInput("minimo", "");
  limparValorInput("maximo", "");
  exibirResultado("resultado", "0");
}

function reiniciar() {
  limpar();
  alterarStatusBotao("botao-sortear");
  alterarStatusBotao("botao-limpar");
  alterarStatusBotao("botao-reiniciar");
}
