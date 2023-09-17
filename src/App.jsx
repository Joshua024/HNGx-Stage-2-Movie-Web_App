import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MoviePage from './pages/MoviePage';

function App() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const storedMovie = localStorage.getItem("Movie");

    try {
      const parsedMovie = JSON.parse(storedMovie);
      setMovie(parsedMovie);
    } catch (error) {
      console.error("Error parsing movie data:", error);
    }
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        {/* Pass the movie data as a prop to the MoviePage component */}
        <Route path='/movies/:movie_id' element={<MoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;
