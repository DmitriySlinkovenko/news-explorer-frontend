import { useState } from "react";
import "./NewsCardSection.css";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsSection({ news, searchTag, serverError }) {
  const [visibleCount, setVisibleCount] = useState(3);
  const renderCards = () => {
    return news
      .slice(0, visibleCount)
      .map((item, index) => (
        <NewsCard key={index} item={item} searchTag={searchTag} />
      ));
  };
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };
  return (
    <section className="card-section">
      <h2 className="card-section__heading">Search Results</h2>
      {serverError ? (
        <p className="card-section__failed-message">
          Sorry, something went wrong during the request. There may be a
          connection issue or the server may be down. Please try again later.
        </p>
      ) : (
        <>
          <div className="card__containter">{renderCards()}</div>
          {visibleCount < news.length && (
            <button
              type="button"
              className="card-section__show-more-btn"
              onClick={handleShowMore}
            >
              Show More
            </button>
          )}
        </>
      )}
    </section>
  );
}
