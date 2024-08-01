export default function SavedCard({ item, handleDeleteItem }) {
  const iso8601ToFormattedDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  const card = item;
  const handleDeleteClick = () => {
    handleDeleteItem(item._id);
  };

  return (
    <div className="card">
      <img src={card.urlToImage} alt={card.title} className="card__image" />
      <div className="card__info">
        <button
          className="card__delete-btn"
          type="button"
          onClick={handleDeleteClick}
        ></button>
        <p className="card__search-tag">{card.searchTag}</p>
        <p className="card__date">{iso8601ToFormattedDate(card.publishedAt)}</p>
        <h3 className="card__heading">{card.title}</h3>
        <p className="card__text">{card.description}</p>
        <p className="card__footer">{card.name}</p>
      </div>
    </div>
  );
}
