interface PlaceholderProps {
  className?: string;
  label?: string;
}

/** Diagonal "PLACEHOLDER" watermark used until real imagery is provided. */
export function Placeholder({ className = "", label = "PLACEHOLDER" }: PlaceholderProps) {
  return (
    <div className={`placeholder-box flex items-center justify-center ${className}`}>
      <span
        className="select-none text-sm font-semibold tracking-[0.3em] text-muted-foreground/70"
        style={{ transform: "rotate(-18deg)" }}
      >
        {label}
      </span>
    </div>
  );
}
