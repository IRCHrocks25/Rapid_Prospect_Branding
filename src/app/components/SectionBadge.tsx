interface SectionBadgeProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
}

export function SectionBadge({ children, text, className = "" }: SectionBadgeProps) {
  return (
    <div className={`inline-flex items-center justify-center px-[23px] py-[7px] relative rounded-[100px] mb-6 ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[100px] pointer-events-none"
        style={{ border: "1px solid rgba(255,255,255,0.31)" }}
      />
      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 500,
          fontSize: "11px",
          lineHeight: "30px",
          color: "rgba(255,255,255,0.86)",
          letterSpacing: "7.36px",
          textTransform: "uppercase",
          whiteSpace: "normal",
          textAlign: "center",
        }}
      >
        {text ?? children}
      </p>
    </div>
  );
}