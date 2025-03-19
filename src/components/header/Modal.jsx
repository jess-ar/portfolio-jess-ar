import { useRef, useEffect, useState } from "react";
import MusicPlayer from "./MusicPlayer";
import kingdomHeartsImage from "@/assets/images/kingdomHeartsImage.png";

const Modal = ({ isOpen, onClose, title }) => {
  const modalRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);

  const tracks = [
    {
      title: "Hikari - Kingdom",
      artist: "Orchestra Instrumental Version",
      src: "/sounds/hikari.mp3",
    },
    {
      title: "Dearly Beloved",
      artist: "Yōko Shimomura",
      src: "/sounds/dearly-beloved.mp3",
    },
    {
      title: "Hikari - Simple and Clean",
      artist: "Utada Hikaru",
      src: "/sounds/simple-and-clean.mp3",
    },
    {
      title: "Kairi I",
      artist: "Yōko Shimomura",
      src: "/sounds/kairi-I.mp3",
    },
  ];

  const handleNextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const handlePreviousTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 z-[999] bg-black bg-opacity-70 flex items-center justify-center overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      style={{ zIndex: 9999 }}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-gradient-to-b from-[#0B3D65] to-[#0B1223] text-white rounded-lg 
                w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] max-h-[90vh] p-6 mt-32 shadow-lg relative overflow-y-auto pb-20 md:pb-6 lg:pb-6 focus:outline-none"
      >
        <button
          className="absolute top-4 right-4 text-gray-300 hover:text-[#D7C616] focus:outline-none focus:ring-2 focus:ring-[#D7C616] rounded"
          onClick={onClose}
          aria-label="Close Modal"
        >
          ✕
        </button>

        {title && (
          <h2
            id="modal-title"
            className="text-lg md:text-xl lg:text-2xl font-bold mb-6 text-center"
          >
            {title}
          </h2>
        )}

        <div className="flex flex-col md:flex-row lg:flex-row items-center lg:items-start gap-6">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              className="w-full lg:w-auto max-h-[32vh] lg:max-h-[32vh] rounded-lg object-contain md:ml-20"
              src={kingdomHeartsImage}
              alt="Official Kingdom Hearts artwork showing characters from the game"
            />
          </div>

          <div
            id="modal-description"
            className="text-xs md:text-base lg:text-base text-gray-200 w-full lg:w-1/2 max-h-[40vh] lg:max-h-[40vh] overflow-y-auto lg:mr-20"
          >
            <p className="mb-4">
              Kingdom Hearts is more than just a game to me. It’s a memory of my
              childhood and happy moments with my family. This portfolio reflects
              who I am, and this game represents a significant part of my story.
            </p>
            <p>
              The story of the game revolves around friendship, the fight against
              darkness, and the power of the heart, something that has always
              inspired me.
            </p>
          </div>
        </div>

        <section className="flex justify-center">
          <div className="mt-6 w-full sm:w-[50%] md:w-[50%]">
            <MusicPlayer
              tracks={tracks}
              currentTrack={currentTrack}
              onNext={handleNextTrack}
              onPrevious={handlePreviousTrack}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;