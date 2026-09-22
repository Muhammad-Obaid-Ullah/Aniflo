import View from "./view";

class PaginationView extends View {
  _parentElement = document.querySelector(".filter-paginationBox");
  _container = document.querySelector(".filter-paginationBox-pagination");

  _paginationData;

  constructor() {
    super();

    this._addHandlerChangePage();
  }

  _clear() {
    this._container.innerHTML = "";
  }

  renderPagination(paginationData) {
    this._paginationData = paginationData;

    const markup = this._generateMarkup();

    this._clear();
    this._container.insertAdjacentHTML("afterbegin", markup);
  }

  _generateMarkup() {
    this._container.classList.add("pagination-padding-bottom");

    const prevAndNextBtns = `<li class="filter-paginationBox-pagination-btnBox">
                             <button
                             class="filter-paginationBox-pagination-btnBox-btn filter-paginationBox-pagination-btnBox-btn-prev ${
                               this._paginationData.current_page === 1
                                 ? "disable-btn"
                                 : ""
                             } pagination-item"
                             >Previous</button>
                             </li>

                             <li class="filter-paginationBox-pagination-btnBox">
                             <button
                             class="filter-paginationBox-pagination-btnBox-btn filter-paginationBox-pagination-btnBox-btn-next ${
                               this._paginationData.current_page ===
                               this._paginationData.last_visible_page
                                 ? "disable-btn"
                                 : ""
                             } pagination-item"
                             >Next</button>
                             </li>`;

    const firstAndLastBtns = `<li class="filter-paginationBox-pagination-btnBox">
                              <button
                              class="filter-paginationBox-pagination-btnBox-btn filter-paginationBox-pagination-btnBox-btn-first ${
                                this._paginationData.current_page === 1
                                  ? "disable-btn"
                                  : ""
                              } pagination-item"
                              >First</button>
                              </li>

                              <li class="filter-paginationBox-pagination-btnBox">
                              <button
                              class="filter-paginationBox-pagination-btnBox-btn filter-paginationBox-pagination-btnBox-btn-last ${
                                this._paginationData.current_page ===
                                this._paginationData.last_visible_page
                                  ? "disable-btn"
                                  : ""
                              } pagination-item"
                              >Last</button>
                              </li>`;

    let pageNumbers = [];

    let paginationMarkup;

    // If there are only 7 pages
    if (this._paginationData.last_visible_page <= 5) {
      for (let i = 1; i <= this._paginationData.last_visible_page; i++) {
        const li = `<li class="filter-paginationBox-pagination-pageNumber pagination-item ${
          i === this._paginationData.current_page ? "selectedPage" : ""
        }">${i}</li>`;
        pageNumbers.push(li);
      }

      paginationMarkup = `${prevAndNextBtns}
                          ${pageNumbers.join("")}
                          ${firstAndLastBtns}`;
    }
    // If there are more than 7 pages and the current page is less than totalpages - 7
    else if (
      this._paginationData.last_visible_page > 5 &&
      this._paginationData.current_page <
        this._paginationData.last_visible_page - 5
    ) {
      // If the current page is 3rd or less
      if (this._paginationData.current_page <= 3) {
        for (let i = 1; i <= 5; i++) {
          const li = `<li class="filter-paginationBox-pagination-pageNumber pagination-item ${
            i === this._paginationData.current_page ? "selectedPage" : ""
          }">${i}</li>`;
          pageNumbers.push(li);
        }
      }
      // If the current page is greater than 3
      else if (this._paginationData.current_page > 3) {
        const beforePage = this._paginationData.current_page - 2;
        const afterPage = this._paginationData.current_page + 2;

        for (let i = beforePage; i <= afterPage; i++) {
          const li = `<li class="filter-paginationBox-pagination-pageNumber pagination-item ${
            i === this._paginationData.current_page ? "selectedPage" : ""
          }">${i}</li>`;
          pageNumbers.push(li);
        }
      }

      paginationMarkup = `${prevAndNextBtns}
                          ${pageNumbers.join("")}
                          <li class="filter-paginationBox-pagination-dots">.....</li>
                          <li class="filter-paginationBox-pagination-pageNumber pagination-item">${
                            this._paginationData.last_visible_page
                          }</li>
                          ${firstAndLastBtns}`;
    }
    // If there are more than 7 pages and the current page is greater than or equal to totalpages - 7
    else if (
      this._paginationData.last_visible_page > 5 &&
      this._paginationData.current_page >=
        this._paginationData.last_visible_page - 5
    ) {
      for (
        let i = this._paginationData.last_visible_page - 5;
        i <= this._paginationData.last_visible_page;
        i++
      ) {
        const li = `<li class="filter-paginationBox-pagination-pageNumber pagination-item ${
          i === this._paginationData.current_page ? "selectedPage" : ""
        }">${i}</li>`;
        pageNumbers.push(li);
      }

      paginationMarkup = `${prevAndNextBtns}
      ${pageNumbers.join("")}
      ${firstAndLastBtns}`;
    }

    return paginationMarkup;
  }

  _addHandlerChangePage() {
    this._parentElement.addEventListener("click", (e) => {
      if (!e.target.classList.contains("pagination-item")) return;

      let pageNumber;

      if (e.target.textContent === "Next") {
        if (
          this._paginationData.current_page + 1 >
          this._paginationData.last_visible_page
        )
          return;

        pageNumber = this._paginationData.current_page + 1;
      } else if (e.target.textContent === "Previous") {
        if (this._paginationData.current_page - 1 < 1) return;

        pageNumber = this._paginationData.current_page - 1;
      } else if (e.target.textContent === "Last") {
        if (
          this._paginationData.current_page ===
          this._paginationData.last_visible_page
        )
          return;

        pageNumber = this._paginationData.last_visible_page;
      } else if (e.target.textContent === "First") {
        if (this._paginationData.current_page === 1) return;

        pageNumber = 1;
      } else {
        if (+e.target.textContent === this._paginationData.current_page) return;
        pageNumber = e.target.textContent;
      }

      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("page", pageNumber);

      const currentUrl = window.location.pathname;
      const newUrl = currentUrl + "?" + urlParams.toString();

      console.log(newUrl);
      window.open(newUrl, "_self");
    });
  }
}

export default new PaginationView();
