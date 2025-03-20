import sombra from '@/assets/icons/sombra.svg';

const Shadow = ({ onClick }) => {
    return (
        <div className="relative banner-sombra w-52 h-52 animate-float">
            <div
                className="group relative w-full h-full cursor-pointer"
                onClick={onClick}
            >
                <img
                    className="w-full h-full"
                    src={sombra}
                    alt="Una sombra flotante decorativa, un Sincorazón de Kingdom Hearts"
                />
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-white text-center bg-black bg-opacity-75 px-4 md:px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-52 md:w-52 lg:w-52">
                    <p className="text-sm md:text-base font-medium">
                        Click to discover the meaning behind this portfolio.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Shadow;