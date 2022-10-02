let caja = document.getElementById("caja");
let formas = document.getElementById("formas");
let papu = document.getElementById("papa");

function mama() {
  const div = document.createElement("div");
  div.className = "mama";
  div.draggable = "true";
  formas.appendChild(div);
}

function papa() {
  const div = document.createElement("div");
  div.className = "papa";
  div.draggable = "true";
  formas.appendChild(div);
}

function hermane() {
  const div = document.createElement("div");
  div.className = "hermane";
  div.draggable = "true";
  formas.appendChild(div);
}

caja.addEventListener("dragover", e => {
  e.preventDefault();
  console.log("over");
});

caja.addEventListener("drop", e => {
  console.log("drop");
  caja.appendChild(e)
});
