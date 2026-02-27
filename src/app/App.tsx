import LandingPage from "../imports/LandingPage";
import { FormProvider } from "./context/FormContext";
import { VideoProvider } from "./context/VideoContext";

export default function App() {
  return (
    <FormProvider>
      <VideoProvider>
        <div className="w-full overflow-x-hidden">
          <LandingPage />
        </div>
      </VideoProvider>
    </FormProvider>
  );
}
