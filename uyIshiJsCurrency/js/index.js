// Name variables
let elChangeingCurrencyBtn = document.querySelector(".dropPrice");
let elUzdToUsdChangeingBtn = document.querySelector(".UZStoUSD");
let elUsdToUzsChangeingBtn = document.querySelector(".USDtoUZS");
let elUzsToYevroChangeingBtn = document.querySelector(".UZStoYEVRO");
let elYevroToUzsChangeingBtn = document.querySelector(".YEVROtoUZS");
let elChangeingPriceBtn = document.querySelector(".changePrice");
let elPriceInput = document.querySelector(".priceInput");
let elPriceOutput = document.querySelector(".cours-output");

// Forign currency ↓ ↓ ↓
const UzsToDollarPrice = 10830.11;
const UzsToYevroPrice = 11700.12;

// Change currency UZS ↓ ↓ ↓
elUzdToUsdChangeingBtn.addEventListener("click", function () {
  elChangeingCurrencyBtn.innerHTML = elUzdToUsdChangeingBtn.innerHTML;
  //   elPriceOutput.textContent = elPriceInput.value / UzsToDollarPrice;
});
elUsdToUzsChangeingBtn.addEventListener("click", function () {
  elChangeingCurrencyBtn.innerHTML = elUsdToUzsChangeingBtn.innerHTML;
});
elUzsToYevroChangeingBtn.addEventListener("click", function () {
  elChangeingCurrencyBtn.innerHTML = elUzsToYevroChangeingBtn.innerHTML;
});
elYevroToUzsChangeingBtn.addEventListener("click", function () {
  elChangeingCurrencyBtn.innerHTML = elYevroToUzsChangeingBtn.innerHTML;
});

// exchanging currency !

// Dollar !
elChangeingPriceBtn.addEventListener("click", function () {
  if (elChangeingCurrencyBtn.innerHTML === elUzdToUsdChangeingBtn.innerHTML) {
    elPriceOutput.textContent = elPriceInput.value / UzsToDollarPrice;
  }
});
elChangeingPriceBtn.addEventListener("click", function () {
  if (elChangeingCurrencyBtn.innerHTML === elUsdToUzsChangeingBtn.innerHTML) {
    elPriceOutput.textContent = elPriceInput.value * UzsToDollarPrice;
  }
});
// Yevro !
elChangeingPriceBtn.addEventListener("click", function () {
  if (elChangeingCurrencyBtn.innerHTML === elUzsToYevroChangeingBtn.innerHTML) {
    elPriceOutput.textContent = elPriceInput.value / UzsToYevroPrice;
  }
});
elChangeingPriceBtn.addEventListener("click", function () {
  if (elChangeingCurrencyBtn.innerHTML === elYevroToUzsChangeingBtn.innerHTML) {
    elPriceOutput.textContent = elPriceInput.value * UzsToYevroPrice;
  }
});
