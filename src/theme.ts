if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "light");
}
if (localStorage.getItem("theme") === "light") {
  document.documentElement.classList.add("light");
} else {
  document.documentElement.classList.remove("light");
}
