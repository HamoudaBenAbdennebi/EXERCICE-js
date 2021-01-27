var input = document.getElementById("in");
var output = document.getElementById("out");
var btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  output.value = input.value;
});
