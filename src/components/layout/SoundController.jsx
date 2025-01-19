import React, { useState, useEffect, useRef } from "react";
import SoundModal from "./soundModal";

const SoundController = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
      const musicConsent = localStorage.getItem("musicConsent");
  
      if (!musicConsent) {
        setShowModal(true); // Mostrar el modal si no hay preferencia
      } else if (musicConsent === "always") {
        setIsPlaying(true);
        audioRef.current?.play();
      }
    }, []);
  
    const handleAlwaysAccept = () => {
      localStorage.setItem("musicConsent", "always");
      setIsPlaying(true);
      audioRef.current?.play();
      setShowModal(false);
    };
  
    const handleSessionAccept = () => {
      setIsPlaying(true);
      audioRef.current?.play();
      setShowModal(false);
    };
  
    const handleDecline = () => {
      localStorage.setItem("musicConsent", "never");
      setIsPlaying(false);
      audioRef.current?.pause();
      setShowModal(false);
    };
  
    const toggleSound = () => {
      if (isPlaying) {
        setIsPlaying(false);
        audioRef.current?.pause();
      } else {
        setIsPlaying(true);
        audioRef.current?.play();
      }
    };
  
    return (
      <>
        {showModal && (
          <SoundModal
            onAlwaysAccept={handleAlwaysAccept}
            onSessionAccept={handleSessionAccept}
            onDecline={handleDecline}
          />
        )}
        <audio ref={audioRef} loop>
          <source src="/audio/hikari.mp3" type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>
        <button
          onClick={toggleSound}
          className="fixed bottom-4 right-4 w-12 h-12 bg-gray-800 text-white rounded-full"
        >
          {isPlaying ? "🔊" : "🔇"}
        </button>
      </>
    );
  };
  
export default SoundController;  
