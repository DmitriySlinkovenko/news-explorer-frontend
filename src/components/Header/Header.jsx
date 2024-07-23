import "./Header.css";
import Nav from "../Nav/Nav";

export default function Header({ profilePage }) {
  return (
    <>
      <header className="header">
        <Nav profilePage={profilePage} />
      </header>
    </>
  );
}
