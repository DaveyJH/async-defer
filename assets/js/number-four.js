function createUl4() {
  const ul = document.createElement("li");
  ul.innerHTML = "This is script number <strong>four</strong>.";
  document.querySelector("ol").appendChild(ul);
}

createUl4();