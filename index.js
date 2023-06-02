// index.js

function calculate() {
  let totalAmount = parseFloat(document.getElementById("t").value);
  let tip = totalAmount * 0.07;
  let outputElement = document.getElementById("output");
  
  outputElement.value = tip.toFixed(2);
}
