import React from "react";
import cerrojoSvg from "@/assets/icons/cerrojo.svg";

function LockOverlay({ isKeyPickedUp, isUnlocked, onUnlock }) {
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
            className={`absolute inset-0 bg-black ${isUnlocked ? "opacity-0 pointer-events-none" : "opacity-90"} transition-opacity duration-500 flex flex-col justify-center items-center`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleDropZoneClick}
        >
            {!isUnlocked && (
                <div className="flex flex-col items-center space-y-4">
                    <img src={cerrojoSvg} alt="Lock Icon" className="lg:w-60 lg:h-60 w-52 h-52 mb-4" />
                    <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wider text-center">
                        Section More about me <br /> Locked
                    </h2>
                    <p className="text-white text-base md:text-lg lg:text-lg font-medium opacity-80 text-center mt-2">
                        {isKeyPickedUp ? "Click the key here to unlock" : "Pick up the key to unlock"}
                    </p>
                </div>
            )}
        </div>
    );
}

export default LockOverlay;