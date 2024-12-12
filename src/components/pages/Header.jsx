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

      <div className="wrapper flex flex-col-reverse lg:flex-row justify-between items-center h-full w-full px-6 lg:px-20 relative z-10">
        {/* Contenido principal */}
        <div className="content text-center lg:text-left mt-6 lg:mt-0">
          <p className='text-primary text-4xl lg:text-5xl font-bold'>Hi,</p>
          <p className='text-primary text-4xl lg:text-5xl font-bold'>
            I'm <img src="/favicon-j.svg" alt="Logo J" className="inline-block align-middle mb-1 lg:mb-8 mr-0.5" />essica
          </p>
          <h1 className='text-primary text-5xl lg:text-6xl font-bold mt-2'>
            <span className="text-primary">Junior Fullstack</span> <br />
            <span>Web Developer</span>
          </h1>

          <h2 className='text-primary text-lg lg:text-3xl py-4 max-w-md lg:max-w-2xl mx-auto lg:mx-0'>
            Focused on building seamless web experiences.
          </h2>

          <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
            <AnchorLink href="#about" offset="90">
              <Button text="More About me" />
            </AnchorLink>
          </div>
        </div>

        {/* Componente Key para manejar la lógica de la llave */}
        <div className="image banner-astronout1 w-[50px] lg:w-[100px] flex flex-col items-center lg:absolute lg:right-10">
          <Key onPickup={onPickup} isUnlocked={isUnlocked} />
        </div>

        {/* SVG de sombra */}
        <div className="image banner-astronout w-[200px] md:w-[250px] lg:w-[300px] hidden lg:flex lg:absolute lg:bottom-10 lg:right-10">
          <img className='w-full' src={sombra} alt="Shadow" />
        </div>
      </div>

      {/* Gradiente al final */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-secondary"></div>
    </div>
  );
}

export default Header;
