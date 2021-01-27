var email = document.getElementById("email");
var btn = document.getElementById("v");

btn.addEventListener("click", () => {
  x = true;
  let cnt = 0;
  for (i = 0; i < email.value.length; i++) {
    if (email.value[i] == "@") {
      cnt++;
    }
  }
  if (cnt != 1) {
    x = false;
  }
  if (!email.value.includes(".")) {
    x = false;
  }
  if (x == false) {
    alert(email.value + " n'est pas valide");
  } else {
    alert(email.value + " est valide");
  }
});
