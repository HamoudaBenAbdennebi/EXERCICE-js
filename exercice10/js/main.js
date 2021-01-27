const btn = document.getElementById("btn");
select = document.getElementById("select");
res = document.getElementById("res");
btn.addEventListener("click", () => {
  res.innerHTML = select.value;
});
