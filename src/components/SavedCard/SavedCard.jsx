import React from "react";

export default function SavedCard({ item }) {
  const iso8601ToFormattedDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  const card = item;
  const newCard = item.item;

  return (
    <div className="card">
      <img
        src={card.urlToImage || newCard.urlToImage}
        alt={card.title || newCard.title}
        className="card__image"
      />
      <div className="card__info">
        <button className="card__delete-btn" type="button"></button>
        <p className="card__search-tag">
          {card.searchTag || newCard.searchTag}
        </p>
        <p className="card__date">
          {iso8601ToFormattedDate(card.publishedAt || newCard.publishedAt)}
        </p>
        <h3 className="card__heading">{card.title || newCard.title}</h3>
        <p className="card__text">{card.description || newCard.description}</p>
        <p className="card__footer">{card.name || newCard.name}</p>
      </div>
    </div>
  );
}
