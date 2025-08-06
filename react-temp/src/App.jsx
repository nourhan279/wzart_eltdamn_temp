import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavbarComp } from "./Component/Navbar/NavbarComp";
import { FAQ } from "./Component/FAQ/FAQ";
import { Footer } from "./Component/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarComp />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
