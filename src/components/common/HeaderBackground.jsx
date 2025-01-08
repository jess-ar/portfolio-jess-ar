import { useEffect, useState } from 'react';
import '@/styles/shooting-stars.css';

const HeaderBackground = () => {
    const stars = Array.from({ length: 10 });
    const shootingStars = Array.from({ length: 50 });

    const [shootingStarActive, setShootingStarActive] = useState(Array(10).fill(false));

    useEffect(() => {
        const intervals = shootingStars.map((_, index) =>
            setInterval(() => {
                setShootingStarActive((prevState) => {
                    const newState = [...prevState];
                    newState[index] = true;
                    return newState;
                });

                setTimeout(() => {
                    setShootingStarActive((prevState) => {
                        const newState = [...prevState];
                        newState[index] = false;
                        return newState;
                    });
                }, 1000);
            }, Math.random() * 1000 + 500)
        );

        return () => {
            intervals.forEach(clearInterval);
        };
    }, []);

    return (
        <div className="about-section absolute inset-0 w-full h-full bg-gradient-to-b from-[#0B1223] to-[#0B3D65] bg-center bg-cover bg-no-repeat z-0">
            <div className="shooting-star-white"></div>
            <div className="shooting-star-white"></div>
            <div className="shooting-star-white"></div>
            <div className="shooting-star-white"></div>
            <div className="shooting-star-white"></div>
            <div className="shooting-star-white"></div>
            <div className="shooting-star-white"></div>
            <div className="shooting-star-white"></div>
            <div className="shooting-star-white"></div>
            <div className="shooting-star-white"></div>
            {stars.map((_, index) => (
                <div
                    key={index}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: `${Math.random() * 2 + 1}px`,
                        height: `${Math.random() * 2 + 1}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.8 + 0.2,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default HeaderBackground;