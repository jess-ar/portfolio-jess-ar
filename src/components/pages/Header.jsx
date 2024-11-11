import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import sombra from '@/assets/icons/sombra.svg';
import Navbar from '@/components/layout/Navbar';
import Button from '@/components/common/Button';
import HeaderBackground from '@/components/common/HeaderBackground';
import Key from '@/components/common/Key';

function Header({ onPickup, isKeyPickedUp, isUnlocked }) {
  return (
    <div id='home' className='relative h-screen flex flex-col'>
      <HeaderBackground />
      <Navbar />

      <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6 relative z-10">
        <div className="content lg:text-center">
          <p className='text-white text-5xl font-bold'>Hi,</p>
          <p className='text-white text-5xl font-bold'>
            I'm <img src="/favicon-j.svg" alt="Logo J" className="inline-block align-middle mb-8 mr-0.5" />essica,
          </p>
          <h1 className='text-white text-6xl font-bold mt-2'>
            <span className="text-primary">Junior Fullstack</span> <br />
            <span>Web Developer</span>
          </h1>

          <h2 className='text-white text-3xl py-4 max-w-2xl'>Focused on building seamless web experiences.</h2>

          <AnchorLink href="#about" offset="90">
            <Button text="More About me" />
          </AnchorLink>

          <button className='text-white text-2xl mt-4'>Let's Connect <i className="fa-solid fa-arrow-right text-lg p-[2px]"></i></button>
        </div>

        {/* Componente Key para manejar la lógica de la llave */}
        <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex flex-col items-center">
          <Key onPickup={onPickup} isUnlocked={isUnlocked} />
        </div>

        {/* SVG de sombra */}
        <div className="image banner-astronout lg:hidden absolute w-[300px] flex">
          <img className='w-60 ast-img' src={sombra} alt="Shadow" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
}

export default Header;
