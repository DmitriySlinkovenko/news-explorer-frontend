import ProfileNav from "../ProfileNav/ProfileNav";
import ProfileSubsection from "../ProfileSubsection/ProfileSubsection";
import SavedNews from "../SavedNews/SavedNews";

export default function Profile({ searchTag, isProfilePage, profilePage }) {
  return (
    <>
      <ProfileNav profilePage={profilePage} />
      <ProfileSubsection />
      <SavedNews searchTag={searchTag} isProfilePage={isProfilePage} />
    </>
  );
}
