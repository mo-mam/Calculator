// Selections
const screenArea = document.getElementById("screen");
const calculatorBody = document.getElementById("calculator-body");

calculatorBody.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    switch (e.target.textContent) {
      case "CL":
        clearAll();
        break;
      case "Del":
        deleteOneValue();
        break;
      case "=":
        operate();
        break;
      case "Ans":
        getAns();
        break;
      default:
        addContentToScreen(e.target.textContent);
        break;
    }
  }
});
//Clear All
function clearAll() {
  screenArea.textContent = "";
}

// Adding To Screen
function addContentToScreen(value) {
  screenArea.textContent += value;
}

let answer = 0;
// Delete One Value
function deleteOneValue() {
  let currentValues = screenArea.textContent;
  screenArea.textContent = currentValues.substring(0, currentValues.length - 1);
}
function operate() {
  const expression = screenArea.textContent;
  try {
    let calculation = math.evaluate(screenArea.textContent);
    screenArea.textContent = calculation;
    answer = calculation;
  } catch (error) {
    screenArea.textContent = "Math Error";
  }
}
// Get the answer
function getAns() {
  screenArea.textContent = answer;
}
