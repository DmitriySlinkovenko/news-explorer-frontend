import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <img src="" alt="" className="about__image" />
      <div className="about__text">
        <h2 className="about__title">About the author</h2>
        <p className="about__paragraph">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with TripleTen, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}
