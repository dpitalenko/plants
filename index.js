/**
 * Burger menu
 */

const burgerMenu = document.querySelector(".hidden-menu");
const menu = document.querySelector(".burger");
const body = document.querySelector("#body");

const stopScroll = "remove-scroll";
const visible = "burger-visible";

const toggleMenu = function () {
  menu.classList.toggle(visible);
  body.classList.toggle(stopScroll);
}

burgerMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == menu || menu.contains(target);
  const its_burgerMenu = target == burgerMenu;
  const menu_is_active = menu.classList.contains("burger-visible");

  if (!its_menu && !its_burgerMenu && menu_is_active) {
      toggleMenu();
  }
});

function closeMenu() {
  document.getElementById("burger-menu").classList.remove(visible);
  document.getElementById("body").classList.remove(stopScroll);
}

/**
 * 
 */