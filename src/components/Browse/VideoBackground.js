import "./VideoBackground.css";
import useGetTrailer from "../../hooks/useGetTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerKey = useGetTrailer(movieId);
  return (
    <>
      {trailerKey ? (
        <iframe
          className="trailer-video"
          src={`https://www.youtube.com/embed/${trailerKey}?&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="trailer-img"></div>
      )}
    </>
  );
};

export default VideoBackground;
