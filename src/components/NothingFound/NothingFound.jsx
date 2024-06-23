import "./NothingFound.css";
import nf from "../../assets/not-found_v1.svg";

export default function NothingFound() {
  return (
    <div className="nothing-found">
      <img
        src={nf}
        alt="Nothing found image"
        className="nothing-found__image"
      />
      <h3 className="nothing-found__title">Nothing found</h3>
      <p className="nothing-found__subtitle">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}
