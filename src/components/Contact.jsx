function Contact() {
  return (
    <div className="contact-container">
      <section className="contact-left">
        <p className="contact-status">
          Available for projects & collaborations
        </p>

        <a href="mailto:dknsakr@gmail.com">dknsakr@gmail.com</a>
        <a
          href="https://github.com/Krinz-ctrl"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/dev-kansakar-300b652b4/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.youtube.com/@Dev_kansakar"
          target="_blank"
          rel="noreferrer"
        >
          YouTube
        </a>
      </section>

      <a className="resume-button" href="/resume.pdf" download>
        Download Resume
      </a>
    </div>
  );
}

export default Contact;
