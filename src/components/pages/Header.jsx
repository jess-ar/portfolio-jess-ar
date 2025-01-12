import React, { useState, useEffect } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import sombra from '@/assets/icons/sombra.svg';
import Navbar from '@/components/layout/Navbar';
import Button from '@/components/common/Button';
import HeaderBackground from '@/components/common/HeaderBackground';
import Key from '@/components/common/Key';
import '@/styles/ShadowAnimation.css';
import '@/styles/KeyAnimation.css';

function Header({ onPickup, isKeyPickedUp, isUnlocked }) {
  const [showHint, setShowHint] = useState(true);
  const [isFollowingMouse, setIsFollowingMouse] = useState(false);
  const [keyPosition, setKeyPosition] = useState({ x: 0, y: 0 });
  const [isHoveringKey, setIsHoveringKey] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

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
      className='relative min-h-[90vh] md:min-h-[120vh] lg:min-h-[120vh] xl:min-h-[90vh] flex flex-col overflow-hidden'
    >
      <HeaderBackground />
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-6 wrapper flex flex-col justify-between h-full w-full relative z-10">
        <section className="relative flex flex-col lg:flex-col custom-xl:flex-col xl:flex-row md:justify-items-start mt-32 gap-5 sm:gap-6 md:gap-0 lg:gap-0 xl:gap-20">
          <div>
            <p className='text-white text-3xl md:text-4xl lg:text-4xl font-bold xl:text-5xl 2xl:text-5xl'>
              I'm <img src="/favicon-j.svg" alt="Logo de Jessica Arroyo, desarrolladora web" className="inline-block align-middle mb-4 md:mb-8 lg:mb-8 mr-0.5 w-4 md:w-8 lg:w-8 h-16 md:h-20 lg:h-20" />essica
            </p>
            <div className="max-w-screen-xl mx-auto ">
              <h1 className='text-white text-3xl md:text-5xl 2xl:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight'>
                <span className="text-primary block mb-1">Junior Fullstack</span>
                <span>Web Developer</span>
              </h1>
              <p className='text-white text-base md:text-2xl lg:text-2xl xl:text-2xl py-2 md:py-4 lg:py-4 xl:py-6 max-w-full'>
                Focused on building seamless web experiences.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-start">
              <AnchorLink href="#about" offset="90">
                <Button text="More About me" className="text-sm md:text-lg lg:text-lg py-2 px-4 md:py-4 md:px-8 lg:py-4 lg:px-8" />
              </AnchorLink>
            </div>
          </div>
          <section className="relative flex flex-row items-center md:justify-center xl:mt-56 gap-1 sm:gap-1 md:gap-8 lg:gap-8 pb-8 md:pb-16 lg:pb-30 mt-3">
            <div className="md:mt-12 relative banner-sombra w-[180px] h-[180px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] animate-float ">
              <img className='w-full h-full' src={sombra} alt="Una sombra flotante decorativa, un Sincorazón de Kingdom Hearts" />
            </div>
            {!isFollowingMouse && (
              <div
                className={`relative banner-key w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[200px] ${isUnlocking ? 'animate-pulse' : ''}`}
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
                  <p className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm md:text-base lg:text-lg bg-black bg-opacity-75 px-3 py-1 rounded-lg animate-pulse pb-30">
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
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-[rgba(11,18,35,0)] via-[rgba(11,18,35,0.8)] to-black"></div>
    </div>
  );
}

export default Header;