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

  return (
    <>
      {/* Key in original position */}
      {!isDragging && !isReturning && (
        <picture>
          <source srcSet={llaveSvg} type="image/svg+xml" />
          <img
            className={`w-96 cursor-pointer ${isUnlocked ? '' : 'animate-float'}`}
            src={llavePng}
            alt="Key to unlock about section"
            onMouseDown={handlePickup}
          />
        </picture>
      )}

      {/* Key that follows the cursor while dragging */}
      {isDragging && !isUnlocked && (
        <picture>
          <source srcSet={llaveSvg} type="image/svg+xml" />
          <img
            src={llavePng}
            alt="Key in hand"
            style={{
              position: 'fixed',
              top: cursorPosition.y - 48,
              left: cursorPosition.x - 48,
              pointerEvents: 'none',
              zIndex: 1000,
              width: '150px',
              transition: 'transform 0.1s ease-in-out',
            }}
          />
        </picture>
      )}

      {/* Key in automatic return */}
      {isReturning && (
        <picture>
          <source srcSet={llaveSvg} type="image/svg+xml" />
          <img
            src={llavePng}
            alt="Key returning"
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              animation: 'return-to-origin 1s ease-out forwards',
            }}
          />
        </picture>
      )}
    </>
  );
}

export default Key;