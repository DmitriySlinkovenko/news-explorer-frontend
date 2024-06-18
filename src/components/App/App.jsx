import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import NewsSection from "../NewsSections/NewsSection.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import NothingFound from "../NothingFound/NothingFound.jsx";
import SignInModal from "../SignInModal/SignInModal.jsx";
import SignUpModal from "../SignUpModal/SignUpModal.jsx";
import RegSuccessModal from "../RegSuccessModal/RegSuccessModal.jsx";
import Profile from "../Profile/Profile.jsx";
import About from "../About/About.jsx";
import Header from "../Header/Header.jsx";
import MobileModal from "../MobileModal/MobileModal.jsx";
import { IsOpenContext } from "../../contexts/IsOpenContext.js";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IsOpenContext.Provider value={{ isOpen, toggleMobileModal }}>
        <div className="page">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Main />
                  <NewsSection />
                  <About />
                </>
              }
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <MobileModal />
          <SignUpModal />
          <RegSuccessModal />
          <SignInModal />
          <Footer />
        </div>
      </IsOpenContext.Provider>
    </>
  );
}

export default App;
