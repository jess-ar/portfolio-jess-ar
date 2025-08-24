import LockOverlay from "@/components/about/LockOverlay";
import AboutInfo from "@/components/about/AboutInfo";
import fondoCurva from "@/assets/images/fondo-curva.svg";

function About({ isUnlocked, isKeyPickedUp, onUnlock }) {
  console.log("fondoCurva:", fondoCurva);

  const scrollBelowAbout = () => {
    const el = document.getElementById("about");
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pageY = window.scrollY + rect.top;
    const offset = 690;
    const targetY = pageY + el.offsetHeight - offset;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section>
      <div
        id="about"
        className={`
                relative w-full min-h-screen py-10 pt-20 lg:py-12
                flex flex-col justify-start items-center
                bg-transparent
                bg-no-repeat
            `}
        style={{
          backgroundImage: `url(${fondoCurva})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        <div className="relative w-full h-20 sm:h-16 md:h-16 flex items-end justify-center z-10">
          <div className="mb-4 text-center text-white">
            <p className="text-xs sm:text-sm md:text-base font-medium ">
              Use the key to unlock the next section
            </p>
            <button
              type="button"
              onClick={scrollBelowAbout}
              className=" cursor-pointer focus:outline-none"
              aria-label="Go to next section"
            >
              <img
                src="/icons/down.svg"
                alt="Arrow down"
                className="mx-auto mt-2 w-4 h-4 sm:w-6 sm:h-6 animate-bounce"
              />
            </button>
          </div>
        </div>

        {!isUnlocked && (
          <LockOverlay
            isKeyPickedUp={isKeyPickedUp}
            isUnlocked={isUnlocked}
            onUnlock={onUnlock}
          />
        )}

        {isUnlocked && <AboutInfo />}
      </div>
    </section>
  );
}

export default About;
