import React from "react";

export default function SearchForm() {
  return (
    <div className="search-form__container">
      <h1 className="search-form__title"></h1>
      <p className="seatch-form__subtitle"></p>
      <input
        type="text"
        placeholder="Search Topic"
        className="search-form__input"
      />
      <button className="search-form__search-btn">Search</button>
    </div>
  );
}
