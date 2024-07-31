import "./SavedNews.css";
import { useState, useContext } from "react";
import { IsOpenContext } from "../../contexts/IsOpenContext";
import SavedCard from "../SavedCard/SavedCard";

export default function SavedNews({ searchTag }) {
  const { savedItems } = useContext(IsOpenContext);
  console.log(savedItems);
  const [visibleCount, setVisibleCount] = useState(3);
  console.log(savedItems);
  const renderCards = () => {
    return savedItems
      .slice(0, visibleCount)
      .map((item, index) => <SavedCard key={index} item={item} />);
  };
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };
  return (
    <div className="saved-news">
      <div className="saved-news__containter">{renderCards()}</div>
    </div>
  );
}
