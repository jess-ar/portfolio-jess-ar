import LockOverlay from "@/components/about/LockOverlay";
import AboutInfo from "@/components/about/AboutInfo";
import fondoCurva from '@/assets/images/fondo-curva.svg';

function About({ isUnlocked, isKeyPickedUp, onUnlock }) {
  console.log("fondoCurva:", fondoCurva);

  return (
    <section>
      <div
        id="about"
        className={`
                relative z-0 w-full min-h-screen py-10 pt-20 lg:py-12
                flex flex-col justify-start items-center
                bg-transparent
                bg-no-repeat
            `}
        style={{
          backgroundImage: `url(${fondoCurva})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
      >
        {/* Text and arrow at the beginning of the section */}
        <div className="relative w-full h-20 sm:h-16 md:h-16 flex items-end justify-center z-10 ">
          <div className="mb-4 text-center text-white">
            <p className="text-xs sm:text-sm md:text-base font-medium ">
              Use the key to unlock the next section
            </p>
            <a href="#about" className="cursor-pointer">
              <svg
                className="mx-auto mt-2 w-4 h-4 sm:w-6 sm:h-6 text-white animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* LockOverlay only if blocked */}
        {!isUnlocked && (
          <LockOverlay
            isKeyPickedUp={isKeyPickedUp}
            isUnlocked={isUnlocked}
            onUnlock={onUnlock}
          />
        )}

        {/* AboutInfo is displayed when unlocking */}
        {isUnlocked && <AboutInfo />}
      </div>
    </section>
  );
}

export default About;