

const StarryBackground = () => {
    const stars = Array.from({ length: 50 });

    return (
        <div className="absolute inset-0 w-screen h-screen bg-gradient-to-b from-[#0B1223] to-[#0B3D65] bg-center bg-cover bg-no-repeat z-0">
            {stars.map((_, index) => (
                <div
                    key={index}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.8 + 0.2,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default StarryBackground;
