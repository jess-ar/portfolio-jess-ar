import { useState, useEffect, useRef } from 'react';


const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const elementRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                setMousePosition({ x, y });

                elementRef.current.style.setProperty('--mouse-x', `${x}px`);
                elementRef.current.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        const element = elementRef.current;
        element?.addEventListener('mousemove', handleMouseMove);

        return () => {
            element?.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return { mousePosition, elementRef };
};

export default useMousePosition;