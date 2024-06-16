import React from "react";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileSubsection from "../ProfileSubsection/ProfileSubsection";
import SavedNews from "../SavedNews/SavedNews";

export default function Profile() {
  return (
    <div>
      <ProfileHeader />
      <ProfileSubsection />
      <SavedNews />
    </div>
  );
}
