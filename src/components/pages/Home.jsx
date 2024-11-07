import React, { useState } from 'react';
import Header from '@/components/pages/Header';
import About from '@/components/pages/About';
import Footer from '@/components/layout/Footer';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/pages/Skills';

function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isKeyPickedUp, setIsKeyPickedUp] = useState(false);

  const handleUnlockAbout = () => {
    setIsUnlocked(true);
  };

  const handleKeyPickup = (pickedUp) => {
    setIsKeyPickedUp(pickedUp);
  };

  return (
    <>
      <Header onPickup={handleKeyPickup} isKeyPickedUp={isKeyPickedUp} />
      <About isUnlocked={isUnlocked} isKeyPickedUp={isKeyPickedUp} onUnlock={handleUnlockAbout} />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
