import "./App.css";
import Navbar from "./componenets/Navbar";
import Home from "./componenets/Home";
import About from "./componenets/About";
import Expertise from "./componenets/Expertise";
import Projects from "./componenets/Projects";
import Contact from "./componenets/Contact";
import { useState } from "react";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleColor = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <>
      {isDarkMode ? (
        <div className="dark-mode w-full h-full fixed inset-0 -z-10 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      ) : (
        <div className="fixed inset-0 -z-10 w-full h-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      )}

      <main
        className={`flex flex-col items-center   min-h-screen ${
          isDarkMode ? "dark-mode" : "light-mode"
        }`}
      >
        <Navbar toggleColor={toggleColor} isDarkMode={isDarkMode} />
        <Home isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Expertise isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
    </>
  );
}

export default App;
