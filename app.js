var translatebtn = document.querySelector("#btn-translate");
var inputtxt = document.querySelector("#input-txtarea");
var outputtxt = document.querySelector("#output-txtarea");

function DoTranslation() {
    outputtxt.innerHTML = inputtxt.value;
}
translatebtn.addEventListener("click",DoTranslation);