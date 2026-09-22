import { View } from "./view";

import sideImage from "../../../img/Images/anime-side-right-15.png";

class PromotionalVideosView extends View {
  _parentElement = document.querySelector(".promotionalVideos");
  _spinner = this._parentElement.querySelector(".lds-ellipsis");

  _fullScreenGradient = document.querySelector(".fullScreenGradient");
  _iframe = document.querySelector(".promotionalVideos-iframeBox-iframe");

  constructor() {
    super();
    this._addHandlerPlayVideo();
    this._addHandlerStopVideo();
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _generateMarkup() {
    return ` <div class="promotionalVideos-content">
            <div class="promotionalVideos-heading">Promotional Videos</div>

            <div class="promotionalVideos-container">
            ${this._data
              .map(function (data, index) {
                return `  <div
                        class="promotionalVideos-container-box promotionalVideos-container-box-${
                          index + 1
                        }"
                        data-embed_url="${data.trailer.embed_url}"
                        >
                        <div
                        class="promotionalVideos-container-box-thumbnailBox promotionalVideos-container-box-${
                          index + 1
                        }-thumbnailBox"
                        >

                        <img
                        src="${data.trailer.images.large_image_url}"
                        alt="Video Thumbnail"
                        class="promotionalVideos-container-box-thumbnailBox-thumbnail promotionalVideos-container-box-${
                          index + 1
                        }-thumbnailBox-thumbnail"
                        />
  
                        <ion-icon
                        class="promotionalVideos-container-box-thumbnailBox-iconPlay promotionalVideos-container-box-${
                          index + 1
                        }-thumbnailBox-iconPlay"
                        name="play-circle-outline"
                        ></ion-icon>
  
                        <div
                        class="promotionalVideos-container-box-thumbnailBox-thumbnailGradient promotionalVideos-container-box-${
                          index + 1
                        }-thumbnailBox-thumbnailGradient"
                        ></div>
                        </div>
                        <div
                        class="promotionalVideos-container-box-title promotionalVideos-container-box-${
                          index + 1
                        }-title"
                        >
                        ${data.entry.title}
                        </div>
                        </div>`;
              })
              .join("")}
                </div>
                </div>
                
                <div
                class="promotionalVideos-sideImageBox promotionalVideos-sideImageBox-left"
                >
                <img
                src="${sideImage}"
                alt="Anime Character"
                class="promotionalVideos-sideImageBox-image"
                />
                </div>`;
  }

  _toggle() {
    this._fullScreenGradient.classList.toggle("hidden");
  }

  _showPlayer(embedUrl) {
    this._iframe.src = embedUrl;
    this._toggle();
  }

  _hidePlayer() {
    this._iframe.src = "";
    this._toggle();
  }

  _playVideoCallBack(e) {
    if (!e.target.closest(".promotionalVideos-container-box-thumbnailBox"))
      return;

    const embedUrl = `${
      e.target.closest(".promotionalVideos-container-box").dataset.embed_url
    }&rel=0&mute=1`;

    this._showPlayer(embedUrl);
  }

  _addHandlerPlayVideo() {
    this._parentElement.addEventListener(
      "click",
      this._playVideoCallBack.bind(this)
    );
  }

  _addHandlerStopVideo() {
    this._fullScreenGradient.addEventListener(
      "click",
      this._hidePlayer.bind(this)
    );
  }
}

export default new PromotionalVideosView();
