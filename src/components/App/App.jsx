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
import { getNews } from "../../utils/newsAPI.js";
import { signIn, signUp, checkToken } from "../../utils/auth.js";
import { addItem, removeItem, getItems } from "../../utils/api.js";
import { getToken, setToken, removeToken } from "../../utils/token.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchTag, setSearchTag] = useState("");
  const [serverError, setServerError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [savedItems, setSavedItems] = useState([]);

  const navigate = useNavigate();
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

  /*useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.clear();
    });
  }, []); */

  // useEffect(() => {
  //   setServerError(false);
  //   const savedNews = localStorage.getItem("News");
  //   setNews([savedNews], ...news);
  // }, []);

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }

    checkToken(jwt)
      .then((data) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error(err);
      });
    getItems(jwt)
      .then((res) => {
        setSavedItems(res);
        res.forEach((i) => {
          setSearchTag(i.searchTag);
        });
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearchSubmit = (userInput) => {
    setIsLoading(true);
    setSearchTag(userInput);
    return getNews(userInput)
      .then((res) => {
        setServerError(false);
        setNews(res.articles, ...news);
        setSearchPerformed(true);
        localStorage.setItem("News", res.articles);
      })
      .catch((err) => {
        console.log(err);
        setServerError(true);
      })
      .finally(() => setIsLoading(false));
  };
  function handleSaveNewsSubmit(data) {
    const jwt = getToken();
    addItem(data, jwt)
      .then((res) => {
        console.log(savedItems);
        setSavedItems([res.item, ...savedItems]);
      })
      .catch(console.error);
  }

  const handleSignUp = ({ email, name, password }) => {
    signUp({ email, name, password })
      .then(() => {
        handleLogin({ email, password });
      })
      .then(handleModalClose)
      .catch((err) => console.error(err));
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    signIn({ email, password })
      .then((res) => {
        if (res.token) {
          setToken(res.token);
          checkToken(res.token).then((res) => {
            setIsLoggedIn(true);
            setCurrentUser(res);
            const redirectPath = location.state?.from?.pathname || "/";
            navigate(redirectPath);
            handleModalClose();
          });
          getItems(res.token);
        }
      })
      .catch((err) => console.error(err.message));
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setCurrentUser("");
    removeToken();
    navigate("/");
  };

  const handleDeleteItem = (id) => {
    const token = getToken();
    removeItem(id, token)
      .then(() => {
        setSavedItems(savedItems.filter((item) => item._id !== id));
      })
      .catch(console.error);
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <IsOpenContext.Provider
          value={{
            mobileIsOpen,
            isLoggedIn,
            toggleMobileModal,
            clickHandlers: { handleLoginClick, handleRegisterClick },
            isOpen: { loginModalOpen, registerModalOpen },
            handleLogOut,
            savedItems,
          }}
        >
          <div className="page">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Main handleSearchSubmit={handleSearchSubmit} />
                    {isLoading ? (
                      <Preloader />
                    ) : searchPerformed ? (
                      news.length !== 0 ? (
                        <NewsCardSection
                          news={news}
                          searchTag={searchTag}
                          serverError={serverError}
                          handleSaveNewsSubmit={handleSaveNewsSubmit}
                        />
                      ) : (
                        <NothingFound />
                      )
                    ) : (
                      <></>
                    )}
                    <About />
                  </>
                }
              />
              <Route
                path={"/saved-news"}
                element={
                  <>
                    <Profile
                      searchTag={searchTag}
                      handleDeleteItem={handleDeleteItem}
                    />
                  </>
                }
              />
            </Routes>
            <MobileModal onCloseModal={handleModalClose} />
            <SignUpModal
              onCloseModal={handleModalClose}
              handleSignUp={handleSignUp}
              isLoggedIn={isLoggedIn}
            />
            <RegSuccessModal onCloseModal={handleModalClose} />
            <SignInModal
              onCloseModal={handleModalClose}
              handleLogin={handleLogin}
            />
            <Footer />
          </div>
        </IsOpenContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
