/**
 * Burger menu
 */
const burgerMenu = document.querySelector(".hidden-menu");
const menu = document.querySelector(".burger");
const links = document.querySelectorAll(".burger .menu__link");
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

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });
})

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
 * Service buttons
 */
const buttons = document.querySelectorAll(".project__types .project__btn");
const cardNames = document.querySelectorAll(".card__item .card__title");
const cards = document.querySelectorAll(".card__item");

const activeButton = "project__btn_active";
const blurCard = "card__item_blur";

const service = {"Gardens": "Garden care", "Lawn": "Lawn care", "Planting": "Planting"};

const toggleButton = function (button) {
  button.classList.toggle(activeButton)
}

const deleteClass = function (button) {
  button.classList.remove(activeButton);
}

const addBlur = function (card) {
  card.classList.add(blurCard);
}

const deleteBlur = function (card) {
  card.classList.remove(blurCard);
}

function acviveCards(button, cardNames) {
  cardNames.forEach((name, i) => {
    const card = document.getElementById("card__item" + (i + 1));
    deleteBlur(card);
    if (service[button.innerText] !== name.innerText) {
      addBlur(card);
    } 
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", function(e) {
    toggleButton(button);
    acviveCards(button, cardNames);

    const activeButtons = document.querySelectorAll(".project__types .project__btn_active");

    if(activeButtons.length > 1) {
      activeButtons.forEach((but) => {
        if (but.innerText !== button.innerText) {
          deleteClass(but);
        }
      });
    }

    if(activeButtons.length === 0) {
      cardNames.forEach((name, i) => {
        const card = document.getElementById("card__item" + (i + 1));
        deleteBlur(card);
      });
    }
  });
});


/**
 * Prices
 */
const priceButtons = document.querySelectorAll(".price-type__item");
const info = document.querySelector(".price-type__info");

const activePrice = function (button) {
  button.classList.toggle("price-type__item_active");
}

priceButtons.forEach((button) => {
  button.addEventListener("click", function(e) {
    activePrice(button);
  })
});


/**
 * Contact us
 */