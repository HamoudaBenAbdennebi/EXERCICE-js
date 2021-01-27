m = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

for (i = 0; i < 31; i++) {
  var day = document.getElementById("day");
  var opt = document.createElement("option");
  opt.appendChild(document.createTextNode(i + 1));
  opt.value = i + 1;
  day.appendChild(opt);
}

for (j = 0; i < 12; j++) {
  var mois = document.getElementById("mois");
  var opt2 = document.createElement("option");
  opt2.appendChild(document.createTextNode(m[j]));
  opt2.value = j + 1;
  mois.appendChild(opt2);
}
