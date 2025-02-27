import { useState } from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NotFound from "@/components/common/NotFound";


function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isKeyPickedUp, setIsKeyPickedUp] = useState(false);

  const handleUnlockAbout = () => {
    setIsUnlocked(true);
    console.log("About unlocked!");
  };

  const handleKeyPickup = (pickedUp) => {
    setIsKeyPickedUp(pickedUp);
    console.log("Key picked up:", pickedUp);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home
            isUnlocked={isUnlocked}
            isKeyPickedUp={isKeyPickedUp}
            onPickup={handleKeyPickup}
            onUnlockAbout={handleUnlockAbout}
          />
        );
      case "about":
        return (
          <About
            isUnlocked={isUnlocked}
            isKeyPickedUp={isKeyPickedUp}
            onUnlock={handleUnlockAbout}
          />
        );
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="app">
      <Navbar setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;