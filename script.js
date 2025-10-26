const movies = [
  {
    title: "Homem-Aranha: Sem Volta Para Casa",
    rating: 8.5,
    image: "https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg"
  },
  {
    title: "Super Mario Bros, o Filme",
    rating: 7.8,
    image: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
  },
  {
    title: "Guardiões da Galáxia Vol. 3",
    rating: 8.2,
    image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
  },
  {
    title: "Batman",
    rating: 7.6,
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
  }
];

const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Função para exibir filmes
function displayMovies(list) {
  movieGrid.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>⭐ ${movie.rating}</p>
      </div>
    `;
    movieGrid.appendChild(card);
  });
}

// Mostrar todos os filmes ao carregar
displayMovies(movies);

// Função de busca
searchButton.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(query)
  );
  displayMovies(filtered);
});
