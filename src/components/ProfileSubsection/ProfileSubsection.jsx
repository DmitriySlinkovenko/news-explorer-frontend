import { useContext } from "react";
import "./ProfileSubsection.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { IsOpenContext } from "../../contexts/IsOpenContext";

export default function ProfileSubsection() {
  const currentUser = useContext(CurrentUserContext);
  const { savedItems } = useContext(IsOpenContext);
  return (
    <div className="saved-page">
      <p className="saved-page__subheading">Saved Articles</p>
      <h2 className="saved-page__title">
        {currentUser.name}, you have {savedItems.length} saved articles
      </h2>
      <p className="saved-page__subtitle">
        By keywords: <span className="save-page__subtitle-span"></span>
      </p>
    </div>
  );
}
