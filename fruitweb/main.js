const handburger = document.getElementById("handburger");
const navul = document.getElementById("nav-ul");

handburger.addEventListener("click", () => {
  navul.classList.toggle("show");
});
