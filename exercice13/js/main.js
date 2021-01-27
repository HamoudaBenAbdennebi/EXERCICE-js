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

for (j = 0; j < 12; j++) {
  var mois = document.getElementById("mois");
  var opt2 = document.createElement("option");
  opt2.appendChild(document.createTextNode(m[j]));
  opt2.value = j + 1;
  mois.appendChild(opt2);
}

for(x = 1977;x<=2021;x++){
  var year = document.getElementById("year");
  var opt3 = document.createElement("option");
  opt3.appendChild(document.createTextNode(x));
  opt2.value = x + 1;
  year.appendChild(opt3);
}

var btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
  open('./sauvgarder.html')
})