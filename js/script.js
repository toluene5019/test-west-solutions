//-----MOBILE MENU-----//
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".mobile__menu-item");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)
//-----MOBILE MENU-----//

const make = document.getElementById("car-make");
const yearItems = document.querySelectorAll(".card__item");

make.addEventListener("change", function () {
  let value = make.value;
  [...yearItems].forEach((item) => {
    if (value === "") {
        item.classList.remove("hidden");
    } else {
        const make = item.dataset.make;
        if (value === make) {
            item.classList.remove('hidden')
        } else {
            item.classList.add('hidden')
        }
    }
  });
});


const year = document.getElementById("car-year");
const items = document.querySelectorAll(".card__item");

year.addEventListener("change", function () {
  let value = year.value;
  [...items].forEach((item) => {
    if (value === "") {
        item.classList.remove("hidden");
    } else {
        const year = item.dataset.year;
        if (value === year) {
            item.classList.remove('hidden')
        } else {
            item.classList.add('hidden')
        }
    }
  });
});

const mileage = document.getElementById("car-mileage");
const elements = document.querySelectorAll(".card__item");

mileage.addEventListener("change", function () {
  let value = mileage.value;

  [...elements].forEach((element) => {
    if (value === "") {
      element.classList.remove("hidden");
    } else {
      const mileage = +element.dataset.mile;
      if (mileage < value ) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    }
  });
});

