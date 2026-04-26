import { useState } from "react";
import Desktop from "./components/Desktop";
import Dock from "./components/Dock";
import Window from "./components/Window";
import Clock from "./components/Clock";
import Contact from "./components/Contact";
import BackgroundVideo from "./components/BackgroundVideo";
import devImage from "./assets/dev.png";
import "./App.css";

function App() {
  const [activeWindow, setActiveWindow] = useState(null);

  return (
    <>
      <BackgroundVideo />
      <Desktop setActiveWindow={setActiveWindow} />
      <Dock />
      <Clock />

      <Window
        title="Skills"
        isOpen={activeWindow === "skills"}
        onClose={() => setActiveWindow(null)}
      />

      <Window
        title="About"
        isOpen={activeWindow === "about"}
        onClose={() => setActiveWindow(null)}
      >
        <div className="about-me">
          <div className="about-text">
            <p>
              I am a Computer Science student and developer who enjoys building
              real, interactive projects that go beyond basic tutorials. My
              focus is on creating clean, modern user experiences using
              technologies like React, JavaScript, and Node.js.
            </p>

            <p>
              I like learning by building, whether it is developing a
              pixel-style portfolio OS, working on AI-based projects, or
              experimenting with full-stack applications. I am especially
              interested in combining design with functionality to create
              products that feel intuitive and engaging.
            </p>

            <p>
              Currently, I am improving my skills in web development, system
              design, and problem solving, while actively participating in
              hackathons and building projects that reflect real-world use
              cases.
            </p>
          </div>

          <img className="about-dev-image" src={devImage} alt="Developer" />
        </div>
      </Window>

      <Window
        title="Projects"
        isOpen={activeWindow === "projects"}
        onClose={() => setActiveWindow(null)}
      />

      <Window
        title="Contact"
        isOpen={activeWindow === "contact"}
        onClose={() => setActiveWindow(null)}
      >
        <Contact />
      </Window>
    </>
  );
}

export default App;
