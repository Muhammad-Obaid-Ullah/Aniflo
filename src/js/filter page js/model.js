import { AJAX } from "./helpers";
import { getKeyWordUrl } from "./helpers";
import { getCategoryUrl } from "./helpers";
import { getFilterUrl } from "./helpers";
import { API_URL } from "./config";

export const state = {
  results: null,
};

export const getResults = async function (
  category,
  filter,
  keyWord,
  page,
  urlParams
) {
  let url;

  if (keyWord) url = getKeyWordUrl(keyWord, page);
  if (category) url = getCategoryUrl(category, page);
  if (filter) url = getFilterUrl(urlParams);

  console.log(url);

  const data = await AJAX(url);

  state.results = data[0];
};
