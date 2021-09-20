const container = document.querySelector(".container");
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const btnTest = document.querySelector("#btn-test");
const buttons = document.querySelectorAll("button");

const pRed = document.createElement("p");
const h3Blue = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const p = document.createElement("p");

pRed.textContent = "Hey I'm red!";
h3Blue.textContent = "I'm a blue h3!";
h1.textContent = "I'm a div";
p.textContent = "ME TOO!";

pRed.style["color"] = "red";
h3Blue.style["color"] = "blue";
div.style["border"] = "5px solid black";
div.style["background-color"] = "pink";

btn.onclick = () => alert("method 2");
btn2.addEventListener("click", () => {
    alert("method3");
})


btnTest.addEventListener("click", e => {
    console.log(e.target);
    e.target.style["background-color"] = "red";
})

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
    });
})


div.appendChild(h1);
div.appendChild(p);

container.appendChild(pRed);
container.appendChild(h3Blue);
container.appendChild(div);