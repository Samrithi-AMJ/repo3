import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import R3Component from "./r3/r3";

function App() {
  const [count, setCount] = useState(0);

  return <R3Component />;
}

export default App;
