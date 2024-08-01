import { useContext, useState } from "react";
import "./ProfileSubsection.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { IsOpenContext } from "../../contexts/IsOpenContext";

export default function ProfileSubsection() {
  const currentUser = useContext(CurrentUserContext);
  const { savedItems } = useContext(IsOpenContext);
  const keywords = [];
  savedItems.forEach((i) => {
    if (!keywords.includes(i.searchTag)) {
      keywords.push(i.searchTag);
    }
  });
  return (
    <div className="saved-page">
      <p className="saved-page__subheading">Saved Articles</p>
      <h2 className="saved-page__title">
        {currentUser.name}, you have {savedItems.length} saved articles
      </h2>
      <p className="saved-page__subtitle">
        By keywords:{" "}
        <span className="save-page__subtitle-span">
          {keywords.length == 0
            ? ""
            : keywords.length == 1
            ? `${keywords[0]}.`
            : keywords.length >= 2
            ? `${keywords[0]}, ${keywords[1]}${
                keywords.length - 2 == 0
                  ? ""
                  : `, and ${keywords.length - 2} more.`
              }`
            : ""}
        </span>
      </p>
    </div>
  );
}
