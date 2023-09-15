// api.js
import axios from "axios";

const API_KEY =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=b40e51e01a66b69f7f49914c1f6e2bca"; // Replace with your TMDB API key
const BASE_URL = "https://api.themoviedb.org/3/movie/top_rated";

export const fetchTopRatedMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch top-rated movies");
  }
};
