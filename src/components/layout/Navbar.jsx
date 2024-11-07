import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from '@/assets/icons/logo.svg';

function Navbar() {
  const [durum, setDurum] = useState(true);

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        const navbar = document.querySelector(".navbarcon");
        if (navbar) {
          navbar.style.backgroundColor = "#171717";
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
      <div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full shadow-[0px_4px_10px_rgba(255,255,255,0.2)]">

        <img src={logo} alt="Jess-ar Logo" className="w-28 h-10" />

        <nav
          className={`flex justify-center items-center gap-x-10 ${
            durum && "lg:hidden"
          } lg:fixed lg:top-0 -z-20 lg:flex-col lg:w-full lg:bg-[#171717] lg:h-[450px] lg:left-0 h-full lg:items-start lg:pl-6 cursor-pointer lg:pt-20`}
        >
          <ul className="flex gap-10 text-2xl mr-4 lg:flex-col lg:gap-6">
            <li className="bla">
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li className="bla">
              <AnchorLink href="#about" offset="90">About me</AnchorLink>
            </li>
            <li className="bla">
              <AnchorLink href="#skills">Skills</AnchorLink>
            </li>
            <li className="bla">
              <AnchorLink href="#projects">Projects</AnchorLink>
            </li>
          </ul>

          <div className="icon text-lg flex gap-4 lg:gap-8 lg:my-10">
            <a href="https://x.com/jess_arDEV" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>

            <a href="https://www.linkedin.com/in/jessica-arroyo-lebron/" target="_blank">
              <i className="fa-brands fa-linkedin border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://github.com/jess-ar" target="_blank">
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>

          <div className="btn">
            <button className="border-[1px] border-white border-solid py-2 px-4 hover:bg-white hover:text-black font-bold">
              Let's Connect
            </button>
          </div>
        </nav>

        <i
          onClick={() => setDurum(!durum)}
          className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"
        ></i>
      </div>
    </>
  );
}

export default Navbar;
