import { useState } from "react";
import "./App.css";
import Main from "../Main/Main.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <Main />
      </div>
    </>
  );
}

export default App;
