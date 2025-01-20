import LockOverlay from "@/components/about/LockOverlay";
import AboutInfo from "@/components/about/AboutInfo";

function About({ isUnlocked, isKeyPickedUp, onUnlock }) {
    console.log("isUnlocked (About):", isUnlocked);
    console.log("isKeyPickedUp (About):", isKeyPickedUp);

    return (
        <div
            id="about"
            className="relative w-full min-h-screen py-6 lg:py-12 flex flex-col justify-center items-center text-white bg-black"
        >
            <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black to-transparent"></div>

            {!isUnlocked && (
                <LockOverlay
                    isKeyPickedUp={isKeyPickedUp}
                    isUnlocked={isUnlocked}
                    onUnlock={onUnlock}
                />
            )}

            {isUnlocked && <AboutInfo />}
        </div>
    );
}

export default About;