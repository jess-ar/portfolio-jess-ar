import { useState, useEffect, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "@/assets/icons/logo.svg";

function Navbar() {
  const [durum, setDurum] = useState(true); // Control del menú móvil
  const [isScrolled, setIsScrolled] = useState(false); // Control del scroll
  const [isMuted, setIsMuted] = useState(false); // Control del audio
  const audioRef = useRef(null); // Referencia para el audio

  useEffect(() => {
    const scrollFunction = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("nav") && !event.target.closest(".fa-bars")) {
        setDurum(true);
      }
    };

    if (!durum) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [durum]);

  const toggleSound = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted; // Silencia o activa el audio
    }
  };

  const handleLinkClick = () => {
    setDurum(true); // Cierra el menú móvil al hacer clic en un enlace
  };

  return (
    <header role="banner">
      <div
        className={`navbarcon fixed w-full z-40 text-primary shadow-[0px_4px_10px_rgba(255,255,255,0.2)] transition-colors duration-75 ${isScrolled ? "bg-[#0B1223]" : "bg-transparent"}`}
        aria-label="Main Navigation"
      >
        <div className="max-w-screen-lg mx-auto lg:py-6 lg:px-6 md:py-6 md:px-6 flex justify-between items-center">
          {/* Logotipo */}
          <a href="#home" aria-label="Back to home">
            <img src={logo} alt="Jessica Arroyo Lebrón Logo" className="h-12" />
          </a>

          {/* Botón hamburguesa y volumen para móvil */}
          <div className="flex items-center gap-2 lg:hidden">
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
                  onClick={handleLinkClick}
                >
                  Home
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#about"
                  className="navbar-link"
                  onClick={handleLinkClick}
                >
                  About me
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#skills"
                  className="navbar-link"
                  onClick={handleLinkClick}
                >
                  Skills
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#projects"
                  className="navbar-link"
                  onClick={handleLinkClick}
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
                  onClick={toggleSound}
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

      {/* Audio oculto */}
      <audio ref={audioRef} src="/path-to-your-audio-file.mp3" autoPlay loop />
    </header>
  );
}

export default Navbar;