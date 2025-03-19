import { useState } from "react";
import Home from "@/pages/Home";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function App() {
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

  return (
    <div className="app">
      <Navbar /> {/* Scroll interior with AnchorLink */}
      <main>
        <Home
          isUnlocked={isUnlocked}
          isKeyPickedUp={isKeyPickedUp}
          onPickup={handleKeyPickup}
          onUnlockAbout={handleUnlockAbout}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;