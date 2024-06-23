import { useState } from "react";
import "./SearchForm.css";

export default function SearchForm({ handleSearchSubmit }) {
  const [userInput, setUserInput] = useState("");
  const [buttonText, setButtonText] = useState("Search");
  function handleUserInput(e) {
    setUserInput(e.target.value);
    setButtonText("Search");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!userInput) {
      setButtonText("Please enter a keyword");
      return;
    }
    handleSearchSubmit(userInput);
    setUserInput("");
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <h1 className="search-form__title">
          What&apos;s going on in the world?
        </h1>
        <p className="search-form__subtitle">
          Find the latest news on any topic and save them in your personal
          accout.
        </p>

        <label className="search-form__input-label">
          <input
            type="text"
            placeholder="Enter Topic"
            className="search-form__input"
            name="user-input"
            value={userInput}
            onChange={handleUserInput}
          />
          <button type="submit" className="search-form__search-btn">
            {buttonText}
          </button>
        </label>
      </div>
    </form>
  );
}
