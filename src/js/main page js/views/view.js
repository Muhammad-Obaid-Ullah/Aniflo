export class View {
  _data;

  _clear() {
    this._parentElement.removeChild(this._spinner);

    if (this._bottomLine) this._parentElement.removeChild(this._bottomLine);
  }

  addHandlerScrollToTop() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }

  addHandlerRender(handler) {
    const observer = new IntersectionObserver(
      function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) return;

        handler();
        observer.unobserve(entry.target);
      },
      { root: null, rootMargin: "0%", threshold: 0 }
    );

    observer.observe(this._parentElement);
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this._clear();
    this._container.insertAdjacentHTML("beforeend", markup);
  }

  _addHandlerOpenAnimeDetails() {
    this._container.addEventListener("click", function (e) {
      if (!e.target.closest(".anime-preview")) return;
      e.preventDefault();

      const id = e.target.closest(".anime-preview").dataset.mal_id;
      const url = `/details.html?id=${id}`;

      window.open(url, "_self");
    });
  }

  _addHandlerShowMoreAnimes() {
    this._parentElement.addEventListener("click", function (e) {
      if (!e.target.classList.contains("comp-anime-btnBox-btn")) return;

      const category = e.target.dataset.category;

      const url = `/filter.html?category=${category}`;
      window.open(url, "_self");
    });
  }
}

export default new View();
