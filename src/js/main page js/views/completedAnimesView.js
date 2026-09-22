import { View } from "./view";

class CompletedAnimesView extends View {
  _parentElement = document.querySelector(".animes-completed");
  _container = document.querySelector(".anime-completed-grid");
  _spinner = this._parentElement.querySelector(".lds-ellipsis");
  _bottomLine = this._parentElement.querySelector(
    ".animes-completed-bottomLine"
  );

  constructor() {
    super();
    this._addHandlerOpenAnimeDetails();
    this._addHandlerShowMoreAnimes();
  }

  _generateMarkup() {
    return this._data
      .map(function (data, index) {
        return `    <li class="comp-anime-preview">
                            <!-- preview of anime in the grid -->
                            <a
                            href="#"
                            class="comp-anime-preview-1 anime-completed-preview-1 anime-preview"
                            data-mal_id="${data.mal_id}"
                            >

                            <!-- box which will contain the image and stuff -->
                            <div
                            class="comp-anime-preview-1-imageBox anime-completed-preview-1-imageBox"
                            >

                            <!-- preview image will be placed here -->
                            <img
                            src="${data.images.webp.large_image_url}"
                            alt="Anime preview image"
                            class="comp-anime-preview-1-imageBox-image anime-completed-preview-1-imageBox-image"
                            />
    
                            <!-- gradient which will be displayed on hover -->
                            <div
                            class="comp-anime-preview-1-imageBox-imageGradient anime-completed-preview-1-imageBox-imageGradient"
                            ></div>
    
                            <!-- will contain the rating of anime -->
                            <div
                            class="comp-anime-preview-1-imageBox-rating anime-completed-preview-1-imageBox-rating"
                            >
                            ${data.rating ? data.rating : "?"}
                            </div>
    
                            <!-- box which will contain the score contents -->
                            <div
                            class="comp-anime-preview-1-imageBox-scoreBox anime-completed-preview-1-imageBox-scoreBox"
                            >

                            <!-- icon for score -->
                            <div
                            class="comp-anime-preview-1-imageBox-scoreBox-iconBox anime-completed-preview-1-imageBox-scoreBox-iconBox"
                            >
                            <ion-icon
                            class="comp-anime-preview-1-imageBox-scoreBox-iconBox-star anime-completed-preview-1-imageBox-scoreBox-iconBox-star"
                            name="star"
                            ></ion-icon>
                            </div>

                            <!-- actual score -->
                            <div
                            class="comp-anime-preview-1-imageBox-scoreBox-score anime-completed-preview-1-imageBox-scoreBox-score"
                            >
                            ${data.score ? data.score : "?"}
                            </div>
                            </div>
    
                            <!-- <div
                            class="comp-anime-preview-1-imageBox-scoreBox-border anime-completed-preview-1-imageBox-scoreBox-border"
                            ></div> -->
                            </div>
    
                            <!-- contain the attributes of the preview -->
                            <div
                            class="comp-anime-preview-1-attributes anime-completed-preview-1-attributes"
                            >

                            <!-- type attribute -->
                            <div
                            class="comp-anime-preview-1-attributes-type anime-completed-preview-1-attributes-type"
                            >
                            ${data.type ? data.type : "?"}
                            </div>

                            <!-- bullet -->
                            <div
                            class="comp-anime-preview-1-attributes-bullet anime-completed-preview-1-attributes-bullet"
                            >
                            &#x2022;
                            </div>

                            <!-- year attribute -->
                            <div
                            class="comp-anime-preview-1-attributes-year anime-completed-preview-1-attributes-year"
                            >
                            ${
                              data.aired.prop.from.year
                                ? data.aired.prop.from.year
                                : "?"
                            }
                            </div>

                            <!-- episodes attribute -->
                            <div
                            class="comp-anime-preview-1-attributes-episodes anime-completed-preview-1-attributes-episodes"
                            >
                            ${data.episodes ? data.episodes : "?"} Ep(s)
                            </div>
                            </div>
    
                            <!-- anime title -->
                            <div
                            class="comp-anime-preview-1-title anime-completed-preview-1-title"
                            >
                            ${
                              data.title_english
                                ? data.title_english
                                : data.title
                            }
                            </div>
                            </a>
                            </li>`;
      })
      .join("");
  }
}

export default new CompletedAnimesView();
