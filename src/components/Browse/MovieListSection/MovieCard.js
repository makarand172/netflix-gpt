import { ApplicationConstants } from "../../../utils/appConstants";
import "./MovieCard.css";

const MovieCard = ({ details }) => {
  if (!details.poster_path) return;
  return (
    <img
      className="movie-card-image"
      src={ApplicationConstants.POSTER_IMAGE_URL + details.poster_path}
      alt="moview-image"
    />
  );
};

export default MovieCard;
