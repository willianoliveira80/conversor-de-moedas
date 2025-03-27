// Seleciona os botões e campos necessários
const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

// Função para converter os valores
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");


  // Valores das taxas de conversão
  console.log(currencySelect.value);
    const dolarToday = 5.73;
    const euroToday = 6.18;
    const libraToday = 7.40;

// Conversão com base na moeda selecionada
if (currencySelect.value == "dolar") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);

} 

if (currencySelect.value == "euro") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);

}

if (currencySelect.value == "libra") {
  currencyValueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
  style: "currency",
  currency: "GBP",
}).format(inputCurrencyValue / libraToday);

}

// Atualiza o valor do Real no campo correspondente
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { 
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
}

// Função para mudar a moeda
function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".currency-img");

// Atualiza o nome e a imagem com base na moeda selecionada
  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImg.src = "./assets/dolar.png";

}

if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";

}
  
  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/libra.png";

}

// Atualiza os valores convertidos
  convertValues();
}

// Adiciona os eventos nos elementos
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);

