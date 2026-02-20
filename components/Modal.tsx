import { type ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
    onClose: () => void;
    children: ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />
            <div className="relative bg-white w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden transform transition-all">

                <div className="flex items-center justify-end p-4 border-b border-gray-100">
                    <button
                        onClick={onClose}
                        className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};
export default Modal;