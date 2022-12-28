window.onload = function () {
  let criptButton = document.querySelector("#crypt-button");
  criptButton.onclick = getText;
  let copyButton = document.querySelector("#copy-button");
  copyButton.onclick = copyToClipBoard;
};

function getText() {
  let text = document.querySelector("#text-area").value;
  if (text != "" && !text.match(/[\d]/i)) {
    document.querySelector("#text-area").value = "";
    document.querySelector("#message-board-warning").style.visibility =
      "hidden";
    document.querySelector("#message-board-previous").style.visibility =
      "visible";

    document.getElementById("message-board-text-area").value = text;
  }
}

function copyToClipBoard() {
  let copyText = document.querySelector("#message-board-text-area"); 

  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);

}
