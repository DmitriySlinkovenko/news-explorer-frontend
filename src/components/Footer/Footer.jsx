import "./Footer.css";
import fb from "../../assets/fb-icon.svg";
import github from "../../assets/github-icon.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__heading">Developed by Dmitriy Slinkovenko</p>
      <a href="/" className="footer__home-btn">
        Home
      </a>
      <a
        href="https://tripleten.com/"
        className="footer__triple-ten-btn"
        target="_blank"
      >
        TripleTen
      </a>
      <a
        href="https://github.com/DmitriySlinkovenko"
        className="footer__github-icon"
        target="_blank"
      >
        <img src={github} alt="Github icon" className="footer__github" />
      </a>
      <a
        href="https://www.facebook.com/dmitriy.slinkovenko/"
        className="footer__facebook-icon"
        target="_blank"
      >
        <img src={fb} alt="Facebook icon" className="footer__fb" />
      </a>
    </footer>
  );
}
