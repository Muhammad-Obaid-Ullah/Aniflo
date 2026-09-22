import { AJAX } from "./helpers";
import { API_URL } from "./config";

export const state = {
  slidesData: [],

  recentAnimesData: [],
  airingAnimesData: [],
  upcomingAndTopAnimesData: [],
  upcomingAnimesData: [],
  topAnimesData: [],
  completedAnimesData: [],

  promotionalVideosData: [],
};

// orignal code
// orignal code
// orignal code
// orignal code
// orignal code
// orignal code
export const getRandomAnimeId = async function () {
  try {
    const url = `${API_URL}/random/anime`;

    const data = await AJAX(url);
    const id = data[0].data.mal_id;

    console.log(data);
    return id;
  } catch (err) {
    console.log(err);
  }
};

export const getSlidesData = async function () {
  try {
    const urls = [
      `${API_URL}/anime/31964/full`,
      `${API_URL}/anime/30694/full`,
      `${API_URL}/anime/21/full`,
      `${API_URL}/anime/22319/full`,
    ];

    const data = await AJAX(urls);

    data.forEach((el) => {
      state.slidesData.push(el.data);
    });
  } catch (err) {
    console.log(err);
  }
};

export const getRecentAnimesData = async function () {
  try {
    const url = `${API_URL}/seasons/now?limit=16&sfw=true`;

    const data = await AJAX(url);

    state.recentAnimesData.push(...data[0].data);
  } catch (err) {
    console.log(err);
  }
};

export const getAiringAnimesData = async function () {
  try {
    const url = `${API_URL}/anime?status=airing&limit=16&sfw=true`;

    const data = await AJAX(url);

    state.airingAnimesData.push(...data[0].data);
  } catch (err) {
    console.log(err);
  }
};

export const getUpcomingAndTopAnimesData = async function () {
  try {
    const urls = [
      `${API_URL}/anime?status=upcoming&limit=12&sfw=true`,
      `${API_URL}/top/anime?limit=9&sfw=true`,
    ];

    const data = await AJAX(urls);

    state.upcomingAnimesData.push(...data[0].data);
    state.topAnimesData.push(...data[1].data);

    state.upcomingAndTopAnimesData.push(state.upcomingAnimesData);
    state.upcomingAndTopAnimesData.push(state.topAnimesData);
  } catch (err) {
    console.log(err);
  }
};

export const getcompletedAnimesData = async function () {
  try {
    const url = `${API_URL}/anime?status=complete&limit=16&sfw=true`;

    const data = await AJAX(url);

    state.completedAnimesData.push(...data[0].data);
  } catch (err) {
    console.log(err);
  }
};

export const getPromotionalVideosData = async function () {
  try {
    const url = `${API_URL}/watch/promos`;

    const data = await AJAX(url);

    state.promotionalVideosData.push(...data[0].data.slice(0, 5));
  } catch (err) {
    console.log(err);
  }
};

//together
//together
//together
//together
//together
//together
//together
//together
//together
//together
// export const getSliderData = async function () {
//   try {
//     const urls = [
//       `${API_URL}/anime/31964/full`,
//       `${API_URL}/anime/30694/full`,
//       `${API_URL}/anime/21/full`,
//       `${API_URL}/anime/22319/full`,
//     ];

//     const data = await AJAX(urls);
//     console.log("Slider Data:");
//     console.log(data);
//   } catch (err) {}
// };

// export const getPageContentData = async function () {
//   try {
//     const urls = [
//       `${API_URL}/seasons/now?limit=14sfw=true`,
//       `${API_URL}/anime?status=airing&limit=14&sfw=true`,
//       `${API_URL}/anime?status=upcoming&limit=12&sfw=true`,
//       `${API_URL}/top/anime?limit=9&sfw=true`,
//       `${API_URL}/anime?status=complete&limit=14&sfw=true`,
//       `${API_URL}/watch/promos`,
//     ];

//     const data = await AJAX(urls);

//     console.log("Content Data:");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// separete calls for upcoming and top animes
// separete calls for upcoming and top animes
// separete calls for upcoming and top animes
// separete calls for upcoming and top animes
// separete calls for upcoming and top animes
// separete calls for upcoming and top animes
// export const getUpcomingAnimesData = async function () {
//   try {
//     const url = `${API_URL}/anime?status=upcoming`;

//     const data = await AJAX(url);

//     state.upcomingAnimesData.push(...data[0].data.slice(0, 12));
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const getTopAnimesData = async function () {
//   try {
//     const url = `${API_URL}/top/anime`;

//     const data = await AJAX(url);

//     state.topAnimesData.push(...data[0].data.slice(0, 10));
//   } catch (err) {
//     console.log(err);
//   }
// };
