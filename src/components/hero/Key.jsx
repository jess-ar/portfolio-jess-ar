import { useState, useEffect } from 'react';
import llaveSvg from '@/assets/icons/espadallave.svg';
import llavePng from '@/assets/images/espadallave.png';
import '@/styles/KeyAnimation.css';

function Key({ onPickup, isUnlocked }) {
  const [isDragging, setIsDragging] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isReturning, setIsReturning] = useState(false);

  // Cursor tracking effect when dragged
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDragging]);

  // Effect to return the key to its original position when unlocked
  useEffect(() => {
    if (isUnlocked) {
      setIsDragging(false);
      setIsReturning(true);
      setTimeout(() => {
        setIsReturning(false);
      }, 1000);
      onPickup(false);
    }
  }, [isUnlocked, onPickup]);

  // Effect to detect clicks out of the key and release it
  useEffect(() => {
    const handleClickOutside = () => {
      if (isDragging) {
        handleDrop();
      }
    };
    if (isDragging) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isDragging]);

  const handlePickup = () => {
    if (!isUnlocked) {
      trackClick({
        action: "click_key_pickup",
        category: "Interactive Element",
        label: "Keyblade Grab",
      });
      onPickup(true);
      setIsDragging(true);
    }
  };  

  const handleDrop = () => {
    setIsDragging(false);
    setIsReturning(true);
    setTimeout(() => {
      setIsReturning(false);
    }, 1000);
  };

  const trackClick = ({ action, category, label }) => {
    window.gtag?.("event", action, {
      event_category: category,
      event_label: label,
    });
  };  

  return (
    <>
      {/* Key in original position */}
      {!isDragging && !isReturning && (
        <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52">
          <picture>
            <source srcSet={llaveSvg} type="image/svg+xml" />
            <img
              className={`w-full h-full cursor-pointer ${isUnlocked ? '' : 'animate-float'}`}
              src={llavePng}
              alt="Key to unlock about section"
              onMouseDown={handlePickup}
            />
          </picture>
        </div>
      )}

      {/* Key that follows the cursor while dragging */}
      {isDragging && !isUnlocked && (
        <div
          style={{
            position: 'fixed',
            top: cursorPosition.y - 80,
            left: cursorPosition.x - 80,
            pointerEvents: 'none',
            zIndex: 1000,
          }}
          className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52"
        >
          <picture>
            <source srcSet={llaveSvg} type="image/svg+xml" />
            <img
              src={llavePng}
              alt="Key in hand"
              className="w-full h-full"
            />
          </picture>
        </div>
      )}

      {/* Key in automatic return */}
      {isReturning && (
        <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52">
          <picture>
            <source srcSet={llaveSvg} type="image/svg+xml" />
            <img
              src={llavePng}
              alt="Key returning"
              className="w-full h-full"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                animation: 'return-to-origin 1s ease-out forwards',
              }}
            />
          </picture>
        </div>
      )}
    </>
  );
}

export default Key;
