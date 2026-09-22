import { View } from "./view.js";

class NavigationView extends View {
  _parentElement = document.querySelector(".nav");
  _navigationLinksParent = this._parentElement.querySelector(".nav-elements");

  _searchField = document.querySelector(".search-bar");
  _btnFilter = document.querySelector(".nav-btn-filter");
  _btnRandom = document.querySelector(".nav-btn-random");

  constructor() {
    super();
    this._addHandlerSearchAnime();
    this._addHandlerOpenFilterForm();
  }

  addHandlerNavigation() {
    this._navigationLinksParent.addEventListener("click", function (e) {
      e.preventDefault();

      if (!e.target.classList.contains("nav-element-link")) return;

      const id = e.target.getAttribute("href");
      const element = document.querySelector(id);

      element.scrollIntoView({ behavior: "smooth" });
    });
  }

  addHandlerOpenRandomAnime(handler) {
    this._btnRandom.addEventListener("click", function (e) {
      e.preventDefault();

      handler();
    });
  }

  _addHandlerSearchAnime() {
    this._searchField.addEventListener("keydown", (e) => {
      if (!(e.key === "Enter")) return;

      const keyword = this._searchField.value;

      const url = `/filter.html?keyword=${keyword}`;

      this._searchField.value = "";

      window.open(url, "_self");
    });
  }

  _addHandlerOpenFilterForm() {
    this._btnFilter.addEventListener("click", function (e) {
      const url = `/filter.html`;

      window.open(url, "_self");
    });
  }
}

export default new NavigationView();
