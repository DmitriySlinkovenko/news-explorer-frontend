import React from "react";
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
      <a className="footer__triple-ten-btn">TripleTen</a>
      <a href="" className="footer__github-icon">
        <img src={github} alt="Github icon" className="footer__github" />
      </a>
      <a href="" className="footer__facebook-icon">
        <img src={fb} alt="Facebook icon" className="footer__fb" />
      </a>
    </footer>
  );
}
