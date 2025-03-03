const key = 'c612b11a1774468ca1b13c4108c0a07b';
const cardContainer = document.querySelector(".card-container");
const categorySelect = document.getElementById("myCategories");
const searchInput = document.getElementById("myInput");

let allArticles = [];

async function fetchNews(category = "general") {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;

    if (category !== "all") {
        url += `&category=${category}`;
    }

    try {
        const res = await fetch(url);
        const data = await res.json();
        allArticles = data.articles || []; 
        displayNews(allArticles);
    } catch (error) {
        console.error("Xəbər yüklənən zaman xəta baş verdi!!!", error);
    }
}

function displayNews(articles) {
    cardContainer.innerHTML = articles.map(article => 
        `
        <div class="card-item">
            <div class="img-wrapper">
                <img src="${article.urlToImage || 'https://via.placeholder.com/150'}" alt="News Image">
            </div>
            <h3 class="title">${article.title}</h3>
            <h4 class="article">${article.description || "Məlumat yoxdur"}</h4>
            <p class="date">${article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : "Tarix yoxdur"}</p>
        </div>
        `
    ).join("");
}


categorySelect.addEventListener("change", () => {
    fetchNews(categorySelect.value);
});

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredNews = allArticles.filter(article =>
        article.title.toLowerCase().includes(searchTerm) ||
        (article.description && article.description.toLowerCase().includes(searchTerm))
    );
    displayNews(filteredNews);
});


fetchNews();
