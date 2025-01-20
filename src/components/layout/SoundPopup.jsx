const SoundPopup = ({ onClose }) => {
    return (
        <div
            onClick={onClose}
            className="absolute top-10 right-4 w-40 text-white text-opacity-70 text-base bg-black bg-opacity-50 px-6 py-4 animate-pulse rounded-xl shadow-lg cursor-pointer"
            role="alert"
        >
            <span className="text-sm font-medium block">
                Don't miss out! Turn on the sound.
            </span>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-white bg-blue-700 bg-opacity-50 hover:bg-blue-600 rounded-full text-sm focus:outline-none"
                aria-label="Close"
            >
                ✕
            </button>
        </div>
    );
};

export default SoundPopup;