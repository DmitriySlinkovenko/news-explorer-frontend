import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import NewsCardSection from "../NewsCardSection/NewsCardSection.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import NothingFound from "../NothingFound/NothingFound.jsx";
import SignInModal from "../SignInModal/SignInModal.jsx";
import SignUpModal from "../SignUpModal/SignUpModal.jsx";
import RegSuccessModal from "../RegSuccessModal/RegSuccessModal.jsx";
import Profile from "../Profile/Profile.jsx";
import About from "../About/About.jsx";
import MobileModal from "../MobileModal/MobileModal.jsx";
import { IsOpenContext } from "../../contexts/IsOpenContext.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const loginModalOpen = activeModal === "login";
  const registerModalOpen = activeModal === "register";

  const handleRegisterClick = () => {
    setActiveModal("register");
  };
  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  const toggleMobileModal = () => {
    setMobileIsOpen(!mobileIsOpen);
  };
  const addEventListener = (e) => {
    if (e.key === "Escape") {
      handleModalClose();
    }
    if (e.target.className == "modal modal_opened") {
      handleModalClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", addEventListener);
    return () => window.removeEventListener("keydown", addEventListener);
  }, []);

  useEffect(() => {
    window.addEventListener("click", addEventListener);
    return () => window.removeEventListener("click", addEventListener);
  }, []);

  return (
    <>
      <IsOpenContext.Provider
        value={{
          mobileIsOpen,
          toggleMobileModal,
          clickHandlers: { handleLoginClick, handleRegisterClick },
          isOpen: { loginModalOpen, registerModalOpen },
        }}
      >
        <div className="page">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Main />
                  <NewsCardSection />
                  <About />
                </>
              }
            />
            <Route path="/saved-news" element={<Profile />} />
          </Routes>
          <MobileModal onCloseModal={handleModalClose} />
          <SignUpModal onCloseModal={handleModalClose} />
          <RegSuccessModal onCloseModal={handleModalClose} />
          <SignInModal onCloseModal={handleModalClose} />
          <Footer />
        </div>
      </IsOpenContext.Provider>
    </>
  );
}

export default App;
