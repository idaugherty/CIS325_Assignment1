const button = document.getElementById("button1");
const list = document.getElementById("myList");
const input = document.getElementById("input");

button.addEventListener("click", function () {
    const inputText = input.value;

    if(inputText !== ""){
        const li = document.createElement("li");
        li.textContent = inputText;

        list.appendChild(li);

        input.value = "";
    }
});