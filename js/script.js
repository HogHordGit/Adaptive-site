"use strict";

//Скрипт для меню
const btn = document.querySelector("#menu_btn");
const menu = document.querySelectorAll(".menu__item_phone");

btn.addEventListener("click", () => {
    menu.forEach((btn, i) => {
        menu[i].classList.toggle("_disp");
    });
});
