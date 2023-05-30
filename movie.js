const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODQyMDliZTk2ODliN2JjNzI2MDBjNWM0OTljZTZkMyIsInN1YiI6IjY0NzA4OTVjMTNhMzIwMDExNmI2OTVkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AV-O0oDiPcF0xAmY70nzPy5uiWwiH8jJ4jiy-8OCFFc'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));