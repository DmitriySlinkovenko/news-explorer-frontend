import "./SavedNews.css";
import { useState, useContext } from "react";
import { IsOpenContext } from "../../contexts/IsOpenContext";
import SavedCard from "../SavedCard/SavedCard";

export default function SavedNews({ handleDeleteItem }) {
  const { savedItems } = useContext(IsOpenContext);
  const [visibleCount, setVisibleCount] = useState(3);

  const renderCards = () => {
    return savedItems
      .slice(0, visibleCount)
      .map((item, index) => (
        <SavedCard
          key={index}
          item={item}
          handleDeleteItem={handleDeleteItem}
        />
      ));
  };
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };
  return (
    <div className="saved-news">
      <div className="saved-news__container">{renderCards()}</div>
      {visibleCount < savedItems.length && (
        <button
          type="button"
          className="card-section__show-more-btn"
          onClick={handleShowMore}
        >
          Show More
        </button>
      )}
    </div>
  );
}
