import { useRef } from "react";
import "./GptSearch.css";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationConstants, tmdbApiOptions } from "../../utils/appConstants";
import { addGptSuggestedMovies } from "../../store/slices/gptSlice";
import MovieList from "../../components/Browse/MovieListSection/MovieList";

const GptSearch = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { movieNames, moviesList } = useSelector((store) => store.gpt);

  const getOpenAiSearchResults = async (searchInput) => {
    const response = await window.puter.ai.chat(
      `Act as a movie recommendation system and suggest some movies for the query ${searchInput}. only give me the names of 5 movies, comma separated like the example result given ahead. Example Result: MovieName1, movieName2, movieName3, moviename4.....`,
      {
        model: "gpt-4.1",
      }
    );
    if (response) {
      const moviesSuggested = response?.message?.content?.split(",");
      const moviesList = moviesSuggested.map((movie) => getTmdbMovies(movie));
      const movies = await Promise.all(moviesList);
      dispatch(
        addGptSuggestedMovies({
          movieNames: moviesSuggested,
          moviesList: movies,
        })
      );
    }
  };

  const getTmdbMovies = async (movie) => {
    const data = await fetch(
      ApplicationConstants.GET_MOVIES_ON_QUERY +
        movie +
        "&include_adult=false&language=en-US&page=1",
      tmdbApiOptions
    );
    const json = await data.json();
    return json?.results || [];
  };

  const handleSearch = () => {
    const gptSearchValue = inputRef.current.value;
    getOpenAiSearchResults(gptSearchValue);
  };

  return (
    <div className="gpt-search-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="gpt-form-container"
      >
        <input
          ref={inputRef}
          id="gpt-search-input"
          placeholder="Search for the movies..."
        ></input>
        <button type="submit" id="gpt-search-button">
          Search
        </button>
      </form>
      <div className="movie-list">
        {movieNames &&
          moviesList &&
          movieNames.map((movie, index) => (
            <MovieList key={movie} header={movie} list={moviesList[index]} />
          ))}
      </div>
    </div>
  );
};

export default GptSearch;
