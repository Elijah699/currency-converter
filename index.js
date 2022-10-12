const currencyRates = {
  NGN: { USD: 0.0013, GBP: 0.0015, CAD: 0.0018, EUR: 0.0014 },
  USD: { NGN: 700 },
  GBP: { NGN: 600 },
  CAD: { NGN: 500 },
  EUR: { NGN: 650 }
};

let fromCurrInput = document.getElementById("fromCurrency");
let toCurrInput = document.getElementById("toCurrency");
let chooseFromCountry = document.getElementById("chooseFromCountry");
let chooseToCountry = document.getElementById("chooseToCountry");
let fromRate = document.querySelector(".fromRate");
let toRate = document.querySelector(".toRate");
let fromValue = chooseFromCountry.value;
let toValue = chooseToCountry.value;

function calculateToReceive() {
  let amount = fromCurrInput.value;
  let from = chooseFromCountry.value;
  let to = chooseToCountry.value;

  toCurrInput.value =
    Math.round((amount * currencyRates[from][to] + Number.EPSILON) * 100) / 100;
}

function calculateToSend() {
  let amount = toCurrInput.value;
  let from = chooseFromCountry.value;
  let to = chooseToCountry.value;

  fromCurrInput.value =
    Math.round((amount / currencyRates[from][to] + Number.EPSILON) * 100) / 100;
}

function getRate() {
  let fromValue = chooseFromCountry.value;
  let toValue = chooseToCountry.value;

  fromRate.innerHTML = 1 + " " + [fromValue];
  toRate.innerHTML = currencyRates[fromValue][toValue] + " " + toValue;
}

window.addEventListener("load", getRate);
chooseFromCountry.addEventListener("input", getRate);
chooseToCountry.addEventListener("input", getRate);
chooseFromCountry.addEventListener("input", calculateToSend);
chooseToCountry.addEventListener("input", calculateToReceive);
chooseFromCountry.addEventListener("input", calculateToReceive);
chooseToCountry.addEventListener("input", calculateToSend);

let nigeria = String.fromCodePoint(0x1F1F3,0x1F1EC);
let uk = String.fromCodePoint(0x1F1EC,0x1F1E7);
let canada = String.fromCodePoint(0x1F1E8,0x1F1E6);
let dollar = String.fromCodePoint(0x1F1FA,0x1F1F8);
let eur = String.fromCodePoint(0x1F1EA,0x1F1FA);

let options = [

  {
    value: "USD",
    label: `${dollar} USD`
  },
  {
    value: "GBP",
    label: `${uk} GBP`
  },
  {
    value: "CAD",
    label: `${canada} CAD`
  },
  {
    value: "EUR",
    label: `${eur} EUR`
  },
  {
    value: "NGN",
    label: `${nigeria} NGN`
  },

];

let secondOptions = options;

const oneOption = [
  {
    value: 'NGN',
     label: `${nigeria} NGN`,
  }
]

function setFromCountryOptions() {
  oneOption.forEach((option) => {
    let newOption = new Option(option.label, option.value);
    chooseFromCountry.add(newOption, undefined);
  });
  getRate();
}

function setTOCountryOptions() {
  secondOptions.forEach((option) => {
    let newOption = new Option(option.label, option.value);
    chooseToCountry.add(newOption, undefined);
  });
  getRate();
}



function setFromOptions() {
  chooseFromCountry.options.length = 0;
  options.forEach((option) => {
    let newOption = new Option(option.label, option.value);
    chooseFromCountry.add(newOption, undefined);
  });
  getRate();
}

function setToOptions() {
  chooseToCountry.options.length = 0;
  options.forEach((option) => {
    let newOption = new Option(option.label, option.value);
    chooseToCountry.add(newOption, undefined);
  });
  getRate();
}



function handleFromCountryChange(e) {
  if (e.target.value === "NGN") {
    setToOptions();
    chooseFromCountry.options.length = 0;
  oneOption.forEach((option) => {
    let newOption = new Option(option.label, option.value);
    chooseFromCountry.add(newOption, undefined);
  });
  getRate();
  }
}



function handleToCountryChange(e) {
  if (e.target.value === "NGN") {
    setFromOptions();
    chooseToCountry.options.length = 0;
    oneOption.forEach((option) => {
    let newOption = new Option(option.label, option.value);
    chooseToCountry.add(newOption, undefined);
  });
  getRate();
  }
}

window.addEventListener("load", setFromCountryOptions);
window.addEventListener("load", setTOCountryOptions);
chooseFromCountry.addEventListener("change", handleFromCountryChange);
chooseToCountry.addEventListener("change", handleToCountryChange)