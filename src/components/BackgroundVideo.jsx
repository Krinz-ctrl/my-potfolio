import bgVideo from "../assets/video.mp4";

function BackgroundVideo() {
  return (
    <video className="bg-video" autoPlay loop muted playsInline>
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
}

export default BackgroundVideo;
