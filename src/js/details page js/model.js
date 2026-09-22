import { AJAX } from "./helpers";
import { API_URL } from "./config";

export const state = {
  animeDetails: null,
};

export const getAnimeDetails = async function (id) {
  try {
    const url = `${API_URL}/anime/${id}/full`;

    const data = await AJAX(url);

    state.animeDetails = data[0].data;
  } catch (err) {
    console.log(err);
  }
};
