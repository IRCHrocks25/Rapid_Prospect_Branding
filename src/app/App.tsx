import LandingPage from "../imports/LandingPage";
import FormModal from "./components/FormModal";
import { FormModalProvider } from "./contexts/FormModalContext";
import { useFormModal } from "./hooks/useFormModal";

function AppContent() {
  const { isOpen, closeModal } = useFormModal();

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <LandingPage />
      <FormModal open={isOpen} onOpenChange={(open) => !open && closeModal()} />
    </div>
  );
}

export default function App() {
  return (
    <FormModalProvider>
      <AppContent />
    </FormModalProvider>
  );
}