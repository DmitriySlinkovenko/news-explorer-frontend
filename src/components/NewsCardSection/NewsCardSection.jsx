import React from "react";
import "./NewsCardSection.css";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsSection() {
  return (
    <div className="card-section">
      <h2 className="card-section__heading">Search Results</h2>
      <div className="card__containter">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <button className="card-section__show-more-btn">Show More</button>
    </div>
  );
}
