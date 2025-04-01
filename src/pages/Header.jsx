import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import HeaderBackground from '@/components/header/HeaderBackground';
import KeyShadowSection from '@/components/header/KeyShadowSection';
import '@/styles/ShadowAnimation.css';
import '@/styles/KeyAnimation.css';
import { GradientButton } from '@/components/common/GradientButton';

function Header({ onPickup, isUnlocked }) {
  return (
    <div
      id='home'
      className='relative min-h-screen md:min-h-[80vh] lg:min-h-[80vh] xl:min-h-[80vh] flex flex-col overflow-hidden pt-28 scroll -mb-60'
    >
      <HeaderBackground />
      <div className="max-w-screen-lg relative w-full min-h-screen mx-auto pb-28 px-4 wrapper flex flex-col justify-start z-10">
        <section className="relative flex flex-col md:flex-row lg:flex-row xl:flex-row md:justify-items-start gap-2">
          {/* Text on the left */}
          <div>
            <p className="text-white text-3xl md:text-4xl lg:text-4xl font-bold mt-16">
              I'm <img 
                src="/favicon-j.svg" 
                alt="Logo de Jessica Arroyo, desarrolladora web" 
                className="inline-block align-middle mb-6 w-6 h-18" 
              />essica
            </p>
            <div className="max-w-screen-xl mx-auto">
              <h1 className="text-white text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
                <span className="text-primary block mb-1">Junior Fullstack</span>
                <span>Web Developer</span>
              </h1>
              <p className="text-white text-base md:text-lg lg:text-lg py-4 mr-10 sm:mr-36 md:mr-0 lg:mr-0">
                My determination has driven me to take on challenges, participate in hackathons, and create solutions that stand out for their creativity and precision. Additionally, I have experience working in agile teams using the Scrum methodology, ensuring iterative and high-quality deliveries.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 items-start mt-4">
              <AnchorLink href="#about" offset="90">
                <GradientButton variant="variant">
                  More About me
                </GradientButton>
              </AnchorLink>
            </div>
          </div>
          {/* Component of the Key + Shadow */}
          <KeyShadowSection onPickup={onPickup} isUnlocked={isUnlocked} />
        </section>
      </div>
    </div>
  );
}

export default Header;
