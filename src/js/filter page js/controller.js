import * as model from "./model.js";
import filterView from "./views/filterView.js";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView";

const controlResults = async function () {
  const urlParams = resultsView.getURLQueryParameters();

  const keyWord = urlParams.get("keyword");
  const category = urlParams.get("category");
  const filter = urlParams.get("filter");

  const page = urlParams.get("page");

  if (!category && !filter && !keyWord) return;

  await model.getResults(category, filter, keyWord, page, urlParams);

  resultsView.render(model.state.results.data);

  console.log(model.state.results.pagination);
  if (
    model.state.results.pagination.current_page === 1 &&
    !model.state.results.pagination.has_next_page
  )
    return;

  console.log("go");
  paginationView.renderPagination(model.state.results.pagination);
};

const init = function () {
  resultsView.addHandlerRenderResults(controlResults);
};

init();
