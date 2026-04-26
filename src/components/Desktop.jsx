import Icon from "./Icon";
import skillsImg from "../assets/skills.webp";
import userImg from "../assets/user.webp";
import compImg from "../assets/comp.webp";
import mailImg from "../assets/mail.webp";

function Desktop({ setActiveWindow }) {
  return (
    <div className="desktop">
      <Icon
        title="Skills"
        img={skillsImg}
        onClick={() => setActiveWindow("skills")}
      />
      <Icon
        title="About"
        img={userImg}
        onClick={() => setActiveWindow("about")}
      />
      <Icon
        title="Projects"
        img={compImg}
        onClick={() => setActiveWindow("projects")}
      />
      <Icon
        title="Contact"
        img={mailImg}
        onClick={() => setActiveWindow("contact")}
      />
    </div>
  );
}

export default Desktop;
