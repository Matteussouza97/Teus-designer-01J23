import "./assets";
import { Router } from "@vaadin/router";
import { initRouter } from "./assets/router";

let navbar;
let dialog;
let router;

document.addEventListener("DOMContentLoaded", function () {
    router = initRouter();
  

    
  navbar = document.querySelector("app-navbar");

  dialog = document
  .querySelector("menu-section")
  .shadowRoot.querySelector("dialog");

  console.log(dialog)
});

export const nav = {
    abrir: function () {
      dialog.showModal()
    },
    fechar: function () {
      dialog.close()
    },
  }

// document.addEventListener("DOMContentLoaded", function () {
//   navbar = document.querySelector("app-navbar");
// });

/* Navbar dinâmica ao scroll */

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("escondido");
  } else {
    navbar.classList.add("escondido");
  }

  prevScrollpos = currentScrollPos;
};
