import ProfileNav from "../ProfileNav/ProfileNav";
import ProfileSubsection from "../ProfileSubsection/ProfileSubsection";
import SavedNews from "../SavedNews/SavedNews";

export default function Profile({ searchTag, handleDeleteItem }) {
  return (
    <>
      <ProfileNav />
      <ProfileSubsection searchTag={searchTag} />
      <SavedNews searchTag={searchTag} handleDeleteItem={handleDeleteItem} />
    </>
  );
}
