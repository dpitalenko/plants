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

const cityBlock = document.querySelector(".city__block");
const cityList = document.querySelector(".city__list");
const cityItems = document.querySelectorAll(".city__item");
const addressBlock = document.querySelector(".address");

const data = [{"City": "Yonkers, NY", "Phone": "+1	914	678 0003", "Address": "511 Warburton Ave"},
              {"City": "Canandaigua, NY", "Phone": "+1	585	393 0001", "Address": "151 Charlotte Street"},
              {"City": "Sherrill, NY", "Phone": "+1	315	908 0004", "Address": "14 WEST Noyes BLVD"},
              {"City": "New York City", "Phone": "+1	212	456 0002", "Address": "9 East 91st Street"}
            ];

const showList = function () {
  cityList.style = "display: block";
  cityBlock.classList.add("city__block_active");
};

const hideList = function () {
  cityList.style = "display: none";
  cityBlock.classList.remove("city__block_active");
};

const showAddress = function (address) {
  const screenWidth = document.documentElement.scrollWidth;
  if (screenWidth < 767.98) {
    const pic = document.querySelector(".contact");
    pic.style = "background-image: none";
  }
  addressBlock.style = "opacity: 1";
  const values = document.querySelectorAll(".address__value");
  data.forEach((item) => {
    if (item.City === address.innerText.trim()) {
      values[0].innerText = item.City;
      values[1].innerText = item.Phone;
      values[2].innerText = item.Address;
    }
  });
};

const hideAddress = function () {
  addressBlock.style = "opacity: 0";
};

cityBlock.addEventListener("click", function(e) {
  hideAddress();
  showList();
});

cityList.addEventListener("mouseleave", function(e) {
  hideList();
})

cityItems.forEach((item) => {
  item.addEventListener("click", function(e) {
    hideList();
    showAddress(item);
  });
});
