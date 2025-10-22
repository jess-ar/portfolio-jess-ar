import { useState, useEffect } from 'react';
import Shadow from '@/components/hero/Shadow';
import Key from '@/components/hero/Key';
import Modal from '@/components/hero/Modal';

const KeyShadowSection = ({ onPickup, isUnlocked }) => {
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
    <section className="relative flex flex-row justify-center items-center lg:ml-8 mr-16 gap-10 min-h-[50vh] mb-20 md:mt-20">
      <div className="relative banner-sombra w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] animate-float">
        <Shadow onClick={() => setShowModal(true)} />
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Kingdom Hearts and Me"
      />

      {!isFollowingMouse && (
        <div
          className={`relative banner-key w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[230px] lg:h-[230px] ${isUnlocking ? 'animate-pulse' : ''
            }`}
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
            <p className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs bg-black bg-opacity-75 px-4 py-1 rounded-lg animate-pulse whitespace-nowrap">
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
            width: '80px',
            height: '80px',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%) scale(1.2)',
            zIndex: 50,
          }}
        >
          <Key isUnlocked={isUnlocked} />
        </div>
      )}
    </section>
  );
};

export default KeyShadowSection;