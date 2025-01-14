import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "@/assets/icons/logo.svg";

function Navbar() {
  const [durum, setDurum] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

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
          <a href="#home" aria-label="Back to home">
            <img src={logo} alt="Jessica Arroyo Lebrón Logo" className="h-12" />
          </a>

          {/* Botón hamburguesa para móvil */}
          <button
            onClick={() => setDurum(!durum)}
            className="fa-solid fa-bars lg:hidden text-2xl cursor-pointer"
            aria-label="Toggle Navigation"
            aria-expanded={!durum}
          ></button>

          <nav
            className={`${
              durum ? "hidden" : "flex"
            } flex-col lg:flex lg:flex-row justify-center items-center gap-y-4 lg:gap-x-8 absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-terciary lg:bg-transparent pt-4 lg:pt-0`}
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

            <div className="relative group">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "jessica.arroyo.lebron@gmail.com"
                  );
                  alert("¡Correo copiado al portapapeles!");
                  handleLinkClick();
                }}
                className="border border-primary py-1 px-3 text-sm md:text-base text-primary font-bold bg-transparent hover:bg-primary hover:text-secondary rounded-lg transition-all duration-300"
                aria-label="Copy email address to clipboard"
              >
                Let's Connect
              </button>
            </div>

            {/* Iconos de redes sociales */}
            <ul
              className="icon text-lg flex gap-4 lg:gap-6 mb-4 lg:mb-0 mt-4 lg:mt-0"
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
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;