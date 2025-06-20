import { useEffect, useState } from "react";
import { tmdbApiOptions } from "../utils/appConstants";

const useGetTrailer = (movieId) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const getVideos = async (movieId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      tmdbApiOptions
    );
    const videos = await response?.json();

    const filterData = videos?.results?.filter(
      (item) => item.type.toLowerCase() === "trailer"
    );
    const trailer = filterData.length
      ? filterData?.[Math.floor(Math.random() * filterData.length)]
      : videos.results?.[Math.floor(Math.random() * videos.results)];

    setTrailerKey(trailer.key);
  };
  useEffect(() => {
    getVideos(movieId);
  }, [movieId]);
  return trailerKey;
};

export default useGetTrailer;
