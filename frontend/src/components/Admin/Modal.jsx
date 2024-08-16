import {AiOutlineClose} from "react-icons/ai";

export default function Modal({open, onClose, children}) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
          fixed inset-0 flex justify-center items-center transition-colors
          ${open ? "visible bg-black/20" : "invisible"} z-10
        `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
            bg-zinc-800 outline-blue-500 rounded-xl shadow p-6 transition-all
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <AiOutlineClose size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
