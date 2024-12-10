import "../styles/Global.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h5>About Me</h5>
        <p>
          I am a passionate frontend developer with a love for creating engaging
          and efficient user experiences.
        </p>
      </div>
      <div className="footer-section">
        <h5>About This Site</h5>
        <p>
          This website is a package of apps: <br/>1. weather 2. timer 3. expense tracker 4. note 5. todo list<br/>This website is Built with React.
        </p>
      </div>
      <div className="footer-section">
        <h5>Contact</h5>
        <ul className="contact-list">
          <li>
            <FaLinkedin />{" "}
            <a
              href="https://www.linkedin.com/in/amirali-sharifiasl-911a46287/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <FaEnvelope />{" "}
            <a href="mailto:sharifiasldev@gmail.com">Gmail</a>
          </li>
          <li>
            <FaGithub />{" "}
            <a
              href="https://github.com/Burserk84"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
