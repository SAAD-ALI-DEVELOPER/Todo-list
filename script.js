
let input = document.getElementById("itemInput");
let button = document.getElementById("addBtn");
let ul = document.getElementById("myList");

button.addEventListener("click", function () {

    let value = input.value.trim();

    if (value === "") {
        alert("Please enter something!");
        return;
    }

    let li = document.createElement("li");

    li.textContent = value;

    ul.appendChild(li);

    input.value = "";
    input.focus();
});

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        button.click();
    }
});
