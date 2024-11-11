import React, { useState, useEffect } from 'react';
import llave from '@/assets/images/espadallave.png';
import '@/styles/KeyAnimation.css';

function Key({ onPickup, isUnlocked }) {
    const [isDragging, setIsDragging] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isReturning, setIsReturning] = useState(false);

    // Efecto de seguimiento del cursor cuando se arrastra
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

    // Efecto para retornar la llave a su posición original al desbloquear
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

    // Efecto para detectar clics fuera de la llave y soltarla
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
            {/* Llave en su posición original */}
            {!isDragging && !isReturning && (
                <img
                    className={`w-96 cursor-pointer ${isUnlocked ? '' : 'animate-float'}`}
                    src={llave}
                    alt="Key to unlock about section"
                    onMouseDown={handlePickup}
                />
            )}

            {/* Llave que sigue al cursor mientras se arrastra */}
            {isDragging && !isUnlocked && (
                <img
                    src={llave}
                    alt="Key in hand"
                    style={{
                        position: 'fixed',
                        top: cursorPosition.y - 48,
                        left: cursorPosition.x - 48,
                        pointerEvents: 'none',
                        zIndex: 1000,
                        width: '72px',
                        transition: 'transform 0.1s ease-in-out',
                    }}
                />
            )}

            {/* Llave en retorno automático */}
            {isReturning && (
                <img
                    src={llave}
                    alt="Key returning"
                    style={{
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        animation: 'return-to-origin 1s ease-out forwards',
                    }}
                />
            )}
        </>
    );
}

export default Key;
