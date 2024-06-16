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

function App() {
  return (
    <>
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

        <SignUpModal />
        <RegSuccessModal />
        <SignInModal />
        <Footer />
      </div>
    </>
  );
}

export default App;
