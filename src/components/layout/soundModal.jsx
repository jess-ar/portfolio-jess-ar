
import ReactDOM from "react-dom";

const SoundModal = ({ onAlwaysAccept, onSessionAccept, onDecline }) => {
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    console.error("El contenedor del modal no existe. Asegúrate de tener un elemento con id='modal-root'.");
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
      style={{ backdropFilter: "blur(6px)" }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 text-center space-y-4">
        <p className="text-lg font-medium">¿Deseas activar el sonido de fondo?</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onAlwaysAccept}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Sí, siempre
          </button>
          <button
            onClick={onSessionAccept}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sí, solo ahora
          </button>
          <button
            onClick={onDecline}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            No
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};


export default SoundModal;
