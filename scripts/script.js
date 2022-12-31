let width = window.matchMedia("(max-width: 768px)");
window.onload = function () {
  let criptButton = document.querySelector("#crypt-button");
  criptButton.onclick = encryptText;

  let decryptButton = document.querySelector("#decrypt-button");
  decryptButton.onclick = decryptText;

  let copyButton = document.querySelector("#copy-button");
  copyButton.onclick = copyToClipBoard;

  let eraseButton = document.querySelector("#erase-button");
  eraseButton.onclick = eraseAll;

  if (width.matches) {
    displayTheCurrentEncryptedMessage("none");
  }
};

function displayTheCurrentEncryptedMessage(text) {
  document.getElementById("message-board-previous").style.display = text;
}

function displayMessageBoard(text) {
  document.getElementById("message-board").style.visibility = text;
  document.getElementById("message-board-warning").style.visibility = text;
}

function eraseAll() {
  if (document.getElementById("message-board-text-area").value == "") {
  } else {
    document.getElementById("message-board-text-area").value = "";
    displayTheCurrentEncryptedMessage("none");
    displayMessageBoard("visible");
  }
}

function encryptText() {
  let text = document.querySelector("#text-area").value;
  text = encrypt(text);
  if (width.matches && text != "" && !text.match(/[\d]/gim)) {
    document.getElementById("text-area").value = "";
    document.querySelector("#message-board").style.visibility = "hidden";
    displayTheCurrentEncryptedMessage("inline-block");

    document.getElementById("message-board-text-area").value = text;
  } else if (text != "" && !text.match(/[\d]/gim)) {
    displayTheCurrentEncryptedMessage("inline-block");
    document.querySelector("#text-area").value = "";
    document.querySelector("#message-board-warning").style.visibility =
      "hidden";
    document.querySelector("#message-board-previous").style.visibility =
      "visible";

    document.getElementById("message-board-text-area").value = text;
  }
}

function decryptText() {
  let decryptText = document.querySelector("#text-area").value;
  if (decryptText != "" && !decryptText.match(/[\d]/gim)) {
    displayTheCurrentEncryptedMessage("inline-block");
    document.querySelector("#text-area").value = "";
    document.querySelector("#message-board-warning").style.visibility =
      "hidden";
    document.querySelector("#message-board-previous").style.visibility =
      "visible";
    decryptText = decrypt(decryptText);

    document.getElementById("message-board-text-area").value = decryptText;
  }
}

async function copyToClipBoard() {
  var copyText = document.getElementById("message-board-text-area");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard
      .writeText(copyText.value)
      .then(() => {
        alert("successfully copied");
      })
      .catch(() => {
        alert("something went wrong");
      });
}

function encrypt(text) {
  let substring = "";
  let encryptedWord = "";
  for (let index = 0; index < text.length; index++) {
    substring = text.substring(index, index + 1);
    switch (substring) {
      case "a":
        substring = "ai";
        break;
      case "e":
        substring = "enter";
        break;
      case "i":
        substring = "imes";
        break;
      case "o":
        substring = "ober";
        break;
      case "u":
        substring = "ufat";
        break;
    }
    encryptedWord += substring;
  }
  return encryptedWord;
}

function decrypt(text) {
  let substring = "";
  let decryptedWord = text;
  decryptedWord = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  return decryptedWord;
}
