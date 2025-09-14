import { useState, useEffect, useRef } from "react";
import { useAudio } from "@/context/AudioContext";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "@/assets/images/logo.png";
import { playSound } from "@/utils/soundUtils";
import SoundPopup from "@/components/layout/SoundPopup";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const { isMuted, setIsMuted } = useAudio();
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const scrollFunction = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  const toggleSound = () => {
    setIsMuted((prevMuted) => !prevMuted);
    setShowPopup(false);
  };

  const handleNavClick = (soundPath, section) => {
    trackClick({
      action: "click_nav_link",
      category: "Navbar",
      label: section,
    });
    setIsNavOpen(false);
    playSound(soundPath, isMuted);
  };

  const trackClick = ({ action, category, label }) => {
    window.gtag?.("event", action, {
      event_category: category,
      event_label: label,
    });
  };

  return (
    <header role="banner">
      <div
        className={`navbarcon fixed top-0 left-0 w-full z-40 text-primary  border-b border-white/10 transition-colors duration-75 ${
          isScrolled ? "bg-[#0B1223]" : "bg-transparent"
        }`}
        aria-label="Main Navigation"
      >
        <div className="w-full max-w-screen-lg p-6 mx-auto flex justify-between items-center">
          <AnchorLink
            href="#home"
            aria-label="Back to home"
            onClick={() =>
              trackClick({
                action: "click_logo",
                category: "Navbar",
                label: "Logo to Home",
              })
            }
          >
            <img
              src={logo}
              alt="Logo Jessica Arroyo"
              className="h-12"
            />
          </AnchorLink>
          <div className="flex items-center gap-2 lg:hidden relative">
            {showPopup && (
              <SoundPopup
                onClose={() => setShowPopup(false)}
                className="absolute -top-16 right-0"
              />
            )}
            <button
              onClick={toggleSound}
              aria-label={isMuted ? "Enable sound" : "Mute sound"}
              className="w-10 h-10 flex items-center justify-center text-white text-xl border border-dark rounded-full bg-dark transition-all duration-300"
            >
              <i
                className={`fa-solid ${
                  isMuted ? "fa-volume-xmark" : "fa-volume-high"
                }`}
                aria-hidden="true"
              />
            </button>
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label="Toggle Navigation Menu"
              aria-controls="primary-navigation"
              aria-expanded={isNavOpen}
              className="fa-solid fa-bars text-2xl cursor-pointer"
            />
          </div>
          <nav
            className={`${
              isNavOpen ? "flex" : "hidden"
            } flex-col lg:flex lg:flex-row justify-center items-center gap-y-4 lg:gap-x-8 absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-terciary lg:bg-transparent mt-6 lg:mt-0 pt-4 lg:pt-0`}
            role="navigation"
          >
            <ul
              id="primary-navigation"
              className="flex flex-col lg:flex-row items-center gap-y-4 lg:gap-x-8 text-sm md:text-lg"
              aria-label="Primary Menu"
            >
              {["home", "about", "experience", "skills", "projects"].map(
                (section) => (
                  <li key={section}>
                    <AnchorLink
                      href={`#${section}`}
                      className="
                      relative no-underline text-white transition-colors duration-300
                      hover:text-[#0a0a0a] md:hover:text-[#a2c3e4]
                      after:content-[''] after:absolute after:left-0 after:-bottom-[2px]
                      after:h-[2px] after:w-0 after:bg-[#0a0a0a] md:after:bg-[#6caff3]
                      after:transition-[width] after:duration-300 hover:after:w-full
                      text-[0.9rem] md:text-base
                    "
                      onClick={() =>
                        handleNavClick("/sounds/save.mp3", section)
                      }
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </AnchorLink>
                  </li>
                )
              )}
            </ul>
            <div className="relative group">
              <button
                onClick={() => {
                  trackClick({
                    action: "click_connect_button",
                    category: "Navbar",
                    label: "Let's Connect",
                  });
                  navigator.clipboard.writeText(
                    "jessica.arroyo.lebron@gmail.com"
                  );
                  alert("¡Correo copiado al portapapeles!");
                  handleNavClick("/sounds/item-get.mp3");
                }}
                aria-label="Copy email address to clipboard"
                className="border border-primary py-1 px-3 text-sm md:text-base text-primary font-bold bg-transparent hover:bg-primary hover:text-secondary rounded-lg transition-all duration-300 lg:ml-24"
              >
                Let's Connect
              </button>
            </div>
            <ul
              className="icon text-lg flex gap-4 lg:gap-6 mb-4 lg:mb-0 mt-4 lg:mt-0 items-center"
              aria-label="Social Media Links"
            >
              <li>
                <a
                  href="https://www.linkedin.com/in/jessica-arroyo-lebron/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn Profile"
                  className="w-10 h-10 border border-primary flex items-center justify-center rounded-full hover:bg-primary hover:text-secondary transition-all duration-300"
                  onClick={() =>
                    trackClick({
                      action: "click_social_link",
                      category: "Navbar",
                      label: "LinkedIn Profile",
                    })
                  }
                >
                  <i
                    className="fa-brands fa-linkedin"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jess-ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub Profile"
                  className="w-10 h-10 border border-primary flex items-center justify-center rounded-full hover:bg-primary 
                    hover:text-secondary transition-all duration-300"
                  onClick={() =>
                    trackClick({
                      action: "click_social_link",
                      category: "Navbar",
                      label: "GitHub Profile",
                    })
                  }
                >
                  <i
                    className="fa-brands fa-github"
                    aria-hidden="true"
                  ></i>
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
                  aria-label={isMuted ? "Enable sound" : "Mute sound"}
                  className="w-10 h-10 flex items-center justify-center text-black text-xl border border-primary rounded-full bg-primary transition-all duration-300"
                >
                  <i
                    className={`fa-solid ${
                      isMuted ? "fa-volume-xmark" : "fa-volume-high"
                    }`}
                    aria-hidden="true"
                  />
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
