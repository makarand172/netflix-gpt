import "./TrailerContainer.css";
import VideoBackground from "./VideoBackground";

const TrailerContainer = ({ movie }) => {
  if (!movie) return;
  return (
    <div className="trailer-container">
      <VideoBackground movieId={movie?.id} />
      <MovieOverview
        movieName={movie?.original_title}
        overview={movie?.overview}
      />
    </div>
  );
};

export default TrailerContainer;

const MovieOverview = (props) => {
  const { movieName, overview } = props;
  return (
    <div className="movie-overview-container">
      <div className="moview-overview-content">
        <h1>{movieName}</h1>
        <p className="moview-overview">{overview}</p>
        <button className="play-button">▶ Play</button>
        <button className="info-button"> More Info</button>
      </div>
    </div>
  );
};
