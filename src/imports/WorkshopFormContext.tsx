"use client";

import * as React from "react";

interface WorkshopFormContextType {
  openForm: () => void;
  closeForm: () => void;
  isOpen: boolean;
}

const WorkshopFormContext = React.createContext<WorkshopFormContextType | undefined>(undefined);

export const WorkshopFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openForm = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeForm = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <WorkshopFormContext.Provider value={{ openForm, closeForm, isOpen }}>
      {children}
    </WorkshopFormContext.Provider>
  );
};

export const useWorkshopForm = () => {
  const context = React.useContext(WorkshopFormContext);
  if (context === undefined) {
    throw new Error("useWorkshopForm must be used within a WorkshopFormProvider");
  }
  return context;
};

