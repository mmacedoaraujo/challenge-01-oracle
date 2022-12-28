window.onload = function () {
  let criptButton = document.querySelector("#crypt-button");
  criptButton.onclick = encryptText;
  let copyButton = document.querySelector("#copy-button");
  copyButton.onclick = copyToClipBoard;
  let decryptButton = document.querySelector("#decrypt-button");
  decryptButton.onclick = decryptText;
};

function encryptText() {
  let text = document.querySelector("#text-area").value;
  text = encrypt(text);
  if (text != "" && !text.match(/[\d]/gim)) {
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
    document.querySelector("#text-area").value = "";
    document.querySelector("#message-board-warning").style.visibility =
      "hidden";
    document.querySelector("#message-board-previous").style.visibility =
      "visible";
    decryptText = decrypt(decryptText);

    document.getElementById("message-board-text-area").value = decryptText;
  }
}

function copyToClipBoard() {
  let copyText = document.querySelector("#message-board-text-area");
  navigator.clipboard.write(copyText);
  document.querySelector("#text-area").value = copyText.value;
  document.querySelector("#message-board-text-area").value = "";
  alert("Copied the text: " + copyText.value);
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
  decryptedWord = text.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    
  return decryptedWord;
}
