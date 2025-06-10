import React from 'react';
import { Howl } from 'howler';
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

  React.useEffect(() => {
    if (isKeyPickedUp && !isUnlocked && !isMuted) {
      heartbeatSound.play();
    } else {
      heartbeatSound.stop();
    }

    return () => heartbeatSound.stop();
  }, [isKeyPickedUp, isUnlocked, isMuted]);

  React.useEffect(() => {
    console.log("isUnlocked:", isUnlocked, "isMuted:", isMuted);
    if (isUnlocked && !isMuted) {
      const sound = new Howl({
        src: ["/sounds/blizzard.mp3"],
        volume: 1.0,
      });
      console.log("Playing unlock sound...");
      sound.play();
    }
  }, [isUnlocked, isMuted]);

  const handleUnlock = () => {
    if (!isUnlocked) {
      onUnlock();
    }
  };

  const handleDropZoneClick = () => {
    if (isKeyPickedUp) {
      handleUnlock();
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("unlock-key");
    if (data === "key") {
      handleUnlock();
    }
  };

  return (
    <div
      className={`absolute inset-0 ${isUnlocked ? "opacity-0 pointer-events-none" : "opacity-90"
        } transition-opacity duration-700 flex flex-col justify-center items-center relative overflow-hidden px-10 py-16`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleDropZoneClick}
    >
      {/* Background particles */}
      <div className="absolute inset-0 z-0 particles"></div>

      {!isUnlocked && (
        <div className="flex flex-col items-center space-y-4 z-10">
          <img
            src={cerrojoSvg}
            alt="Lock Icon"
            className={`lg:w-60 lg:h-60 w-52 h-52 mb-4 ${isKeyPickedUp ? "animate-bounce" : "animate-heartbeat"
              }`}
          />

          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wider text-center animate-fade-in">
            Section More about me <br /> Locked
          </h2>

          <p className="text-[#D7C616] text-lg md:text-xl font-medium opacity-80 text-center mt-2 animate-glow">
            {isKeyPickedUp
              ? "Place the key here to unlock"
              : "Pick up the key to unlock"}
          </p>
        </div>
      )}
    </div>
  );
}

export default LockOverlay;
