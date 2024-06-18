import React from "react";
import "./NewsCard.css";
import cardImage from "../../assets/image_08.jpg";

export default function NewsCard({
  isProfilePage = true,
  searchTag = "Nature",
}) {
  return !isProfilePage ? (
    <div className="card">
      <img src={cardImage} alt="" className="card__image" />
      <div className="card__info">
        <button className="card__bookmark-btn"></button>
        <p className="card__date">November 4, 2020</p>
        <h3 className="card__heading">
          Everyone Needs a Special 'Sit Spot' in Nature
        </h3>
        <p className="card__text">
          Ever since I read Richard Louv's influential book, "Last Child in the
        </p>
        <p className="card__footer">treehugger</p>
      </div>
    </div>
  ) : (
    <div className="card">
      <img src={cardImage} alt="" className="card__image" />
      <div className="card__info">
        <button className="card__delete-btn"></button>
        <p className="card__search-tag">{searchTag}</p>
        <p className="card__date">November 4, 2020</p>
        <h3 className="card__heading">
          Everyone Needs a Special 'Sit Spot' in Nature
        </h3>
        <p className="card__text">
          Ever since I read Richard Louv's influential book, "Last Child in the
        </p>
        <p className="card__footer">treehugger</p>
      </div>
    </div>
  );
}
