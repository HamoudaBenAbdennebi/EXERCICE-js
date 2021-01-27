var radios = document.querySelectorAll("#radio");
var btn = document.getElementById("btn");
var v1 = document.getElementById("v1").value;
var v2 = document.getElementById("v2").value;
btn.addEventListener("click", () => {
  var v1 = document.getElementById("v1").value;
  var v2 = document.getElementById("v2").value;

  if (radios[0].checked) {
    alert(parseInt(v1) / parseInt(v2));
  } else if (radios[1].checked) {
    alert(parseInt(v1) + parseInt(v2));
  } else if (radios[2].checked) {
    alert(parseInt(v1) - parseInt(v2));
  } else if (radios[3].checked) {
    alert(parseInt(v1) * parseInt(v2));
  }
});
