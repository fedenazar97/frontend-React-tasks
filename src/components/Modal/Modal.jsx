const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center text-center">
      <div className="w-[600px] flex flex-col justify-center">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
