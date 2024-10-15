import {
  verifyInputs,
  verifyValues,
  renderError,
  removeError,
  inputValid,
  CalculateAndRender,
  valueValid,
} from "./fonctions.js";

const btnElement = document.querySelector(".js-btn");

btnElement.addEventListener("click", () => {
  verifyInputs();

  if (inputValid) {
    verifyValues();
  }

  if (inputValid && valueValid) {
    CalculateAndRender();
  }
});
