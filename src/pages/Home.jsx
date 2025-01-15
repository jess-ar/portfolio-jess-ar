import Header from "@/pages/Header";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";

function Home({ isUnlocked, isKeyPickedUp, onPickup, onUnlockAbout }) {
  return (
    <>
      <Header onPickup={onPickup} isKeyPickedUp={isKeyPickedUp} />
      <About isUnlocked={isUnlocked} isKeyPickedUp={isKeyPickedUp} onUnlock={onUnlockAbout} />
      <Skills />
      <Projects />
    </>
  );
}

export default Home;