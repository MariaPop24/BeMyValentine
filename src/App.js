import { useState } from "react";
import "./App.scss";
import Letter from "./components/Letter/Letter";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openLetter = () => {
    setIsOpen(true);
  };

  return (
    <div className="App">
      <div className="content-container">
        <Letter isOpen={isOpen} />
        <div className="letter-shadow"></div>
        <div>
          <button className="buttons--open" onClick={openLetter}>
            OPEN
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
