import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="search-form__container">
      <h1 className="search-form__title">What's going on in the world?</h1>
      <p className="search-form__subtitle">
        Find the latest news on any topic and save them in your personal accout.
      </p>

      <label className="search-form__input-label">
        <input
          type="text"
          placeholder="Enter Topic"
          className="search-form__input"
        />
        <button className="search-form__search-btn">Search</button>
      </label>
    </div>
  );
}
