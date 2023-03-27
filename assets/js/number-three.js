function createUl3() {
  const ul = document.createElement("li");
  ul.innerHTML = "This is script number <strong>three</strong>.";
  document.querySelector("ol").appendChild(ul);
}

createUl3();