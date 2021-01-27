var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let nm = document.getElementById("input").value;
  let res = document.getElementById("res");
  res.innerHTML = "<b>" + nm + "</b>";
});
