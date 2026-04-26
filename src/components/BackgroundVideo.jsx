import bgVideo from "../assets/video.mp4";
import bgPoster from "../assets/bg.webp";

function BackgroundVideo() {
  return (
    <video
      className="bg-video"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster={bgPoster}
      aria-hidden="true"
    >
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
}

export default BackgroundVideo;
