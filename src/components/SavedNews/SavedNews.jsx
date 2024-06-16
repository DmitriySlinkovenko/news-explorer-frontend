import React from "react";
import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";

export default function SavedNews() {
  return (
    <div className="card-section">
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
    </div>
  );
}
