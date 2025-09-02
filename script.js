document.getElementById("num").addEventListener("input", calculate);
document.getElementById("nee").addEventListener("input", calculate);
document.getElementById("nano").addEventListener("input", calculate);

function calculate() {
  const num = parseFloat(document.getElementById("num").value);
  const nee = parseFloat(document.getElementById("nee").value);
  const operation = document.getElementById("nano").value;

  let resultText = "";

  if (num == "" || nee=="") {
    resultText = "Please enter valid numbers.";
  } else {
    if (operation === "Addition") {
      resultText = "Result: " + (num + nee);
    } else if (operation === "Subtraction") {
      resultText = "Result: " + (num - nee);
    } else if (operation === "Multiplication") {
      resultText = "Result: " + (num * nee);
    } else if (operation === "Division") {
     
        resultText = "Result: " + (num / nee);
      
    } else {
      resultText = "in proces....";
    }
  }resultText.prev

  document.getElementById("result").innerText = resultText;
}
