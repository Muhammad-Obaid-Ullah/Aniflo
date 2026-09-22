import slideImage1 from "url:../../../img/Images/slideImage-1.png";
import slideImage2 from "url:../../../img/Images/slideImage-2.png";
import slideImage3 from "url:../../../img/Images/slideImage-3.png";
import slideImage4 from "url:../../../img/Images/slideImage-4.png";

import { View } from "./view.js";

class SliderView extends View {
  _slideImages = [slideImage1, slideImage2, slideImage3, slideImage4];

  _parentElement = document.querySelector(".slider");
  _spinner = this._parentElement.querySelector(".lds-ellipsis");

  _maxSlides = 4;
  _curSlide = 0;
  _btnNext = document.querySelector(".slide-btn-forward");
  _btnPrev = document.querySelector(".slide-btn-previous");

  _slideDotsContainer = document.querySelector(".slide-bullets");
  _slideDots = document.querySelectorAll(".slide-bullet");

  _intervalId = undefined;
  _intervalTime = 6;

  constructor() {
    super();
    this._addHandlerNextSlide();
    this._addHandlerPrevSlide();
    this._addHandlerMoveSlidesWithDots();
    this._autoSlidesMovement();
    this._addHandlerOpenSlideDetails();
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);

    const slides = document.querySelectorAll(".slide");

    this._gotoSlide(0, slides);
    this._addHandlerPauseSlidesOnHover(slides);
    this._addHandlerResumeSlidesOnLeave(slides);
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data
      .map(function (data, index) {
        return `<div class="slide slide-${
          index + 1
        }" data-mal_id="${data.mal_id}">
        <div class="slide-info-box slide-info-box-${index + 1}">
          <h2 class="slide-heading slide-heading-${
            index + 1
          }">${data.title_english}</h2>
          <div class="slide-imp-attributes slide-imp-attributes-${index + 1}">
            <div class="rating">${data.rating}</div>

            <div class="season">
              <ion-icon
                class="slide-icon slide-icon-calendar"
                name="calendar-outline"
              ></ion-icon>
              <span>${data.season
                .charAt(0)
                .toUpperCase()}${data.season.slice(1)}, ${data.aired.prop.from.year}</span>
            </div>

            <div class="score">
              <ion-icon
                class="slide-icon slide-icon-star"
                name="star"
              ></ion-icon>
              <span>${data.score} by ${data.scored_by} reviews</span>
            </div>
          </div>

          <div class="slide-description slide-description-${index + 1}">
            <div class="slide-description-text slide-description-text-${
              index + 1
            }">
              ${data.synopsis}
            </div>
            <div
              class="slide-description-attributes slide-description-attributes-${
                index + 1
              }"
            >
              <div class="type">
                <span class="bullet">&#x2022;</span>Type: ${data.type}
              </div>
              <div class="episodes">
                <span class="bullet">&#x2022;</span>Episodes: ${data.episodes}
              </div>
              <div class="status">
                <span class="bullet">&#x2022;</span>Status: ${data.status}
              </div>
              <div class="studio">
                <span class="bullet">&#x2022;</span>Studio: ${
                  data.studios[0].name
                }
              </div>
            </div>
          </div>

          <div class="slide-btn-box slide-btn-box-${index + 1}">
            <button class="slide-btn slide-btn-detail">
              <span>Details</span>
              <ion-icon
                class="slide-icon slide-icon-arrow"
                name="chevron-forward-outline"
              ></ion-icon>
            </button>
            <a
              href="https://9anime.gs/watch/dragon-ball-super.7jly/ep-1"
              class="comp-btn-primary slide-btn slide-btn-watch"
            >
              <span>Watch</span>
              <ion-icon
                class="slide-icon slide-icon-watch"
                name="play-outline"
              ></ion-icon>
            </a>
          </div>
        </div>

        <div class="slide-image-box slide-image-box-${index + 1}">
          <img
            src="${this._slideImages[index]}"
            alt="Anime character"
            class="slide-image slide-image-${index + 1}"
          />
        </div>
      </div>
`;
      }, this)
      .join("");
  }

  _activeSlideDot(curSlide) {
    this._slideDots.forEach((slide, index) => {
      slide.classList.remove("activeSlideDot");
    });

    document
      .querySelector(`.slide-bullet[data-slide="${curSlide}"]`)
      .classList.add("activeSlideDot");
  }

  _gotoSlide(curSlide, slides, fast = false) {
    slides.forEach((slide, index) => {
      slide.style.transform = `translate(${
        100 * (index - curSlide) - 50 + (index - curSlide) * 20
      }%, -50%)`;
      slide.style.transition = `transform ${fast ? ".7s" : "1s"} ease-out`;
    });

    this._activeSlideDot(curSlide);
  }

  _nextSlide() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;

    let fast;

    if (this._curSlide === this._maxSlides - 1) {
      this._curSlide = 0;
      fast = true;
    } else {
      this._curSlide++;
    }

    this._gotoSlide(this._curSlide, slides, fast);
  }

  _prevSlide() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;

    let fast;

    if (this._curSlide === 0) {
      this._curSlide = this._maxSlides - 1;
      fast = true;
    } else {
      this._curSlide--;
    }

    this._gotoSlide(this._curSlide, slides, fast);
  }

  _addHandlerNextSlide() {
    this._btnNext.addEventListener("click", this._nextSlide.bind(this));
  }

  _addHandlerPrevSlide() {
    this._btnPrev.addEventListener("click", this._prevSlide.bind(this));
  }

  _moveSlidesWithDots(e) {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;

    if (!e.target.classList.contains("slide-bullet")) return;

    let fast;
    const prevSlide = this._curSlide;

    this._curSlide = Number(e.target.dataset.slide);

    if (
      (prevSlide === 0 && this._curSlide === this._maxSlides - 1) ||
      (prevSlide === this._maxSlides - 1 && this._curSlide === 0)
    ) {
      fast = true;
    }

    this._gotoSlide(this._curSlide, slides, fast);
  }

  _addHandlerMoveSlidesWithDots() {
    this._slideDotsContainer.addEventListener(
      "click",
      this._moveSlidesWithDots.bind(this)
    );
  }

  _autoSlidesMovement() {
    this._intervalId = setInterval(() => {
      this._nextSlide();
    }, this._intervalTime * 1000);
  }

  _clearIntervalFromSlides() {
    clearInterval(this._intervalId);
  }

  _addHandlerPauseSlidesOnHover(slides) {
    slides.forEach((slide, index) => {
      slide.addEventListener(
        "mouseenter",
        this._clearIntervalFromSlides.bind(this)
      );
    });
  }

  _addHandlerResumeSlidesOnLeave(slides) {
    slides.forEach((slide, index) => {
      slide.addEventListener("mouseleave", this._autoSlidesMovement.bind(this));
    });
  }

  _addHandlerOpenSlideDetails() {
    this._parentElement.addEventListener("click", function (e) {
      if (!e.target.closest(".slide-btn-detail")) return;
      e.preventDefault();

      const id = e.target.closest(".slide").dataset.mal_id;

      const url = `/details.html?id=${id}`;
      window.open(url, "_self");
    });
  }
}

export default new SliderView();
