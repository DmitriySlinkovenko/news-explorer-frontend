import { useState } from "react";
import "./App.css";
import Main from "../Main/Main.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import NewsSection from "../NewsSections/NewsSection.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <Main />

        <About />
        <Footer />
        <NewsSection />
      </div>
    </>
  );
}

export default App;
