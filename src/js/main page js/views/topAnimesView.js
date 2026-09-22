import { View } from "./view";

class TopAnimesView extends View {
  _parentElement = document.querySelector(".animes-top");
  _container = document.querySelector(".anime-top-flex");
  _spinner = this._parentElement.querySelector(".lds-ellipsis");

  constructor() {
    super();
    this._addHandlerOpenAnimeDetails();
    this._addHandlerShowMoreAnimes();
  }

  _generateMarkup() {
    return this._data
      .map(function (data, index) {
        return `<li class="comp-anime-preview">
            <a
             href="#"
             data-mal_id="${data.mal_id}"
             class="comp-anime-preview-2 anime-top-preview-2 anime-preview ${
               index <= 2 ? `top${index + 1}-box` : ""
             }">
            
            <!-- NUMBER OF THE ANIME -->
            <div    
            class="comp-anime-preview-2-numberBox anime-top-preview-2-numberBox ${
              index <= 2
                ? `top${index + 1}-number top${index + 1}-backgroundColor`
                : ""
            }"
            >
            ${index + 1}
            </div>

            <!-- IMAGE BOX FOR THE PREVIEW IMAGE -->
            <div
            class="comp-anime-preview-2-imageBox anime-top-preview-2-imageBox"
            >
            
            <!-- PREVIEW IMAGE -->
            <img
            src="${data.images.webp.image_url}"
            alt="Preview Image"
            class="comp-anime-preview-2-imageBox-image anime-top-preview-2-imageBox-image"
            />

            <!-- GRADIENT -->
            <div
            class="comp-anime-preview-2-imageBox-imageGradient anime-top-preview-2-imageBox-imageGradient"
            ></div>
            </div>

            <!-- DESCRIPTION BOX WHICH WILL CONTAIN INFORMATION ABOUT THE ANIME -->
            <div
            class="comp-anime-preview-2-description anime-top-preview-2-description ${
              index <= 2 ? `top${index + 1}-rightLine` : ""
            }"
            >
            
            <!-- ANIME TITLE -->
            <div
            class="comp-anime-preview-2-description-title anime-top-preview-2-description-title"
            >
            ${data.title_english ? data.title_english : data.title}
            </div>

            <!-- ANIME RATING -->
            <div
            class="comp-anime-preview-2-description-rating anime-preview-2-description-rating"
            >
            ${data.rating ? data.rating : "?"}
            </div>

            <!-- ATTRIBUTES -->
            <div
            class="comp-anime-preview-2-description-attributes anime-top-preview-2-description-attributes"
            >
            
            <!-- TYPE -->
            <div
            class="comp-anime-preview-2-description-attributes-type anime-top-preview-2-description-attributes-type"
            >
            ${data.type ? data.type : "?"}
            </div>

            <!-- BULLET -->
            <div
            class="comp-anime-preview-2-description-attributes-bullet anime-top-preview-2-description-attributes-bullet"
            >
            &#x2022;
            </div>

            <!-- YEAR -->
            <div
            class="comp-anime-preview-2-description-attributes-year anime-top-preview-2-description-attributes-year"
            >
            ${data.aired.prop.from.year ? data.aired.prop.from.year : "?"}
            </div>

            <!-- BULLET -->
            <div
            class="comp-anime-preview-2-description-attributes-bullet anime-top-preview-2-description-attributes-bullet"
            >
            &#x2022;
            </div>
      
             <!-- EPISODES -->
            <div
            class="comp-anime-preview-2-description-attributes-episodes anime-top-preview-2-description-attributes-episodes"
            >
            ${data.episodes ? data.episodes : "?"} Ep(s)
            </div>
          
            <!-- SCORE-BOX -->
            <div
            class="comp-anime-preview-2-description-attributes-scoreBox anime-top-preview-2-description-attributes-scoreBox"
            >
            
            <!-- ICON-BOX -->
            <div
            class="comp-anime-preview-2-description-attributes-scoreBox-iconBox anime-top-preview-2-description-attributes-scoreBox-iconBox"
            >
            <ion-icon
            class="comp-anime-preview-2-description-attributes-scoreBox-iconBox-star anime-top-preview-2-description-attributes-scoreBox-iconBox-star"
            name="star"
            ></ion-icon>

            <ion-icon
            class="comp-anime-preview-2-description-attributes-scoreBox-iconBox-starBack anime-top-preview-2-description-attributes-scoreBox-iconBox-starBack"
            name="star"
            ></ion-icon>
            </div>
            
            <!-- SCORE -->
            <div
            class="comp-anime-preview-2-description-attributes-scoreBox-score anime-top-preview-2-description-attributes-scoreBox-score"
            >
            ${data.score ? data.score : "?"}
            </div>
            </div>
            </div>
            </div>
            </a>
            </li>`;
      })
      .join("");
  }
}

export default new TopAnimesView();
