import funnelStrategy from "figma:asset/04fe8594d0fb529130742df214c357f5fd148e43.png";
import landingPages from "figma:asset/18c70c95702ee092a1aa916b5ebbe8bd30d829eb.png";
import brandStrategy from "figma:asset/8cfa8d09566ee1841c4d5242f29925052683ddab.png";
import visualIdentity from "figma:asset/3eec52c303e87a90c8248606cbdf13149e825b67.png";
import websiteDesign from "figma:asset/1ee5afb52d10f248f1cbed0cd069cbe981f57c19.png";

const thumbnails = [
  { src: funnelStrategy, label: "Funnel Strategy" },
  { src: landingPages, label: "Landing Pages" },
  { src: brandStrategy, label: "Brand Strategy" },
  { src: visualIdentity, label: "Visual Identity" },
  { src: websiteDesign, label: "Website Design" },
];

// Duplicate for seamless infinite loop
const allThumbnails = [...thumbnails, ...thumbnails];

export function ThumbnailStrip() {
  return (
    <div
      className="relative w-full overflow-hidden bg-[#140c07]"
      style={{ paddingTop: "48px", paddingBottom: "48px" }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #140c07, transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #140c07, transparent)",
        }}
      />

      {/* Scrolling track */}
      <div
        className="flex gap-5"
        style={{
          width: "max-content",
          animation: "thumbnailScroll 40s linear infinite",
        }}
      >
        {allThumbnails.map((thumb, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 rounded-md overflow-hidden group"
            style={{
              width: "480px",
              height: "200px",
              border: "1px solid rgba(233,180,108,0.12)",
              boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={thumb.src}
              alt={thumb.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle hover gold overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(233,180,108,0.08) 0%, transparent 60%)",
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes thumbnailScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}