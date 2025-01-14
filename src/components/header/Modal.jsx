import kingdomHeartsImage from "@/assets/images/kingdomHeartsImage.png";

const Modal = ({ isOpen, onClose, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:max-w-3xl p-4 md:p-6 lg:p-8 shadow-lg relative overflow-hidden">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                    aria-label="Cerrar"
                >
                    ✕
                </button>
                {title && (
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
                        {title}
                    </h2>
                )}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                    <div className="w-full sm:w-1/2 flex justify-center">
                        <img
                            className="w-full sm:w-auto max-h-[25vh] sm:max-h-[40vh] rounded object-contain"
                            src={kingdomHeartsImage}
                            alt="Imagen de Kingdom Hearts"
                        />
                    </div>
                    <div className="text-base md:text-base lg:text-base text-gray-700 w-full sm:w-1/2 max-h-[40vh] sm:max-h-[50vh] overflow-y-auto">
                        <p className="mb-4">
                            Kingdom Hearts is more than just a game to me. It’s a memory of my childhood and happy moments with my family. This portfolio reflects who I am, and this game represents a significant part of my story.
                        </p>
                        <p>
                            The story of the game revolves around friendship, the fight against darkness, and the power of the heart, something that has always inspired me.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

