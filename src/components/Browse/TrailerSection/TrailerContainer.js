import { useState } from "react";
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
  const [viewMore, setViewMore] = useState(false);

  const maxLength = 150;
  const isLong = overview?.length > maxLength;
  const displayedText = viewMore
    ? overview
    : overview.slice(0, maxLength) + (isLong ? "..." : "");

  return (
    <div className="movie-overview-container">
      <div className="moview-overview-content">
        <h1>{movieName}</h1>
        <div className="overview-section">
          <p className="moview-overview">
            {displayedText}
            {isLong ? (
              <span
                className="view-more-toggle"
                onClick={() => {
                  setViewMore(!viewMore);
                }}
              >
                {viewMore ? "View less" : "View More"}
              </span>
            ) : null}
          </p>
        </div>
        <button className="play-button">▶ Play</button>
        <button className="info-button"> More Info</button>
      </div>
    </div>
  );
};
