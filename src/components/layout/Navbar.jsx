import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from '@/assets/icons/logo.svg';

function Navbar({ setCurrentPage }) {
  const [durum, setDurum] = useState(true);

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        const navbar = document.querySelector(".navbarcon");
        if (navbar) {
          navbar.style.backgroundColor = "#0B1223";
        }
      } else {
        const navbar = document.querySelector(".navbarcon");
        const tl = document.querySelector(".tl");
        if (navbar) {
          navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
        if (tl) {
          tl.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <>
      <div className="navbarcon flex justify-between items-center px-6 md:px-8 py-4 md:py-4 bg-transparent z-40 text-primary fixed w-full shadow-[0px_4px_10px_rgba(255,255,255,0.2)]">
        <img src={logo} alt="Jess-ar Logo" className="w-24 md:w-28 h-10" />
        {/* Botón hamburguesa para móvil */}
        <i
          onClick={() => setDurum(!durum)}
          className="fa-solid fa-bars lg:hidden text-2xl cursor-pointer"
        ></i>
        {/* Menú de navegación */}
        <nav
          className={`${durum ? "hidden" : "flex"
            } flex-col lg:flex lg:flex-row justify-center items-center gap-y-4 lg:gap-x-10 absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-terciary lg:bg-transparent`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-y-4 lg:gap-x-10 text-sm md:text-lg mt-4 lg:mt-0">
            <li>
              <AnchorLink href="#home" className="navbar-link" onClick={() => setCurrentPage("home")}>
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about" className="navbar-link" onClick={() => setCurrentPage("about")}>
                About me
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#skills" className="navbar-link" onClick={() => setCurrentPage("skills")}>
                Skills
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#projects" className="navbar-link" onClick={() => setCurrentPage("projects")}>
                Projects
              </AnchorLink>
            </li>
          </ul>
          {/* Botón Let's Connect */}
          <div className="relative group mb-2 mt-4 lg:mt-0">
            <button
              onClick={() => {
                navigator.clipboard.writeText("jessica.arroyo.lebron@gmail.com");
                alert("¡Correo copiado al portapapeles!");
              }}
              className=" border border-primary py-2 px-4 text-sm md:text-base text-primary font-bold bg-transparent hover:bg-primary hover:text-secondary rounded transition-all duration-300"
            >
              Let's Connect
            </button>
            <span className=" text-center absolute -bottom-10 lg:-bottom-12 left-1/2 transform -translate-x-1/2 bg-secondary text-primary text-xs md:text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              jessica.arroyo.lebron@gmail.com 
              <p>-Click to copy-</p>
            </span>
          </div>

          {/* Iconos de redes sociales */}
          <div className="icon text-lg flex gap-4 lg:gap-6 mb-4 lg:mb-0 mt-4 lg:mt-0">
            <a
              href="https://www.linkedin.com/in/jessica-arroyo-lebron/"
              target="_blank"
              className=" w-10 h-10 border border-primary flex items-center justify-center rounded-full hover:bg-primary hover:text-secondary transition-all duration-300"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/jess-ar"
              target="_blank"
              className="w-10 h-10 border border-primary flex items-center justify-center rounded-full hover:bg-primary hover:text-secondary transition-all duration-300"
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
