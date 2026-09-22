class View {
  _data;

  _parentElement = document.querySelector(".details");
  _borderTop = this._parentElement.querySelector(".details-pageBorder-top");
  _borderBottom = this._parentElement.querySelector(
    ".details-pageBorder-bottom"
  );
  _spinner = this._parentElement.querySelector(".lds-ellipsis");
  _container = document.querySelector(".details-container");

  _getQueryParameters() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    const id = params.get("id");

    return id;
  }

  _addHandlerRenderAnimeDetails(handler) {
    window.addEventListener("load", handler);
  }

  _clear() {
    this._parentElement.removeChild(this._spinner);
    this._borderTop.classList.remove("top-border-dark");
    this._borderBottom.classList.remove("bottom-border-dark");
  }

  render(data) {
    this._data = data;

    const markup = this._generateMarkup();

    this._clear();
    this._generateBackground();
    this._container.insertAdjacentHTML("afterbegin", markup);
  }

  _generateBackground() {
    const markup = `<div class="details-backgroundImage">
                    <div class="details-backgroundImage-blur"></div>
                    </div>`;

    this._parentElement.insertAdjacentHTML("afterbegin", markup);

    this._parentElement.querySelector(
      ".details-backgroundImage"
    ).style.backgroundImage = `linear-gradient(
      to right,
      rgba(20, 20, 20, 0.8),
      rgba(20, 20, 20, 0.8)
    ), url(${this._data.images.webp.large_image_url})`;
  }

  _generateMarkup() {
    return `    <!-- MAIN CONTENT OF THE DETAILS SECTION -->
                <div class="details-content">

                <!-- LEFT SIDE OF THE CONTENT -->
                <div class="details-content-left">

                <!-- ATTRIBUTES BOX WHICH WILL CONTAIN ALL THE ATTRIBUTES OF THE ANIME -->
                <div class="details-content-left-attributesBox">

                <!-- IMAGE OF THE ANIME -->
                <div class="details-content-left-attributesBox-imageBoxContainer">
                <div class="details-content-left-attributesBox-imageBox">
                <img
                src="${this._data.images.webp.large_image_url}"
                alt="Anime image"
                class="details-content-left-attributesBox-imageBox-image"
                />
                </div>
                </div>

                <!-- THESE ARE THE MAIN ATTRIBUTES OF THE ANIME -->
                <div class="details-content-left-attributesBox-attributes">
            
                <!-- IT WILL TELL THE ADDRESS OF THE ANIME I.E: FROM HOME PAGE TO ANIME -->
                <div
                class="details-content-left-attributesBox-attributes-address"
                >
              
                <!-- LINK WHICH WIL POINT BACK TO THE HOME PAGE-->
                <a
                href="/index.html"
                class="details-content-left-attributesBox-attributes-address-link"
                >Home</a
                >

                <!-- BULLET BETWEEN THE TWO LINKS -->
                <div
                class="details-content-left-attributesBox-attributes-address-bullet"
                >
                &#x2022;
                </div>

                <!-- LINK WHICH WILL POINT BACK TO THE ANIME -->
                <a
                href="#"
                class="details-content-left-attributesBox-attributes-address-link"
                >${
                  this._data.title_english
                    ? this._data.title_english
                    : this._data.title
                }</a
                >
                </div>

                <!-- TITLE OF THE ANIME -->
                <h1 class="details-content-left-attributesBox-attributes-title">
                ${
                  this._data.title_english
                    ? this._data.title_english
                    : this._data.title
                }
                </h1>

                <!-- THIS BOX WILL SET THE LAYUT OF THE ATTRIBUTES -->
                <div class="details-content-left-attributesBox-attributes-Box">
                <!-- THIS BOX WILL CONTAIN THE RATING, TYPE AND DURATION OF THE ANIME -->
                <div
                class="details-content-left-attributesBox-attributes-Box-rating_typeAndDuration"
                >

                <!-- RATING OF THE ANIME -->
                <div
                class="details-content-left-attributesBox-attributes-Box-rating_typeAndDuration-rating"
                >
                ${this._data.rating ? this._data.rating : "rating unknown"}
                </div>

                <!-- THIS IS ANOTHER BOX WHICH WILL CONTAIN TYPE AND DURATION OF THE ANIME -->
                <div
                class="details-content-left-attributesBox-attributes-Box-rating_typeAndDuration-typeAndDuration"
                >
                
                <!-- TYPE OF THE ANIME -->
                <div
                class="details-content-left-attributesBox-attributes-Box-rating_typeAndDuration-typeAndDuration-type"
                >
                ${this._data.type ? this._data.type : "type unknown"}
                </div>

                <!-- BULLET WHICH WILL SEPARATE TYPE AND DURATION -->
                <div
                class="details-content-left-attributesBox-attributes-Box-rating_typeAndDuration-typeAndDuration-bullet"
                >
                &#x2022;
                </div>

                <!-- DURATION OF THE ANIME -->
                <div
                class="details-content-left-attributesBox-attributes-Box-rating_typeAndDuration-typeAndDuration-duration"
                >
                ${
                  !this._data.duration === "unknown"
                    ? this._data.duration
                    : "duration unknown"
                }
                </div>
                </div>
                </div>

                <!-- THIS IS A GRID INSIDE THE BOX -->
                <div
                class="details-content-left-attributesBox-attributes-Box-grid"
                >
                
                <!-- EPISODES OF THE ANIME -->
                <div
                class="details-content-left-attributesBox-attributes-Box-grid-episodes"
                >
                <span
                class="details-content-left-attributesBox-attributes-Box-grid-episodes-heading"
                >&#x2022; Episodes:</span
                >
                <span
                class="details-content-left-attributesBox-attributes-Box-grid-episodes-text"
                >${this._data.episodes ? this._data.episodes : "?"} Ep(s)</span
                >
                </div>

                <!-- TIME OF START AND END DATE -->
                <div
                class="details-content-left-attributesBox-attributes-Box-grid-releaseDate"
                >
                <span
                class="details-content-left-attributesBox-attributes-Box-grid-releaseDate-heading"
                >&#x2022; Aired:</span
                >
                <span
                class="details-content-left-attributesBox-attributes-Box-grid-releaseDate-text"
                >${
                  !this._data.aired.string
                    ? this._data.aired.string
                    : "not known yet"
                }</span
                >
                </div>

                <!-- CURRENT STATUS OF THE ANIME -->
                <div
                class="details-content-left-attributesBox-attributes-Box-grid-status"
                >
                <span
                class="details-content-left-attributesBox-attributes-Box-grid-status-heading"
                >&#x2022; Status:
                </span>
                <span
                class="details-content-left-attributesBox-attributes-Box-grid-status-text"
                >${this._data.status ? this._data.status : "unknown"}</span
                >
                </div>

                <!-- SCORE OF THE ANIME -->
                <div
                class="details-content-left-attributesBox-attributes-Box-grid-score"
                >
                <span
                class="details-content-left-attributesBox-attributes-Box-grid-score-heading"
                >&#x2022; Score: </span
                ><span
                class="details-content-left-attributesBox-attributes-Box-grid-score-text"
                >${
                  this._data.score
                    ? `${this._data.score} by ${
                        this._data.scored_by ? this._data.scored_by : "?"
                      } reviews`
                    : "not known yet"
                }</span
                >
                </div>
                </div>
                </div>
                </div>
                </div>

                <!-- SYPNOSIS OF THE ANIME -->
                <div class="details-content-left-sypnosis">
                <h2 class="details-content-left-sypnosis-heading">Sypnosis</h2>

                <p class="details-content-left-sypnosis-text">${
                  this._data.synopsis ? this._data.synopsis : "No Synopsis Yet"
                }</p>
                </div>
                </div>

                <!-- RIGHT SIDE OF THE ANIME DETAILS -->
                <div class="details-content-right">
                <div class="details-content-right-trailerBox">
                ${
                  this._data.trailer.embed_url
                    ? `<iframe
                       src="${this._data.trailer.embed_url}&mute=1&autoplay=1&rel=0"
                       frameborder="0"
                       class="details-content-right-trailerBox-trailer"
                       ></iframe>`
                    : "No Preview Available"
                }
                </div>

                <div class="details-content-right-studio">
                <span class="details-content-right-studio-bullet">&#x2022;</span>
                <span class="details-content-right-studio-heading">Studios:</span>
                <span class="details-content-right-studio-text"
                >${
                  this?._data.studios[0]?.name
                    ? this?._data.studios[0]?.name
                    : "Unknown"
                }</span
                >
                </div>

                <div class="details-content-right-producers">
                <span class="details-content-right-producers-bullet"
                >&#x2022;</span
                >
                <span class="details-content-right-producers-heading"
                >Producers:</span
                >
                <span class="details-content-right-producers-text"
                >${
                  this._data.producers.length
                    ? this._data.producers
                        .map((data, index) => {
                          return `${data.name}`;
                        })
                        .join(", &nbsp;")
                    : "Unknown"
                }</span
                >
                </div>

                <div class="details-content-right-genre">
                <span class="details-content-right-genre-bullet">&#x2022;</span>
                <span class="details-content-right-genre-heading">Genre:</span>
                <span class="details-content-right-genre-text"
                >${
                  this._data.genres.length
                    ? this._data.genres
                        .map((data, index) => {
                          return `${data.name}`;
                        })
                        .join(", &nbsp;")
                    : "Unknown"
                }</span
                >
                </div>
                </div>
                </div>`;
  }
}

export default new View();
