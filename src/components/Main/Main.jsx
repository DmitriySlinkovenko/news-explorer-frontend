import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";

export default function Main({ handleSearchSubmit, profilePage }) {
  return (
    <>
      <div className="main">
        <Header />
        <SearchForm handleSearchSubmit={handleSearchSubmit} />
      </div>
    </>
  );
}
