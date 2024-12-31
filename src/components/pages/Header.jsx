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
    <div id='home' className='relative h-screen flex flex-col overflow-hidden'>
      <HeaderBackground />
      <Navbar />

      <div className="wrapper flex flex-col justify-between h-full w-full px-6 relative z-10">
        {/* Contenido principal */}
        <div className="content text-left pl-2 pt-[150px] lg:flex lg:items-center lg:gap-[68.22px]">
          <div>
            <p className='text-white text-3xl md:text-4xl lg:text-5xl font-bold'>Hi,</p>
            <p className='text-white text-3xl md:text-4xl lg:text-5xl font-bold'>
              I'm <img src="/favicon-j.svg" alt="Logo J" className="inline-block align-middle mb-4 md:mb-6 lg:mb-8 mr-0.5 w-4 md:w-6 lg:w-8 h-16 md:h-16 lg:h-20" />essica
            </p>
            <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold mt-2'>
              <span className="text-primary">Junior Fullstack</span> <br />
              <span>Web Developer</span>
            </h1>

            <h2 className='text-white text-base md:text-lg lg:text-3xl py-2 md:py-3 lg:py-4 max-w-md lg:max-w-2xl mx-0'>
              Focused on building seamless web experiences.
            </h2>

            <div className="flex flex-col lg:flex-row gap-4 items-start">
              <AnchorLink href="#about" offset="90">
                <Button text="More About me" className="text-sm md:text-base lg:text-lg py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8" />
              </AnchorLink>
            </div>
          </div>

          {/* Componente Key y sombra */}
          <div className="relative flex flex-row items-center lg:ml-32 md:justify-center gap-5 md:gap-5 lg:gap-[80px]">
            <div className="relative banner-sombra w-[150px] h-[198.96px] md:w-[223px] md:h-[295px] lg:w-[223px] lg:h-[295px] animate-float">
              <img className='w-full h-full lg:mt-20 md:mt-10' src={sombra} alt="Shadow" />
            </div>
            {!isFollowingMouse && (
              <div 
                className={`relative banner-key w-[245px] h-[245px] md:w-[368px] md:h-[368px] lg:w-[368px] lg:h-[368px] ${isUnlocking ? 'animate-pulse' : ''}`} 
                onMouseEnter={() => setIsHoveringKey(true)} 
                onMouseLeave={() => setIsHoveringKey(false)}
                onClick={handlePickup}
              >
                <Key onPickup={onPickup} isUnlocked={isUnlocked} />
                {isHoveringKey && showHint && (
                  <p className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs md:text-sm lg:text-base bg-black bg-opacity-75 px-3 py-1 rounded-lg animate-pulse">
                    Unlock the section below!
                  </p>
                )}
              </div>
            )}
            {isFollowingMouse && (
              <div style={{ position: 'fixed', left: `${keyPosition.x}px`, top: `${keyPosition.y}px`, width: '100px', height: '100px', pointerEvents: 'none', transform: 'translate(-50%, -50%) scale(1.2)', zIndex: 50 }}>
                <Key isUnlocked={isUnlocked} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Gradiente al final */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
}

export default Header;
