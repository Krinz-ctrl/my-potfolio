import insta from "../assets/Instagram.webp";
import yt from "../assets/Youtube.webp";
import github from "../assets/Github.webp";
import linkedin from "../assets/Linkedin.webp";

function Dock() {
  return (
    <div className="dock">
      <a href="https://www.instagram.com/_dev_knsakr_/" target="_blank">
        <img src={insta} />
      </a>
      <a href="https://www.youtube.com/@Dev_kansakar" target="_blank">
        <img src={yt} />
      </a>
      <a href="https://github.com/Krinz-ctrl" target="_blank">
        <img src={github} />
      </a>
      <a
        href="https://www.linkedin.com/in/dev-kansakar-300b652b4/"
        target="_blank"
      >
        <img src={linkedin} />
      </a>
    </div>
  );
}

export default Dock;
