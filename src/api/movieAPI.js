import axios from "axios";

export const getMovies = async () => {
  const response = await axios(
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
  );
  return response.data.data.movies;
};

export const getMovie = async (id) => {
  const response = await axios(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
  );
  return response.data.data.movie;
};
