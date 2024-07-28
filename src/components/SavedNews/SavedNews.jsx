import "./SavedNews.css";
import { useState, useContext } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { IsOpenContext } from "../../contexts/IsOpenContext";

export default function SavedNews({ searchTag, isProfilePage }) {
  const { savedItems } = useContext(IsOpenContext);
  const [visibleCount, setVisibleCount] = useState(3);
  const renderCards = () => {
    return savedItems
      .slice(0, visibleCount)
      .map((item, index) => (
        <NewsCard key={index} item={item} isProfilePage={isProfilePage} />
      ));
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
