const API_KEY = "96af03deebf6400a12a9c9ce252f33b5";
const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies() {
  return fetch(`${BASE_PATH}//movie/now_playing?api-key=${API_KEY}`).then(
    (response) => response.json()
  );
}
