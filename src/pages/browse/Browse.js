import { useSelector } from "react-redux";
import MovieCorouselContainer from "../../components/Browse/MovieCorouselContainer";
import TrailerContainer from "../../components/Browse/TrailerContainer";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import "./browse.css";
import { useEffect, useState } from "react";

const Browse = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  useNowPlayingMovies();
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  useEffect(() => {
    if (!movies || !movies.length) return;

    const updateRandomIndex = () => {
      const index = Math.floor(Math.random() * movies.length);
      setRandomIndex(index);
    };

    let interval = setInterval(updateRandomIndex, 80000);

    return () => {
      clearInterval(interval);
    };
  }, [movies]);
  return (
    <div className="browse-container">
      <TrailerContainer movie={movies?.[randomIndex]} />
      {/* <MovieCorouselContainer /> */}
    </div>
  );
};

export default Browse;
