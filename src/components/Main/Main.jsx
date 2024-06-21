import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";

export default function Main({ handleSearchSubmit }) {
  return (
    <>
      <div className="main">
        <Header />
        <SearchForm handleSearchSubmit={handleSearchSubmit} />
      </div>
    </>
  );
}
