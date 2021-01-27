const btn = document.getElementById("btn");

const loading = () => {
  document.getElementById("res").innerHTML =
    '<h2 style="color:blue;text-align:center;">bienvenue</h2>';
};

btn.addEventListener("click", () => {
  document.getElementById("bye").innerHTML = "<h2>Au revoir</h2>";
});
