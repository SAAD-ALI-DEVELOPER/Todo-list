
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
    li.className = "forli"
    ul.appendChild(li);

    input.value = "";
    input.focus();

    let newbtn = document.createElement("button");
    newbtn.className = "newbutton"
    li.appendChild(newbtn)
    newbtn.textContent = "Remove";

    newbtn.addEventListener("click",function() {
        li.remove();
    })
});

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        button.click();
    }
});
