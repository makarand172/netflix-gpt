import { useSelector } from "react-redux";
import TrailerContainer from "../../components/Browse/TrailerSection/TrailerContainer";
import useGetMovies from "../../hooks/useGetMovies";
import "./browse.css";
import { useEffect, useState } from "react";
import MovieCorouselContainer from "../../components/Browse/MovieListSection/MovieCorouselContainer";
import GptSearch from "../gptSearch/GptSearch";

const Browse = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  useGetMovies();
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const gptToggle = useSelector((store) => store.gpt.gptToggle);
  useEffect(() => {
    if (!movies || !movies.length) return;

    const updateRandomIndex = () => {
      const index = Math.floor(Math.random() * movies.length);
      setRandomIndex(index);
    };

    let interval = setInterval(updateRandomIndex, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [movies]);
  return (
    <div className="browse-container">
      {gptToggle ? (
        <GptSearch />
      ) : (
        <>
          <TrailerContainer movie={movies?.[randomIndex]} />
          <MovieCorouselContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
