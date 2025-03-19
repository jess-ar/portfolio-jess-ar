import Header from "@/pages/Header";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";

function Home({ isUnlocked, isKeyPickedUp, onPickup, onUnlockAbout }) {
  return (
    <div className="flex flex-col gap-0">
      <Header onPickup={onPickup} isKeyPickedUp={isKeyPickedUp} />
      <About isUnlocked={isUnlocked} isKeyPickedUp={isKeyPickedUp} onUnlock={onUnlockAbout} />
      <Skills />
      <Projects />
    </div>
  );
}

export default Home;