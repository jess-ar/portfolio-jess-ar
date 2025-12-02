import { useState, useEffect } from 'react';
import llaveSvg from '@/assets/icons/espadallave.svg';
import llavePng from '@/assets/images/espadallave.png';
import '@/styles/KeyAnimation.css';

function Key({ onPickup, isUnlocked }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isPickedWithKeyboard, setIsPickedWithKeyboard] = useState(false);
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
      setIsPickedWithKeyboard(false);
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
      // Remove keyboard click handling - let LockOverlay handle it
    };

    const handleEscape = (e) => {
      if (e.key === "Escape" && isPickedWithKeyboard) {
        setIsPickedWithKeyboard(false);
        onPickup(false);
      }
    };

    if (isDragging) {
      window.addEventListener("click", handleClickOutside);
    }
    
    if (isPickedWithKeyboard) {
      window.addEventListener("keydown", handleEscape);
    }
    
    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isDragging, isPickedWithKeyboard]);

  const handlePickup = () => {
    if (!isUnlocked) {
      trackClick({
        action: "click_key_pickup",
        category: "Interactive Element",
        label: "Keyblade Grab - Mouse",
      });
      onPickup(true);
      setIsDragging(true);
    }
  };

  const handleKeyboardPickup = () => {
    if (!isUnlocked) {
      trackClick({
        action: "click_key_pickup",
        category: "Interactive Element",
        label: "Keyblade Grab - Keyboard",
      });
      onPickup(true);
      setIsPickedWithKeyboard(true);
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
      {!isDragging && !isPickedWithKeyboard && !isReturning && (
        <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52">
          <picture>
            <source srcSet={llaveSvg} type="image/svg+xml" />
            <img
              className={`
                w-full h-full cursor-pointer 
                ${isUnlocked ? '' : 'animate-float'}
                rounded-lg
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                focus-visible:ring-offset-2
                focus-visible:ring-offset-transparent
                transition-all duration-200
              `}
              src={llavePng}
              alt="Key to unlock about section - Press Enter or Space to pick up"
              onMouseDown={handlePickup}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && !isUnlocked) {
                  e.preventDefault();
                  handleKeyboardPickup();
                }
              }}
            />
          </picture>
        </div>
      )}

      {/* Key picked up with keyboard - fixed position */}
      {isPickedWithKeyboard && !isUnlocked && (
        <div
          className="
            fixed top-6 right-6
            w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40
            pointer-events-none animate-pulse
            z-[60]
          "
          aria-hidden="true"
        >
          <picture>
            <source srcSet={llaveSvg} type="image/svg+xml" />
            <img
              src={llavePng}
              alt=""
              className="w-full h-full"
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
          aria-hidden="true"
        >
          <picture>
            <source srcSet={llaveSvg} type="image/svg+xml" />
            <img
              src={llavePng}
              alt=""
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
              alt=""
              className="w-full h-full"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                animation: 'return-to-origin 1s ease-out forwards',
              }}
              aria-hidden="true"
            />
          </picture>
        </div>
      )}
    </>
  );
}

export default Key;
