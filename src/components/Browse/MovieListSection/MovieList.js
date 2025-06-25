import "./MovieList.css";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { header, list } = props;
  if (!list.length) return;
  return (
    <div className="movie-list-container">
      <h3>{header ?? ""}</h3>
      <div className="movie-list-card-section">
        {list?.map((moviewDetails) => (
          <>
            {moviewDetails.poster_path && (
              <div className="movie-card-wrapper" key={moviewDetails.id}>
                <MovieCard details={moviewDetails} />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
