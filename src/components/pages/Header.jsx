import React, { useState, useEffect } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import sombra from '@/assets/icons/sombra.svg';
import Navbar from '@/components/layout/Navbar';
import HeaderBackground from '@/components/common/HeaderBackground';
import Key from '@/components/common/Key';
import '@/styles/ShadowAnimation.css';
import '@/styles/KeyAnimation.css';
import { GradientButton } from '../common/GradientButton';

import Modal from '@/components/header/Modal';

function Header({ onPickup, isKeyPickedUp, isUnlocked }) {
  const [showHint, setShowHint] = useState(true);
  const [isFollowingMouse, setIsFollowingMouse] = useState(false);
  const [keyPosition, setKeyPosition] = useState({ x: 0, y: 0 });
  const [isHoveringKey, setIsHoveringKey] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isFollowingMouse) {
        setKeyPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isFollowingMouse]);

  const handlePickup = () => {
    setIsFollowingMouse(true);
    setShowHint(false);
    setTimeout(() => {
      setIsUnlocking(true);
      setTimeout(() => {
        setIsFollowingMouse(false);
        setIsUnlocking(false);
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
      }, 2000);
    }, 3000);
  };

  return (
    <div
      id='home'
      className='relative min-h-[120vh] md:min-h-[90vh] lg:min-h-[90vh] xl:min-h-[90vh] flex flex-col overflow-hidden'
    >
      <HeaderBackground />
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-6 wrapper flex flex-col justify-between h-full w-full relative z-10">
        <section className="relative flex flex-col md:flex-row lg:flex-row custom-xl:flex-row xl:flex-row md:justify-items-start mt-32 gap-5">
          <div>
            <p className='text-white text-3xl md:text-4xl lg:text-4xl font-bold'>
              I'm <img src="/favicon-j.svg" alt="Logo de Jessica Arroyo, desarrolladora web" className="inline-block align-middle mb-6 w-6 h-18" />essica
            </p>
            <div className="max-w-screen-xl mx-auto">
              <h1 className='text-white text-3xl md:text-4xl lg:text-4xl font-bold leading-tight'>
                <span className="text-primary block mb-1">Junior Fullstack</span>
                <span>Web Developer</span>
              </h1>
              <p className='text-white text-base md:text-lg lg:text-lg py-4 mr-10 sm:mr-36 md:mr-0 lg:mr-0'>
                My determination has driven me to take on challenges, participate in hackathons, and create solutions that stand out for their creativity and precision. Additionally, I have experience working in agile teams using the Scrum methodology, ensuring iterative and high-quality deliveries.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-start">
              <AnchorLink href="#about" offset="90">
                <GradientButton variant="variant">
                  More About me
                </GradientButton>

              </AnchorLink>
            </div>

          </div>
          <section className="relative flex items-center gap-8 mt-4 md:mt-36 md:ml-10 lg:mt-36 lg:ml-5">
            {/* Sombra interactiva */}
            <div className="relative banner-sombra w-[200px] h-[200px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] animate-float">
              <div
                className="group relative w-full h-full cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                <div className="group relative w-full h-full cursor-pointer" onClick={() => setShowModal(true)}>
                  {/* Imagen de la sombra */}
                  <img
                    className="w-full h-full"
                    src={sombra}
                    alt="Una sombra flotante decorativa, un Sincorazón de Kingdom Hearts"
                  />
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-white text-center bg-black bg-opacity-75 px-4 md:px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[150px] md:w-[250px] lg:w-[300px]">
                    <p className="text-sm md:text-base font-medium">
                      Click to discover the meaning behind this portfolio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              title="Kingdom Hearts and Me"
            />
            {!isFollowingMouse && (
              <div
                className={`relative banner-key w-[230px] h-[230px] md:w-[200px] md:h-[200px] lg:w-[230px] lg:h-[230px] ${isUnlocking ? 'animate-pulse' : ''}`}
                tabIndex="0"
                role="button"
                aria-label="Pickup the key to unlock the section below"
                onMouseEnter={() => setIsHoveringKey(true)}
                onMouseLeave={() => setIsHoveringKey(false)}
                onClick={handlePickup}
                onKeyDown={(e) => e.key === 'Enter' && handlePickup()}
              >
                <Key onPickup={onPickup} isUnlocked={isUnlocked} />
                {isHoveringKey && showHint && (
                  <p className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-75 px-3 py-1 rounded-lg animate-pulse">
                    Unlock the section below!
                  </p>
                )}
              </div>
            )}
            {isFollowingMouse && (
              <div
                style={{
                  position: 'fixed',
                  left: `${keyPosition.x}px`,
                  top: `${keyPosition.y}px`,
                  width: '100px',
                  height: '100px',
                  pointerEvents: 'none',
                  transform: 'translate(-50%, -50%) scale(1.2)',
                  zIndex: 50,
                }}
              >
                <Key isUnlocked={isUnlocked} />
              </div>
            )}
          </section>
        </section>
      </div>
      <div className="relative w-full h-48">
        {/* Degradado en curva */}
        <div
          className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-[rgba(11,18,35,0)] via-[rgba(11,18,35,0.8)] to-black"
          style={{
            clipPath: "ellipse(80% 70% at 50% 100%)",
          }}
        ></div>

        {/* Texto introductorio */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
          <p className="text-sm font-medium">Use the key to unlock the next section</p>
          <svg
            className="mx-auto mt-2 w-6 h-6 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;