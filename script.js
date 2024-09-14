let textElement = document.getElementById("text");
let deleteKey = document.getElementById("deleteKey");
let enterKey = document.getElementById("keyEnter");
let spaceKey = document.getElementById("spaceKey");
let capsLock = document.getElementById("capsLock");
let allKey = document.querySelectorAll(".key");
let isCaps = false;

deleteKey.addEventListener("click", function () {
    let displayText = textElement.value;
    let newText = displayText.slice(0, displayText.length - 1);
    textElement.value = newText;
});

enterKey.addEventListener("click", function () {
    let content = textElement.value;
    let newContent = content + "\n";
    textElement.value = newContent;
});

spaceKey.addEventListener("click", function () {
    textElement.value += ' ';
});

capsLock.addEventListener("click", function () {
    isCaps = !isCaps;
    for (let i = 0; i < allKey.length; i++) {
        let key = allKey[i];
        if (!key.classList.contains("delete") && !key.classList.contains("enter") &&
            !key.classList.contains("space") && !key.classList.contains("capslock")) {
            key.innerText = isCaps ? key.innerText.toUpperCase() : key.innerText.toLowerCase();
        }
    }
});

for (let i = 0; i < allKey.length; i++) {
    let key = allKey[i];
    key.addEventListener("click", function () {
        if (!key.classList.contains("delete") && !key.classList.contains("enter") &&
            !key.classList.contains("space") && !key.classList.contains("capslock")) {
            textElement.value += isCaps ? key.innerText.toUpperCase() : key.innerText.toLowerCase();
        }
    });
}