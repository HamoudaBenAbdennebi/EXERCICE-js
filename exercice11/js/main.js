const radios = document.querySelectorAll("#radio");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (radios[0].checked) {
    alert("choix 1");
  } else if (radios[1].checked) {
    alert("choix 2");
  } else if (radios[2].checked) {
    alert("choix 3");
  }
});
