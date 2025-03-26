let filter = "";

const filterInput = document.querySelector("#search-input");
const recommendedWrapper = document.querySelector(".bookmarked-cards-wrapper");


function getBookMarkDataFormLocalStorage() {
  let bookmarks = getLocalStorageData("bookmarks", [])

  return MockData.filter((item) => bookmarks.includes(item.id));
}

function save(id) {
  updateDataLocalStorage(
    "bookmarks",
    (bookmarks) => addOrRemoveElementFormArray(bookmarks, id),
    []
  )

  renderFilteredDatas();
}

function renderFilteredDatas() {
    const bookData = getBookMarkDataFormLocalStorage();

  if (!filter) {
    recommendedWrapper.innerHTML = bookData.map(createCard).join(" ");

    return;
  }

  const filteredMockData = bookData.filter(({ title }) =>
    title.toLowerCase().includes(filter.toLowerCase())
  );

  recommendedWrapper.innerHTML = filteredMockData.map(createCard).join(" ");
}

function checkIsSaved(id) {
  const bookmarks = getLocalStorageData("bookmarks", [])

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
                    <div data-title="${item.title}"  onClick="save(${item.id})"   class="movie-card-overlay-icon-wrapper"><img src="${saveImageUrl}" alt="save-icon"></div>
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
  const bookMarkData = getBookMarkDataFormLocalStorage();

  recommendedWrapper.innerHTML = bookMarkData.map(createCard).join(" ");
});

filterInput.addEventListener("input", (e) => {
  const filteredValue = e.target.value;
  filter = filteredValue;

  renderFilteredDatas();
});
