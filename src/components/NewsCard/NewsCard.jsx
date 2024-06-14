import React from "react";
import "./NewsCard.css";
import cardImage from "../../assets/image_08.jpg";

export default function NewsCard() {
  return (
    <div className="card">
      <img src={cardImage} alt="" className="card__image" />
      <p className="card__date">November 4, 2020</p>
      <h3 className="card__heading">
        Everyone Needs a Special 'Sit Spot' in Nature
      </h3>
      <p className="card__text">
        Ever since I read Richard Louv's influential book, "Last Child in the
        Woods," the idea of having a special "sit spot" has stuck with me. This
        advice, which Louv attributes to nature educator Jon Young, is for both
        adults and children to find...
      </p>
      <p className="card__footer">treehugger</p>
    </div>
  );
}
