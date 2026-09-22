import * as model from "./model.js";
import view from "./views/view.js";

const controlAnimeDetails = async function () {
  try {
    const id = view._getQueryParameters();

    if (!id) throw new Error("Page does not exist!!!!!");

    await model.getAnimeDetails(id);

    console.log(model.state.animeDetails);

    view.render(model.state.animeDetails);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  view._addHandlerRenderAnimeDetails(controlAnimeDetails);
};

init();
