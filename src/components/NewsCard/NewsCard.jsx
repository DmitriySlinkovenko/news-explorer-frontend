import React from "react";
import "./NewsCard.css";
import placeholder from "../../assets/No-Image-Placeholder.svg.png";

export default function NewsCard({
  isProfilePage = false,
  item,
  searchTag,
  isLoggedIn = false,
}) {
  const iso8601ToFormattedDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return !isProfilePage ? (
    <div className="card">
      <img
        src={item.urlToImage || placeholder}
        alt={item.title}
        className="card__image"
      />

      <div className="card__info">
        <button
          type="button"
          className="card__bookmark-btn"
          disabled={isLoggedIn ? false : true}
        ></button>
        <p className="card__bookmark-validation">Sign in to save articles</p>
        <p className="card__date">{iso8601ToFormattedDate(item.publishedAt)}</p>

        <h3 className="card__heading">{item.title}</h3>
        <p className="card__text">{item.description}</p>
        <p className="card__footer">{item.source.name}</p>
      </div>
    </div>
  ) : (
    <div className="card">
      <img
        src={item.urlToImage || placeholder}
        alt={item.title}
        className="card__image"
      />
      <div className="card__info">
        <button className="card__delete-btn" type="button"></button>
        <p className="card__search-tag">{searchTag}</p>
        <p className="card__date">{iso8601ToFormattedDate(item.publishedAt)}</p>
        <h3 className="card__heading">{item.title}</h3>
        <p className="card__text">{item.description}</p>
        <p className="card__footer">{item.source.name}</p>
      </div>
    </div>
  );
}
