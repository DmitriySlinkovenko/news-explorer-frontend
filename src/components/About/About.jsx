import "./About.css";
import author from "../../assets/photo_2024-04-29_11-33-59.jpg";

export default function About() {
  return (
    <section className="about">
      <img src={author} alt="Author Picture" className="about__image" />
      <div className="about__text">
        <h2 className="about__title">About the author</h2>
        <p className="about__paragraph">
          My name is Dmitriy Slinkovenko and I am a full-stack software
          developer. I got my education at TripleTen Software Engineering
          bootcamp, during which I developed a deep understanding and practiced
          HTML5, CSS, and Javascript. I am proficient in Node.js, React.js,
          Express.js and MongoDB. Currently looking for a job, remote or on-site
          located in New York.
        </p>
      </div>
    </section>
  );
}
