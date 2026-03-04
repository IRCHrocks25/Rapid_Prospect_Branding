import { createContext, useState, ReactNode } from "react";

interface FormModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

export const FormModalContext = createContext<FormModalContextType | undefined>(undefined);

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <FormModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
    </FormModalContext.Provider>
  );
}
