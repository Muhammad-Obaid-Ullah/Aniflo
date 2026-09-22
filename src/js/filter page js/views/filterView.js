import View from "./view";

class FilterView extends View {
  _filterBtn = document.querySelector(".filter-formBox-filterButton");

  // prettier-ignore
  _searchField = document.querySelector(".filter-formBox-entriesBox-entry-search-value");
  // prettier-ignore
  _typeField = document.querySelector(".filter-formBox-entriesBox-entry-type-value");
  // prettier-ignore
  _statusField = document.querySelector(".filter-formBox-entriesBox-entry-status-value")
  // prettier-ignore
  _ratingField = document.querySelector(".filter-formBox-entriesBox-entry-rating-value")

  _startYearField = document.querySelector(".start-year");
  _startMonthField = document.querySelector(".start-month");
  _startDayField = document.querySelector(".start-day");

  _endYearField = document.querySelector(".end-year");
  _endMonthField = document.querySelector(".end-month");
  _endDayField = document.querySelector(".end-day");

  _genreBox = document.querySelector(".filter-formBox-genreBox");

  constructor() {
    super();
    this._addHandlerFilterAnime();
    this._addHandlerSetGenre();
  }

  _getGenres(formData) {
    const selectedGenres = document.querySelectorAll(".selected");

    if (!selectedGenres.length) return;

    selectedGenres.forEach((genre, index) => {
      formData.genres.push(genre.dataset.genre_id);
    });
  }

  _getFormData(formData) {
    if (this._searchField.value) formData.q = this._searchField.value;
    if (this._typeField.value) formData.type = this._typeField.value;
    if (this._statusField.value) formData.status = this._statusField.value;
    if (this._ratingField.value) formData.rating = this._ratingField.value;
    // prettier-ignore
    if (this._startYearField.value) {
        formData.startYear = this._startYearField.value
        formData.startMonth = "01";
        formData.startDay = "01";
    }
    // prettier-ignore
    if (this._startMonthField.value) {
        if(!formData.startYear) formData.startYear = String(new Date().getFullYear());
        formData.startMonth = this._startMonthField.value
        if(!formData.startDay) formData.startDay = "01";
    }
    // prettier-ignore
    if (this._startDayField.value) {
        if(!formData.startYear) formData.startYear = String(new Date().getFullYear());
        if(!formData.startMonth) formData.startMonth = "01";
        formData.startDay = this._startDayField.value
    }

    // prettier-ignore
    if (this._endYearField.value) {
      formData.endYear = this._endYearField.value
      formData.endMonth = "01";
      formData.endDay = "01";
  }
    // prettier-ignore
    if (this._endMonthField.value) {
      if(!formData.endYear) formData.endYear = String(new Date().getFullYear());
      formData.endMonth = this._endMonthField.value
      if(!formData.endDay) formData.endDay = "01";
  }
    // prettier-ignore
    if (this._endDayField.value) {
      if(!formData.endYear) formData.endYear = String(new Date().getFullYear());
      if(!formData.endMonth) formData.endMonth = "01";
      formData.endDay = this._endDayField.value
  }

    this._getGenres(formData);
  }

  _addHandlerFilterAnime() {
    this._filterBtn.addEventListener("click", (e) => {
      const formData = {
        q: null,
        type: null,
        status: null,
        rating: null,
        startYear: null,
        startMonth: null,
        startDay: null,
        endYear: null,
        endMonth: null,
        endDay: null,
        genres: [],
      };

      this._getFormData(formData);

      const currentUrl = window.location.pathname;

      // prettier-ignore
      const newUrl = `${currentUrl}?filter=true${
        formData.q ? `&q=${formData.q}` : ""
      }${
        formData.type ? `&type=${formData.type}` : ""
      }${
        formData.status ? `&status=${formData.status}` : ""
      }${
        formData.rating ? `&rating=${formData.rating}` : ""
      }${
        formData.startYear || formData.startMonth || formData.startDay ? `&start_date=${formData.startYear}-${formData.startMonth}-${formData.startDay}` : ""
      }${
        formData.endYear || formData.endMonth || formData.endDay ? `&end_date=${formData.endYear}-${formData.endMonth}-${formData.endDay}` : ""
      }${
        formData.genres.length ? `&genres=${formData.genres.join(",")}` : ""
      }`;

      if (newUrl === `${currentUrl}?filter=true`) return;

      // console.log(newUrl);

      window.open(newUrl, "_self");
    });
  }

  _addHandlerSetGenre() {
    this._genreBox.addEventListener("click", function (e) {
      if (!e.target.classList.contains("filter-formBox-genreBox-genre")) return;

      e.target.classList.toggle("selected");
    });
  }
}

export default new FilterView();
