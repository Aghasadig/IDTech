let filter = "";

const filterInput = document.querySelector("#search-input");
const trendingWrapper = document.querySelector(".trending-cards-wrapper");
const recommendedWrapper = document.querySelector(
  ".recommended-section-cards-wrapper"
);

function save(id) {
  updateDataLocalStorage(
    "bookmarks",
    (bookmarks) => addOrRemoveElementFormArray(bookmarks, id),
    []
  );

  renderFilteredDatas();
}

function renderFilteredDatas() {
  if (!filter) {
    recommendedWrapper.innerHTML = MockData.map(createCard).join(" ");
    trendingWrapper.innerHTML = MockData.slice(0, 3).map(createCard).join(" ");

    return;
  }

  const filteredMockData = MockData.filter(({ title }) =>
    title.toLowerCase().includes(filter.toLowerCase())
  );

  recommendedWrapper.innerHTML = filteredMockData.map(createCard).join(" ");
  trendingWrapper.innerHTML = MockData.slice(0, 3).map(createCard).join(" ");
}

function checkIsSaved(id) {
  let bookmarks = getLocalStorageData("bookmarks", []);

  return bookmarks.some((item) => item === id);
}

function createCard(item) {
  const isSaved = checkIsSaved(item.id);

  const saveImageUrl = isSaved
    ? "/images/Group 27 (1).png"
    : "/images/Group 27.png";

  if (item.isTrending) {
    return `
            <div class="movie-card">
                <img src="${item.image}" alt="film-banner" class="movie-card-banner">
                <div class="movie-card-overlay">
                    <div data-title="${item.title}"  onClick="save(${item.id})"   class="movie-card-overlay-icon-wrapper"><img src="${saveImageUrl}" alt="save-icon"></div>
                    <div class="movie-card-footer">
                        <p>${item.year}</p> ● <p><img src="/images/Path.png" alt="icon" class="movie-icon"> ${item.category}</p> ● <p>${item.rating}</p>
                    </div>
                    <h2>${item.title}</h2>
                </div>
            </div>
        `;
  } else {
    return `
            <div class="movie-card">
                <img src="${item.image}" alt="film-banner" class="movie-card-banner">
                <div class="movie-card-overlay">
                    <div onClick="save(${item.id})"  class="movie-card-overlay-icon-wrapper"><img src="${saveImageUrl}" alt="save-icon"></div>
                    <div class="movie-card-footer">
                        <p>${item.year}</p> ● <p><img src="/images/Path.png" alt="icon" class="movie-icon"> ${item.category}</p> ● <p>${item.rating}</p>
                    </div>
                    <h2>${item.title}</h2>
                </div>
            </div>
        `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let datas = [...MockData];

  trendingWrapper.innerHTML = datas.slice(0, 3).map(createCard).join(" ");

  recommendedWrapper.innerHTML = datas.map(createCard).join(" ");
});

filterInput.addEventListener("input", (e) => {
  const filteredValue = e.target.value;
  filter = filteredValue;

  renderFilteredDatas();
});
