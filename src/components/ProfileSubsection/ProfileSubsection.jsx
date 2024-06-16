import React from "react";
import "./ProfileSubsection.css";

export default function ProfileSubsection({
  currentUser = "Dmitriy",
  savedArticles = 5,
  searchWord = ["Nature", "YellowStone", "Gary", "Open"],
}) {
  return (
    <div className="saved-page">
      <p className="saved-page__subheading">Saved Articles</p>
      <h2 className="saved-page__title">
        {currentUser}, you have {savedArticles} saved articles
      </h2>
      <p className="saved-page__subtitle">
        By keywords: {searchWord[0]}, {searchWord[1]} and{" "}
        {searchWord.length - 2} more
      </p>
    </div>
  );
}
