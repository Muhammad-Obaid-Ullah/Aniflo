import { View } from "./view";

class RecentAnimesView extends View {
  _parentElement = document.querySelector(".animes-recent");
  _container = document.querySelector(".anime-recent-grid");
  _spinner = this._parentElement.querySelector(".lds-ellipsis");
  _bottomLine = this._parentElement.querySelector(".animes-recent-bottomLine");

  constructor() {
    super();
    this._addHandlerOpenAnimeDetails();
    this._addHandlerShowMoreAnimes();
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data
      .map(function (data, index) {
        return `<li class="comp-anime-preview">

                    <!-- preview of anime in the grid -->
                    <a
                    href="#"
                    class="comp-anime-preview-1 anime-recent-preview-1 anime-preview"
                    data-mal_id="${data.mal_id}"
                    >

                    <!-- box which will contain the image and stuff -->
                    <div
                    class="comp-anime-preview-1-imageBox anime-recent-preview-1-imageBox"
                    >

                    <!-- preview image will be placed here -->
                    <img
                    src="${data.images.webp.large_image_url}"
                    alt="Anime preview image"
                    class="comp-anime-preview-1-imageBox-image anime-recent-preview-1-imageBox-image"
                    />

                    <!-- gradient which will be displayed on hover -->
                    <div
                    class="comp-anime-preview-1-imageBox-imageGradient anime-recent-preview-1-imageBox-imageGradient"
                    ></div>

                    <!-- will contain the rating of anime -->
                    <div
                    class="comp-anime-preview-1-imageBox-rating anime-recent-preview-1-imageBox-rating"
                    >
                    ${data.rating ? data.rating : "?"}
                    </div>

                    <!-- box which will contain the score contents -->
                    <div
                    class="comp-anime-preview-1-imageBox-scoreBox anime-recent-preview-1-imageBox-scoreBox"
                    >

                    <!-- icon for score -->
                    <div
                    class="comp-anime-preview-1-imageBox-scoreBox-iconBox anime-recent-preview-1-imageBox-scoreBox-iconBox"
                    >
                    <ion-icon
                    class="comp-anime-preview-1-imageBox-scoreBox-iconBox-star anime-recent-preview-1-imageBox-scoreBox-iconBox-star"
                    name="star"
                    ></ion-icon>
                    </div>

                    <!-- actual score -->
                    <div
                    class="comp-anime-preview-1-imageBox-scoreBox-score anime-recent-preview-1-imageBox-scoreBox-score"
                    >
                    ${data.score ? data.score : "?"}
                    </div>
                    </div>

                    <!-- <div
                    class="comp-anime-preview-1-imageBox-scoreBox-border anime-recent-preview-1-imageBox-scoreBox-border"
                    ></div> -->
                    </div>

                    <!-- contain the attributes of the preview -->
                    <div
                    class="comp-anime-preview-1-attributes anime-recent-preview-1-attributes"
                    >

                    <!-- type attribute -->
                    <div
                    class="comp-anime-preview-1-attributes-type anime-recent-preview-1-attributes-type"
                    >
                    ${data.type ? data.type : "?"}
                    </div>

                    <!-- bullet -->
                    <div
                    class="comp-anime-preview-1-attributes-bullet anime-recent-preview-1-attributes-bullet"
                    >
                    &#x2022;
                    </div>

                    <!-- year attribute -->
                    <div
                    class="comp-anime-preview-1-attributes-year anime-recent-preview-1-attributes-year"
                    >
                    ${
                      data.aired.prop.from.year
                        ? data.aired.prop.from.year
                        : "?"
                    }
                    </div>

                    <!-- episodes attribute -->
                    <div
                    class="comp-anime-preview-1-attributes-episodes anime-recent-preview-1-attributes-episodes"
                    >
                    ${data.episodes ? data.episodes : "?"} Ep(s)
                    </div>
                    </div>

                    <!-- anime title -->
                    <div
                    class="comp-anime-preview-1-title anime-recent-preview-1-title"
                    >
                    ${data.title_english ? data.title_english : data.title}
                    </div>
                    </a>
                    </li>`;
      })
      .join("");
  }
}

export default new RecentAnimesView();
