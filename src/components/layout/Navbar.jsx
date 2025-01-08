import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from '@/assets/icons/logo.svg';

function Navbar() {
  const [durum, setDurum] = useState(true);

  useEffect(() => {
    const scrollFunction = () => {
      const navbar = document.querySelector(".navbarcon");
      if (window.scrollY > 80) {
        navbar.style.backgroundColor = "#0B1223";
      } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
      }
    };

    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  const handleLinkClick = () => {
    setDurum(true);
  };

  return (
    <>
      <div className="navbarcon flex justify-between items-center p-6 bg-transparent z-40 text-primary fixed w-full shadow-[0px_4px_10px_rgba(255,255,255,0.2)]">
        <img src={logo} alt="Jess-ar Logo" className="h-10" />
        
        {/* Botón hamburguesa para móvil */}
        <i
          onClick={() => setDurum(!durum)}
          className="fa-solid fa-bars lg:hidden text-2xl cursor-pointer"
        ></i>
        
        <nav
          className={`${durum ? "hidden" : "flex"
            } flex-col lg:flex lg:flex-row justify-center items-center gap-y-4 lg:gap-x-10 absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-terciary lg:bg-transparent`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-y-4 lg:gap-x-10 text-sm md:text-lg ">
            <li className="mt-5">
              <AnchorLink href="#home" className="navbar-link" onClick={handleLinkClick}>
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about" className="navbar-link" onClick={handleLinkClick}>
                About me
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#skills" className="navbar-link" onClick={handleLinkClick}>
                Skills
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#projects" className="navbar-link" onClick={handleLinkClick}>
                Projects
              </AnchorLink>
            </li>
          </ul>

          <div className="relative group">
            <button
              onClick={() => {
                navigator.clipboard.writeText("jessica.arroyo.lebron@gmail.com");
                alert("¡Correo copiado al portapapeles!");
                handleLinkClick();
              }}
              className=" border border-primary py-1 px-3 text-sm md:text-base text-primary font-bold bg-transparent hover:bg-primary hover:text-secondary rounded-lg transition-all duration-300"
            >
              Let's Connect
            </button>
          </div>

          {/* Iconos de redes sociales */}
          <div className="icon text-lg flex gap-4 lg:gap-6 mb-4 lg:mb-0 mt-4 lg:mt-0">
            <a
              href="https://www.linkedin.com/in/jessica-arroyo-lebron/"
              target="_blank"
              className=" w-10 h-10 border border-primary flex items-center justify-center rounded-full hover:bg-primary hover:text-secondary transition-all duration-300"
              onClick={handleLinkClick}
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/jess-ar"
              target="_blank"
              className="w-10 h-10 border border-primary flex items-center justify-center rounded-full hover:bg-primary hover:text-secondary transition-all duration-300"
              onClick={handleLinkClick}
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;