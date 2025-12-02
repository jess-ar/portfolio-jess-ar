import React from "react";
import { Howl } from "howler";
import { useAudio } from "@/context/AudioContext";
import cerrojoSvg from "@/assets/icons/cerrojo.svg";
import "@/styles/LockOverlay.css";

function LockOverlay({ isKeyPickedUp, isUnlocked, onUnlock }) {
  const { isMuted } = useAudio();

  const heartbeatSound = React.useMemo(
    () =>
      new Howl({
        src: ["/sounds/heartbeat.wav"],
        loop: true,
        volume: 0.8,
      }),
    []
  );

  const unlockSound = React.useMemo(
    () =>
      new Howl({
        src: ["/sounds/blizzard.mp3"],
        volume: 1.0,
      }),
    []
  );

  // Heartbeat when locked & key picked
  React.useEffect(() => {
    if (isKeyPickedUp && !isUnlocked && !isMuted) {
      heartbeatSound.play();
    } else {
      heartbeatSound.stop();
    }
    return () => heartbeatSound.stop();
  }, [isKeyPickedUp, isUnlocked, isMuted, heartbeatSound]);

  // Unlock sound
  React.useEffect(() => {
    if (isUnlocked && !isMuted) {
      unlockSound.play();
    }
  }, [isUnlocked, isMuted, unlockSound]);

  // Move focus to AboutInfo when unlocked
  React.useEffect(() => {
    if (isUnlocked) {
      const target = document.getElementById("about-info-start");
      if (target) target.focus();
    }
  }, [isUnlocked]);

  // Cleanup sounds on unmount
  React.useEffect(() => {
    return () => {
      heartbeatSound.stop();
      unlockSound.stop();
    };
  }, [heartbeatSound, unlockSound]);

  const handleUnlock = () => {
    if (isKeyPickedUp && !isUnlocked) {
      onUnlock();
    }
  };

  const handleDropZoneClick = () => {
    if (isKeyPickedUp && !isUnlocked) {
      handleUnlock();
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    if (isKeyPickedUp && !isUnlocked) {
      handleUnlock();
    }
  };

  return (
    <div
      id="lock-overlay"
      className={`absolute inset-0 ${
        isUnlocked ? "opacity-0 pointer-events-none" : "opacity-90"
      } transition-opacity duration-700 flex flex-col justify-center items-center relative overflow-hidden px-10 py-16`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleDropZoneClick}
    >
      {/* Background particles */}
      <div className="absolute inset-0 z-0 particles" aria-hidden="true"></div>

      {!isUnlocked && (
        <div className="flex flex-col items-center space-y-4 z-10">
          {/* Padlock (interactive with keypad) */}
          <img
            src={cerrojoSvg}
            alt={
              isKeyPickedUp
                ? "Press Enter to unlock the section"
                : "Locked section — pick up the key first"
            }
            role="button"
            tabIndex={0}
            onClick={() => {
              if (isKeyPickedUp) handleUnlock();
            }}
            onKeyDown={(e) => {
              if ((e.key === "Enter" || e.key === " ") && isKeyPickedUp) {
                e.preventDefault();
                handleUnlock();
              }
            }}
            className={`
              lg:w-60 lg:h-60 w-52 h-52 mb-4 cursor-pointer
              ${isKeyPickedUp ? "animate-bounce" : "animate-heartbeat"}
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
              focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-full
              transition-all duration-300
            `}
          />
          <h2
            tabIndex={0}
            className="
              text-white text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wider text-center animate-fade-in
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
              focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg
            "
          >
            Section More about me <br /> Locked
          </h2>
          <p className="text-[#D7C616] text-lg md:text-xl font-medium opacity-80 text-center mt-2 animate-glow">
            {isKeyPickedUp
              ? "Place the key or press Enter to unlock"
              : "Take the key above to unlock the section"}
          </p>
        </div>
      )}
    </div>
  );
}

export default LockOverlay;
