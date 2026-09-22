import View from "./view";

class ResultsView extends View {
  _parentElement = document.querySelector(".filter-results");
  _container = document.querySelector(".filter-results-grid");

  constructor() {
    super();

    this.addHandlerRenderResults();
    this._addHandlerOpenAnimeDetails();
  }

  getURLQueryParameters() {
    return new URLSearchParams(window.location.search);
  }

  _clear() {
    this._container.innerHTML = "";
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this._clear();
    this._container.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerRenderResults(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data
      .map(function (data, index) {
        return `<!-- Preview of anime in the list -->
      <li class="filter-results-preview">

      <!-- preview of 1st anime in the grid -->
      <a class="filter-results-preview-1" data-mal_id="${data.mal_id}" href="#">

      <!-- box which will contain the image and stuff -->
      <div class="filter-results-preview-1-imageBox">

      <!-- preview image will be placed here -->
      <img
      src="${data.images.webp.large_image_url}"
      alt="Anime preview image"
      class="filter-results-preview-1-imageBox-image"
      />

      <!-- gradient which will be displayed on hover -->
      <div
      class="filter-results-preview-1-imageBox-imageGradient"
      ></div>

      <!-- will contain the rating of anime -->
      <div class="filter-results-preview-1-imageBox-rating">
      ${data.rating ? data.rating : "?"}
      </div>

      <!-- box which will contain the score contents -->
      <div class="filter-results-preview-1-imageBox-scoreBox">
      <!-- icon for score -->
      <div
      class="filter-results-preview-1-imageBox-scoreBox-iconBox"
      >
      <ion-icon
      class="filter-results-preview-1-imageBox-scoreBox-iconBox-star"
      name="star"
      </ion-icon>
      </div>
      <!-- actual score -->
      <div class="filter-results-preview-1-imageBox-scoreBox-score">
      ${data.score ? data.score : "?"}
      </div>
      </div>

      <!-- <div
      class="filter-results-preview-1-imageBox-scoreBox-border anime-recent-preview-1-imageBox-scoreBox-border"
      ></div> -->
      </div>

      <!-- contain the attributes of the preview -->
      <div class="filter-results-preview-1-attributes">
      <!-- type attribute -->
      <div class="filter-results-preview-1-attributes-type">
      ${data.type ? data.type : "?"}
      </div>
      <!-- bullet -->
      <div class="filter-results-preview-1-attributes-bullet">
      &#x2022;
      </div>
      <!-- year attribute -->
      <div class="filter-results-preview-1-attributes-year">${
        data.aired.prop.from.year ? data.aired.prop.from.year : "?"
      }</div>
      <!-- episodes attribute -->
      <div class="filter-results-preview-1-attributes-episodes">
      ${data.episodes ? data.episodes : "?"} Ep(s)
      </div>
      </div>

      <!-- anime title -->
      <div class="filter-results-preview-1-title">
      ${data.title_english ? data.title_english : data.title}
      </div>
      </a>
      </li>`;
      })
      .join("");
  }

  _addHandlerOpenAnimeDetails() {
    this._container.addEventListener("click", function (e) {
      if (!e.target.closest(".filter-results-preview")) return;
      e.preventDefault();

      const id = e.target.closest(".filter-results-preview-1").dataset.mal_id;
      const url = `/details.html?id=${id}`;

      console.log(id);
      window.open(url, "_self");
    });
  }
}

export default new ResultsView();
