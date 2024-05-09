var accord = document.getElementsByClassName("acc-btn");
var i;

for (i = 0; i < accord.length; i++) {
    accord[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var accDesc = this.nextElementSibling;
        if (accDesc.style.maxHeight) {
            accDesc.style.maxHeight = null;
        } else {
            accDesc.style.maxHeight = accDesc.scrollHeight + "px";
        }
    });
}
function onClickButton(newContent) {
    const TextElement = document.getElementById("click-content");
    TextElement.innerHTML = newContent;
}

function checkTextField() {
    const textIn = document.getElementById("click-content");
    const answer = textIn.value;
    const error = document.getElementById('error');

    if (answer != 'hello world') {
        error.textContent = 'Input is not equals to "hello world", try again!';
    } else {
        error.textContent = '';
    }
}
