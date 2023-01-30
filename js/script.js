const btnEncript = document.querySelector(".btn-encript");
const btnDecript = document.querySelector(".btn-decript");
const btnCopy = document.querySelector(".btn-copy");
const textInput = document.querySelector(".display__input-text");
const outoutText = document.querySelector(".display__output-box");
const outputImg = document.querySelector(".display__output-img");
const textResult = document.querySelector(".display__output-text");
const warningText = document.querySelector(".display__error");
const about = document.querySelector(".about");
const container = document.querySelector(".container");
const info = document.querySelector(".info");
const home = document.querySelector(".btn-home");

btnEncript.addEventListener("click", function () {
  if (textInput.value === "") return;

  const message = textInput.value;
  textInput.value = "";
  validation(message) ? displayResult(message) : displayError();
});

btnDecript.addEventListener("click", function () {
  if (textInput.value === "") return;

  const message = textInput.value;
  textInput.value = "";
  validation(message) ? decriptText(message) : displayError();
});

btnCopy.addEventListener("click", function () {
  copyText(textResult.textContent);
  textResult.textContent = "";
});

about.addEventListener("click", function () {
  container.classList.add("hidden");
  info.classList.remove("hidden");
});

home.addEventListener("click", function () {
  container.classList.remove("hidden");
  info.classList.add("hidden");
});

function validation(data) {
  const symbols = /^[a-z", "]*$/;
  return data.match(symbols) ? true : false;
}

function displayToggle() {
  outputImg.classList.toggle("hidden");
  outoutText.classList.toggle("hidden");
}

function displayResult(data) {
  displayToggle();
  const msgData = data.split("").map((word) => {
    switch (word) {
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "a":
        return "ai";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        return word;
    }
  });

  textResult.textContent = msgData.join("");
}

function displayError() {
  warningText.classList.remove("hidden");

  setTimeout(() => {
    warningText.classList.add("hidden");
  }, 2000);
}

function copyText(data) {
  navigator.clipboard.writeText(data);
  displayToggle();
}

function decriptText(data) {
  let text = data.replaceAll("enter", "e");
  text = text.replaceAll("imes", "i");
  text = text.replaceAll("ai", "a");
  text = text.replaceAll("ober", "o");
  text = text.replaceAll("ufat", "u");

  displayToggle();
  textResult.textContent = text;
}
