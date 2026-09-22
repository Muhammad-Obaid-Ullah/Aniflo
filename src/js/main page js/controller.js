import * as model from "./model.js";
import view from "./views/view.js";
import navigationView from "./views/navigationView.js";
import sliderView from "./views/sliderView.js";
import recentAnimesView from "./views/recentAnimesView.js";
import airingAnimesView from "./views/airingAnimesView.js";
import upcomingAndTopAnimesView from "./views/upcomingAndTopAnimesView.js";
import completedAnimesView from "./views/completedAnimesView.js";
import promotionalVideosView from "./views/promotionalVideosView.js";
import upcomingAnimesView from "./views/upcomingAnimesView.js";
import topAnimesView from "./views/topAnimesView.js";

//orignal code
const controlOpenRandomAnime = async function () {
  const id = await model.getRandomAnimeId();

  const url = `/details.html?id=${id}`;
  window.open(url, "_self");
};

const controlSlider = async function () {
  // get slides data
  await model.getSlidesData();

  // render slider with all the slides
  sliderView.render(model.state.slidesData);
};

const controlRecentAnimes = async function () {
  // get recent animes data
  await model.getRecentAnimesData();

  // render recent animes previews
  recentAnimesView.render(model.state.recentAnimesData);

  console.log("recent");
};

const controlAiringAnimes = async function () {
  // get airing animes data
  await model.getAiringAnimesData();

  // render airing animes previews
  airingAnimesView.render(model.state.airingAnimesData);

  console.log("airing");
};

const controlUpcomingAndTopAnimes = async function () {
  // get data for upcoming and top animes
  await model.getUpcomingAndTopAnimesData();

  // render upcoming and top anime
  upcomingAnimesView.render(model.state.upcomingAnimesData);
  topAnimesView.render(model.state.topAnimesData);

  console.log("upcoming and top");
};

const controlCompletedAnimes = async function () {
  // get completed animes data
  await model.getcompletedAnimesData();

  // render completed animes data
  completedAnimesView.render(model.state.completedAnimesData);
};

const controlPromotionalVideos = async function () {
  // get promotional videos data
  await model.getPromotionalVideosData();

  console.log(model.state.promotionalVideosData);
  // render promotional videos
  promotionalVideosView.render(model.state.promotionalVideosData);
};

const init = function () {
  // view.addHandlerScrollToTop();
  navigationView.addHandlerNavigation();
  navigationView.addHandlerOpenRandomAnime(controlOpenRandomAnime);
  sliderView.addHandlerRender(controlSlider);
  recentAnimesView.addHandlerRender(controlRecentAnimes);
  airingAnimesView.addHandlerRender(controlAiringAnimes);
  upcomingAndTopAnimesView.addHandlerRender(controlUpcomingAndTopAnimes);
  completedAnimesView.addHandlerRender(controlCompletedAnimes);
  promotionalVideosView.addHandlerRender(controlPromotionalVideos);
  //-----------------------------
  //-----------------------------
  //-----------------------------
  //-----------------------------
  //-----------------------------
  // controlData();
};

init();
