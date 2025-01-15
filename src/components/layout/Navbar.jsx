import { useState, useEffect, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "@/assets/icons/logo.svg";

function Navbar() {
  const [durum, setDurum] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
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

  const toggleSound = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted; // Silencia o activa el audio
    }
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

          {/* Navegación Desktop */}
          <nav
            className="hidden lg:flex lg:items-center lg:gap-x-8"
            role="navigation"
          >
            <ul
              className="flex flex-row items-center gap-x-8 text-sm md:text-lg"
              aria-label="Main Menu"
            >
              <li>
                <AnchorLink href="#home" className="navbar-link">
                  Home
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#about" className="navbar-link">
                  About me
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#skills" className="navbar-link">
                  Skills
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#projects" className="navbar-link">
                  Projects
                </AnchorLink>
              </li>
            </ul>
          </nav>

          {/* Botones Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  "jessica.arroyo.lebron@gmail.com"
                );
                alert("¡Correo copiado al portapapeles!");
              }}
              className="border border-primary py-1 px-3 text-sm md:text-base text-primary font-bold bg-transparent hover:bg-primary hover:text-secondary rounded-lg transition-all duration-300"
              aria-label="Copy email address to clipboard"
            >
              Let's Connect
            </button>

            {/* Iconos sociales */}
            <ul
              className="flex items-center gap-4 text-lg"
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
            </ul>

            {/* Botón de sonido Desktop */}
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
          </div>

          {/* Botones Móvil */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Botón de sonido Móvil */}
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

            {/* Botón hamburguesa */}
            <button
              onClick={() => setDurum(!durum)}
              className="fa-solid fa-bars text-2xl cursor-pointer"
              aria-label="Toggle Navigation"
              aria-expanded={!durum}
            ></button>
          </div>
        </div>
      </div>
      {/* Audio oculto */}
      <audio ref={audioRef} src="/path-to-your-audio-file.mp3" autoPlay loop />
    </header>
  );
}

export default Navbar;
