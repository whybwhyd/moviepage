const API_KEY = 'api_key=284209be9689b7bc72600c5c499ce6d3';
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL = BASE_URL+'/movie/popular?language=en-US&'+API_KEY;
const IMG_URL = 'http://image.tmdb.org/t/p/w500';
const searchURL= BASE_URL + '/search/movie?'+API_KEY;

const main =document.getElementById('main');
const form =document.getElementById('form');
const search =document.getElementById('search');

getMovies(API_URL);

function getMovies(url) {
  fetch(url).then(res => res.json()).then(data => {
      console.log(data.results)
      showMovies(data.results);
    
  })
}

function showMovies(data) {
  main.innerHTML='';
  data.forEach(movie => {
    const{title, poster_path, vote_average, overview, id}= movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie-card');
    movieEl.innerHTML= `
          <a href="#"><img src="${IMG_URL+poster_path}" alt="${title}" onclick="alert('영화 id: ${id}')"></a>
          <h3 class="card-title">${title}</h3>
          <p class="${getColor(vote_average)}">${vote_average.toFixed(1)}</p>
          <p class="overview">${overview}</p>
    `

    main.appendChild(movieEl)
  })
}

function getColor(vote) {
  if(vote>= 8){
    return 'green'
  }else if(vote>= 5){
    return "orange"
  }else{
    return "red"
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if(searchTerm) {
    getMovies(searchURL+'&query='+searchTerm)
  }else{
    getMovies(API_URL)
  }
})
