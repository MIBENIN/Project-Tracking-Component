const icon_menu = document.getElementById("icon-hamburger");
const nav_link_bar = document.getElementById("mobile-navigation");
const icon_close = document.getElementById("icon-close");

icon_menu.addEventListener("click", () => {
  nav_link_bar.style.display = "flex";
  icon_close.style.display = "block";
  icon_menu.style.display = "none";
});

icon_close.addEventListener("click", () => {
  nav_link_bar.style.display = "none";
  icon_close.style.display = "none";
  icon_menu.style.display = "block";
});
