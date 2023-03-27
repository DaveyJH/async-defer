function createUl1() {
  const ul = document.createElement("li");
  ul.innerHTML = "This is script number <strong>one</strong>.";
  document.querySelector("ol").appendChild(ul);
}

createUl1();