import { useState, useEffect, useRef } from "react";
import { useAudio } from "@/context/AudioContext";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "@/assets/icons/logo.svg";
import { playSound } from "@/utils/soundUtils";
import SoundPopup from "@/components/layout/SoundPopup"; // Asegúrate de importar el componente del pop-up

function Navbar() {
  const [durum, setDurum] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(true); // Estado para mostrar el pop-up

  const { isMuted, setIsMuted } = useAudio();
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleSound = () => {
    setIsMuted((prevMuted) => !prevMuted);
    setShowPopup(false); // Oculta el pop-up cuando se interactúa con el botón de sonido
  };

  useEffect(() => {
    const scrollFunction = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true;
    }
  }, []);

  const handleLinkClick = () => {
    setDurum(true);
  };

  return (
    <header role="banner">
      <div
        className={`navbarcon fixed w-full z-40 text-primary shadow-[0px_4px_10px_rgba(255,255,255,0.2)] transition-colors duration-75 ${
          isScrolled ? "bg-[#0B1223]" : "bg-transparent"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-screen-lg mx-auto lg:py-6 lg:px-6 md:py-6 md:px-6 flex justify-between items-center">
          {/* Logotipo */}
          <a href="#home" aria-label="Back to home">
            <img src={logo} alt="Jessica Arroyo Lebrón Logo" className="h-12" />
          </a>

          {/* Botón hamburguesa y volumen para móvil */}
          <div className="flex items-center gap-2 lg:hidden relative">
            {/* Pop-up para el botón de sonido */}
            {showPopup && (
              <SoundPopup
                onClose={() => setShowPopup(false)}
                className="absolute -top-16 right-0"
              />
            )}

            <button
              onClick={toggleSound}
              className="w-10 h-10 flex items-center justify-center text-white text-xl border border-dark rounded-full bg-dark transition-all duration-300"
              aria-label={isMuted ? "Enable sound" : "Mute sound"}
            >
              {isMuted ? (
                <i className="fa-solid fa-volume-xmark" aria-hidden="true"></i>
              ) : (
                <i className="fa-solid fa-volume-high" aria-hidden="true"></i>
              )}
            </button>

            <button
              onClick={() => setDurum(!durum)}
              className="fa-solid fa-bars text-2xl cursor-pointer"
              aria-label="Toggle Navigation"
              aria-expanded={!durum}
            ></button>
          </div>

          <nav
            className={`${durum ? "hidden" : "flex"} flex-col lg:flex lg:flex-row justify-center items-center gap-y-4 lg:gap-x-8 absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-terciary lg:bg-transparent mt-6 lg:mt-0 pt-4 lg:pt-0`}
            role="navigation"
          >
            <ul
              className="flex flex-col lg:flex-row items-center gap-y-4 lg:gap-x-8 text-sm md:text-lg"
              aria-label="Main Menu"
            >
              <li>
                <AnchorLink
                  href="#home"
                  className="navbar-link"
                  onClick={() => {
                    handleLinkClick();
                    playSound("/sounds/save.mp3", isMuted);
                  }}
                >
                  Home
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#about"
                  className="navbar-link"
                  onClick={() => {
                    handleLinkClick();
                    playSound("/sounds/save.mp3", isMuted);
                  }}
                >
                  About me
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#skills"
                  className="navbar-link"
                  onClick={() => {
                    handleLinkClick();
                    playSound("/sounds/save.mp3", isMuted);
                  }}
                >
                  Skills
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#projects"
                  className="navbar-link"
                  onClick={() => {
                    handleLinkClick();
                    playSound("/sounds/save.mp3", isMuted);
                  }}
                >
                  Projects
                </AnchorLink>
              </li>
            </ul>

            {/* Botón para copiar email */}
            <div className="relative group ml-">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "jessica.arroyo.lebron@gmail.com"
                  );
                  alert("¡Correo copiado al portapapeles!");
                  handleLinkClick();
                  playSound("/sounds/item-get.mp3", isMuted);
                }}
                className="border border-primary py-1 px-3 text-sm md:text-base text-primary font-bold bg-transparent hover:bg-primary hover:text-secondary rounded-lg transition-all duration-300 lg:ml-24"
                aria-label="Copy email address to clipboard"
              >
                Let's Connect
              </button>
            </div>

            {/* Iconos de redes sociales */}
            <ul
              className="icon text-lg flex gap-4 lg:gap-6 mb-4 lg:mb-0 mt-4 lg:mt-0 items-center"
              aria-label="Social Media Links"
            >
              <li>
                <a
                  onClick={() => {
                    playSound("/sounds/exit.mp3", isMuted);
                  }}
                  href="https://www.linkedin.com/in/jessica-arroyo-lebron/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-primary flex items-center justify-center rounded-full hover:bg-primary hover:text-secondary transition-all duration-300"
                  aria-label="Visit LinkedIn Profile"
                >
                  <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    playSound("/sounds/exit.mp3", isMuted);
                  }}
                  href="https://github.com/jess-ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-primary flex items-center justify-center rounded-full hover:bg-primary hover:text-secondary transition-all duration-300"
                  aria-label="Visit GitHub Profile"
                >
                  <i className="fa-brands fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li className="hidden lg:block">
                <button
                  onClick={() => {
                    toggleSound();
                    if (isMuted) {
                      playSound("/sounds/select.mp3", false);
                    }
                  }}
                  className="w-10 h-10 flex items-center justify-center text-black text-xl border border-primary rounded-full bg-primary transition-all duration-300"
                  aria-label={isMuted ? "Enable sound" : "Mute sound"}
                >
                  {isMuted ? (
                    <i className="fa-solid fa-volume-xmark" aria-hidden="true"></i>
                  ) : (
                    <i className="fa-solid fa-volume-high" aria-hidden="true"></i>
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;