import { useContext } from "react";
import { FormModalContext } from "../contexts/FormModalContext";

export function useFormModal() {
  const context = useContext(FormModalContext);
  if (context === undefined) {
    throw new Error("useFormModal must be used within a FormModalProvider");
  }
  return context;
}

