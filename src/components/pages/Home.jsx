import Header from "@/components/pages/Header";
import About from "@/components/pages/About";
import Projects from "@/components/pages/Projects";
import Skills from "@/components/pages/Skills";

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