import { useSelector } from "react-redux";
import "./MovieCorouselContainer.css";
import MovieList from "./MovieList";

const MovieCorouselContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  return (
    <div className="movie-corousel-container">
      <MovieList header="New on Netflix" list={nowPlayingMovies} />
      <MovieList header="Top Rated" list={topRatedMovies} />
      <MovieList header="Popular" list={popularMovies} />
      <MovieList header="Up Coming" list={upComingMovies} />
    </div>
  );
};

export default MovieCorouselContainer;
