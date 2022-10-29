import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./style.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

// DOM
let homeLink = document.querySelector(".nav-link.home");
let menuLink = document.querySelector(".nav-link.menu");
let contactLink = document.querySelector(".nav-link.contact");

// on window load
homePage();
homeLink.classList.add("active");

// Event listeners
homeLink.addEventListener("click", function () {
  homeLink.classList.add("active");
  menuLink.classList.remove("active");
  contactLink.classList.remove("active");
  content.innerHTML = "";
  homePage();
});

menuLink.addEventListener("click", function () {
  menuLink.classList.add("active");
  homeLink.classList.remove("active");
  contactLink.classList.remove("active");
  content.innerHTML = "";
  menuPage();
});

contactLink.addEventListener("click", function () {
  menuLink.classList.remove("active");
  homeLink.classList.remove("active");
  contactLink.classList.add("active");
  content.innerHTML = "";
  contactPage();
});
