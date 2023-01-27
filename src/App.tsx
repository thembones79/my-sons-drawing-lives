import { useState } from "react";
import reactLogo from "./assets/react.svg";
import leftArm from "./assets/left.png";
import rightArm from "./assets/right.png";
import dragon from "./assets/dragon.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="dragon__canvas">
        <img src={leftArm} className="dragon__left-arm" alt="left arm" />
        <img src={rightArm} className="dragon__right-arm" alt="right arm" />
        <img src={dragon} className="dragon" alt="dragon" />
      </div>
    </div>
  );
}

export default App;
