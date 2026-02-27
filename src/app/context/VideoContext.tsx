import { createContext, useContext, useState, ReactNode } from "react";
import VideoModal from "../components/VideoModal";

interface VideoContextType {
  openVideo: () => void;
  closeVideo: () => void;
  isOpen: boolean;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

// Component export for Fast Refresh
export function VideoProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  return (
    <VideoContext.Provider value={{ openVideo, closeVideo, isOpen }}>
      {children}
      <VideoModal open={isOpen} onOpenChange={setIsOpen} />
    </VideoContext.Provider>
  );
}

VideoProvider.displayName = "VideoProvider";

export function useVideo() {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
}

