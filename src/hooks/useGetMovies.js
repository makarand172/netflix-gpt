import { useDispatch } from "react-redux";
import { ApplicationConstants, tmdbApiOptions } from "../utils/appConstants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../store/slices/movieSlice";
import { useEffect } from "react";

const useGetMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      ApplicationConstants.NOW_PLAYING_MOVIES_API_URL,
      tmdbApiOptions
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  const getPopularMovies = async () => {
    const data = await fetch(
      ApplicationConstants.POPULAR_MOVIES_API_URL,
      tmdbApiOptions
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  const getTopRatedMovies = async () => {
    const data = await fetch(
      ApplicationConstants.TOP_RATED_MOVIES_API_URL,
      tmdbApiOptions
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  const getUpcomingMovies = async () => {
    const data = await fetch(
      ApplicationConstants.UPCOMING_MOVIES_API_URL,
      tmdbApiOptions
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
    // eslint-disable-next-line
  }, []);
};

export default useGetMovies;
