import React, { useState } from "react";
import cerrojoSvg from "@/assets/icons/cerrojo.svg";

function LockOverlay({ isKeyPickedUp, onUnlock }) {
    const [isUnlocked, setIsUnlocked] = useState(false);

    const handleUnlock = () => {
        setIsUnlocked(true);
        onUnlock();
    };

    const handleDropZoneClick = () => {
        if (isKeyPickedUp) {
            handleUnlock();
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
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
            className={`absolute inset-0 bg-black ${isUnlocked ? "opacity-0" : "opacity-90"} transition-opacity duration-500 flex flex-col justify-center items-center`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleDropZoneClick}
        >
            {!isUnlocked && (
                <div className="flex flex-col items-center space-y-4">
                    <img src={cerrojoSvg} alt="Lock Icon" className="w-80 h-80 mb-4" />

                    <h2 className="text-white text-5xl font-extrabold tracking-wider text-center">
                        Section Locked
                    </h2>

                    <p className="text-white text-lg font-medium opacity-80 text-center mt-2">
                        {isKeyPickedUp ? "Click or drop the key here to unlock" : "Pick up the key to unlock"}
                    </p>
                </div>
            )}
        </div>
    );
}

export default LockOverlay;
