import { useDispatch } from "react-redux";
import { ApplicationConstants, tmdbApiOptions } from "../utils/appConstants";
import { addNowPlayingMovies } from "../store/slices/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      ApplicationConstants.NOW_PLAYING_MOVIES_API_URL,
      tmdbApiOptions
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
