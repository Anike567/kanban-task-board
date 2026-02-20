import { createContext, useState, type ReactNode } from 'react';

interface ModalContextType {
    closeModal : ()=>void
    setModal : (content : ReactNode)=>void
    content : ReactNode
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);
    const setModal = (content : ReactNode)=>setModalContent(content);
    const closeModal = ()=>setModalContent(null);
    return (
        <ModalContext.Provider value={{ closeModal, setModal, content : modalContent}}>
            {children}
        </ModalContext.Provider>
    );
};

