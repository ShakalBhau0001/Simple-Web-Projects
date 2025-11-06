const input = document.getElementById("inputdata");
const buttons = document.querySelectorAll(".btn");
const historyToggle = document.getElementById("historyToggle");
const themeToggle = document.getElementById("themeToggle");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");
const calculator = document.querySelector(".calculator-container");
let history = [];

historyToggle.addEventListener("click", () => {
  calculator.classList.toggle("show-history");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeToggle.innerHTML = document.body.classList.contains("dark-theme")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

const normalizeExpression = expr =>
  expr.replace(/[×]/g, "*").replace(/[÷]/g, "/").replace(/[−]/g, "-");

function updateHistory() {
  historyList.innerHTML = "";
  if (history.length === 0) {
    historyList.innerHTML = `<div class="history-empty">Your calculations will appear here</div>`;
    return;
  }
  history.forEach(item => {
    const div = document.createElement("div");
    div.className = "history-item";
    div.innerHTML = `<div>${item.exp}</div><div class="history-result">= ${item.res}</div>`;
    historyList.appendChild(div);
  });
}

function addToHistory(exp, res) {
  history.unshift({ exp, res });
  if (history.length > 8) history.pop();
  updateHistory();
}

clearHistoryBtn.addEventListener("click", () => {
  history = [];
  updateHistory();
});

function calculateExpression() {
  try {
    const expression = normalizeExpression(input.value);
    if (!/[\d]/.test(expression)) return;
    const result = Function(`"use strict"; return (${expression})`)();
    addToHistory(input.value, result);
    input.value = result;
  } catch {
    input.value = "SYNTAX ERROR";
    input.style.color = "#ff6b6b";
    setTimeout(() => (input.style.color = "white"), 1500);
  }
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    input.style.color = "white";
    const val = btn.value;
    if (val === "C") input.value = "0";
    else if (val === "back") input.value = input.value.slice(0, -1) || "0";
    else if (val === "=") calculateExpression();
    else {
      if (input.value === "0" && /\d/.test(val)) input.value = val;
      else input.value += val;
    }
  });
});

document.addEventListener("keydown", e => {
  const key = e.key;
  if (/[\d\+\-\*\/\.\%]/.test(key)) {
    e.preventDefault();
    input.value = input.value === "0" && /\d/.test(key) ? key : input.value + key;
  } else if (key === "Enter") {
    e.preventDefault();
    calculateExpression();
  } else if (key === "Backspace") {
    e.preventDefault();
    input.value = input.value.slice(0, -1) || "0";
  } else if (key === "Escape") {
    e.preventDefault();
    input.value = "0";
  }
});

updateHistory();
