import { sum } from "./sum.js";

const resultElement = document.getElementById("sum-result");
if (resultElement) {
  resultElement.textContent = String(sum(2, 3));
}
