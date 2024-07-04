import { useContext } from "react";
import "./ProfileSubsection.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function ProfileSubsection({
  savedArticles = 5,
  searchWords = ["Nature", "YellowStone", "Heroes"],
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="saved-page">
      <p className="saved-page__subheading">Saved Articles</p>
      <h2 className="saved-page__title">
        {currentUser.name}, you have {savedArticles} saved articles
      </h2>
      <p className="saved-page__subtitle">
        By keywords:{" "}
        <span className="save-page__subtitle-span">
          {searchWords[0]}, {searchWords[1]}
          {searchWords.length > 2 && ` and ${searchWords.length - 2} more`}
        </span>
      </p>
    </div>
  );
}
