import { calculateSum } from "./sum.js";

const inputA = document.getElementById("operand-a") as HTMLInputElement | null;
const inputB = document.getElementById("operand-b") as HTMLInputElement | null;
const resultElement = document.getElementById("sum-result");
const errorElement = document.getElementById("sum-error");
const button = document.getElementById("sum-button");

if (inputA && inputB && resultElement && errorElement && button) {
  const render = () => {
    const calculation = calculateSum(inputA.value, inputB.value);

    if (!calculation.isValid || calculation.result === null) {
      resultElement.textContent = "-";
      errorElement.textContent = calculation.errorMessage ?? "";
      return;
    }

    errorElement.textContent = "";
    resultElement.textContent = String(calculation.result);
  };

  button.addEventListener("click", render);
}
