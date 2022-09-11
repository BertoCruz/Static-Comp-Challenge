// QUERY SELECTORS
const inputField = document.getElementById("copyLinkInput");
const copyButton = documrnt.getElementById("copyLinkButton");


// EVENT LISTENERS
inputField.addEventListener("focus", () => inputField.select());

copyButton.addEventListener("click", () => {
    const text = inputField.value;

    inputField.select();
    navigator.clipboard.writeText(text);

    inputField = "COPIED!";
    setTimeout(() => inputField.value = text, 2000);
});