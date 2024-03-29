import React, { useEffect, useState } from "react";
import "./Card.css";
import Apple from "../../assets/Apple.png";
import Imdb from "../../assets/Imdb.png";
import { useNavigate } from "react-router-dom"; 
import { AiFillHeart } from "react-icons/ai";

const Card = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]); // State to store movie data

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=b40e51e01a66b69f7f49914c1f6e2bca",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setMovies(data.results.slice(0, 10));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []);

  const findSingleMovie = (id) => {
    if (id) {
      let movie = movies.find((movie) => movie.id === id);
      localStorage.setItem("Movie", JSON.stringify(movie));
      navigate(`/movies/${id}`);
      console.log(movie);
    }
  };

  // Rest of component code that map and display the movie data
  return (
    <div className="flex w-full flex-wrap justify-evenly gap-x-4 gap-y-40 ">
      {movies.map((movie) => (
        <div
          id="card"
          onClick={() => findSingleMovie(movie.id)}
          key={movie.id}
          className="relative mb-[20px] h-[513px] w-[250px] cursor-pointer text-left shadow-lg shadow-gray-200"
          data-testid={`movie-card-${movie.title}`}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
            className="relative h-[370px] w-full"
            data-testid={`movie-poster-${movie.title}`}
          />

          <button className="absolute right-[10px] top-[10px] h-[50px] w-[50px] rounded-full bg-[#F3F4F680] ps-[5px] text-center text-white hover:text-red-500">
            <AiFillHeart className="h-[40px] w-[40px] text-white duration-[0.5s]  hover:text-red-500" />
          </button>
          <h4
            className="pt-3 font-bold text-gray-400"
            data-testid={`movie-release-date-${movie.release_date}`}
          >
            {movie.release_date} USA
          </h4>
          <h2
            className="pt-3 font-bold"
            data-testid={`movie-title-${movie.title}`}
          >
            {movie.title}
          </h2>
          <div className="flex pt-3">
            <img src={Imdb} alt="" className="h-6 pe-3" />
            <span>{movie.vote_average}/10</span>
            <img src={Apple} alt="" className="ms-auto h-6 pe-3" />
            <span className="">{Math.round(movie.vote_average * 100)}%</span>
          </div>
          <h4 className="pt-3 font-medium text-gray-400">Action, Adventure</h4>
        </div>
      ))}
    </div>
  );
};

export default Card;
