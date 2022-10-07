const currencyRates = {
  NGN: { USD: 0.0013, GBP: 0.0015, CAD: 0.0018 },
  USD: { NGN: 700 },
  GBP: { NGN: 600 },
  CAD: { NGN: 500 }
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

let options = [
  
  {
    value: "USD",
    label: "USD"
    // &#127482;&#127480;
  },
  {
    value: "GBP",
    label: "GBP"
    // &#127468;&#127463;
  },
  {
    value: "CAD",
    label: "CAD"
    // &#127464;&#127462;
  },
  {
    value: "NGN",
    label: "NGN"
    // &#127475;&#127468;
  },
];

let secondOptions = options;

const oneOption = [
  {
    value: 'NGN',
     label: 'NGN',
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

function handleFirstChange(e) {
  if (e.target.value === "NGN") {
    chooseToCountry.options.length = 0;
  secondOptions.forEach((option) => {
    let newOption = new Option(option.label, option.value);
    chooseToCountry.add(newOption, undefined);
  });
  getRate();
  }
}

function setSecondChange() {
  chooseFromCountry.options.length = 0;
  options.forEach((option) => {
    let newOption = new Option(option.label, option.value);
    chooseFromCountry.add(newOption, undefined);
  });
  getRate();
}

function handleSecondChange(e) {
  if (e.target.value === "NGN") {
    setSecondChange();
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
chooseFromCountry.addEventListener("change", handleFirstChange);
chooseToCountry.addEventListener("change", handleSecondChange);
